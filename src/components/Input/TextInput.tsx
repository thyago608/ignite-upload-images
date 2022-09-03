import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldErrors } from 'react-hook-form';
import {
  FormControl,
  FormErrorMessage,
  Icon,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Tooltip,
} from '@chakra-ui/react';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends ChakraInputProps {
  name: string;
  error?: FieldErrors;
}

const TextInputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, ...rest },
  ref
) => {
  const hasError = !!error[name];

  return (
    <FormControl
      display="flex"
      flexDirection="row"
      alignItems="center"
      isInvalid={hasError}
    >
      <ChakraInput
        aria-label={name}
        name={name}
        ref={ref}
        borderColor="transparent"
        bgColor="pGray.800"
        color="pGray.50"
        _placeholder={{
          color: 'pGray.200',
        }}
        _hover={{
          borderColor: 'orange.400',
        }}
        py={6}
        pr={8}
        {...rest}
      />
      {hasError && (
        <Tooltip label={error[name].message} bg="red.500">
          <FormErrorMessage ml={-6} mt={0} zIndex="tooltip">
            <Icon as={FiAlertCircle} color="red.500" w={4} h={4} />
          </FormErrorMessage>
        </Tooltip>
      )}
    </FormControl>
  );
};

export const TextInput = forwardRef(TextInputBase);
