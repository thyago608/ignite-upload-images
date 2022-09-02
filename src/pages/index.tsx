import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

interface PageProps {
  data: {
    title: string;
    description: string;
    url: string;
    ts: number;
    id: string;
  }[];
  after: string;
}

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['images'],
    async ({ pageParam = null }) => {
      const response = await api.get('images', {
        params: { after: pageParam },
      });
      return response.data;
    },
    {
      getNextPageParam: lastPage => lastPage.nextCursor,
    }
  );

  const formattedData = useMemo(() => {
    const pageList = data?.pages.map((page: PageProps) => {
      return [...page.data];
    });

    return pageList?.flat();
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
          </Button>
        )}
      </Box>
    </>
  );
}
