import { Box } from '@chakra-ui/react';

export function Spacer() {
  return (
    <Box
      w={['60px', '90px']}
      h='2px'
      mx='auto'
      my={['9', '20']}
      bg='gray.700'
      borderRadius='full'
    />
  );
}
