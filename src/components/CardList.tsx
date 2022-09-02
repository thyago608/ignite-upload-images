import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState('');

  function handleOpenViewImage(url: string) {
    setImage(url);
    onOpen();
  }

  const images = [
    {
      data: {
        title: 'Ignite1',
        description: 'Wallpaper 4k',
        url: 'https://images.pexels.com/photos/8619617/pexels-photo-8619617.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ts: 324324,
      },
      viewPage: (url: string) => {},
    },
    {
      data: {
        title: 'Ignite2',
        description: 'Wallpaper 4k',
        url: 'https://images.pexels.com/photos/8619617/pexels-photo-8619617.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ts: 324324,
      },
      viewPage: (url: string) => {},
    },
    {
      data: {
        title: 'Ignite3',
        description: 'Wallpaper 4k',
        url: 'https://images.pexels.com/photos/8619617/pexels-photo-8619617.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ts: 324324,
      },
      viewPage: (url: string) => {},
    },
    {
      data: {
        title: 'Ignite4',
        description: 'Wallpaper 4k',
        url: 'https://images.pexels.com/photos/8619617/pexels-photo-8619617.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ts: 324324,
      },
      viewPage: (url: string) => {},
    },
  ];

  return (
    <SimpleGrid columns={3} spacing={10}>
      {images.map(card => (
        <Card
          key={card.data.title}
          data={card.data}
          viewImage={handleOpenViewImage}
        />
      ))}
      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl="https://images.pexels.com/photos/8619617/pexels-photo-8619617.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </SimpleGrid>
  );
}
