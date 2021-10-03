import { Flex, Heading } from '@chakra-ui/react';

export function ContinentBanner() {
  return (
    <Flex
      w='100%'
      h={['150px', '300px', '500px']}
      align='center'
      justify={['center', 'center', 'flex-start']}
      px={['0', '0', '36']}
      pt={['0', '0', '72']}
      bgImage="url('/continents/europe-header.svg')"
      bgRepeat='no-repeat'
      bgPosition='center'
      bgSize='cover'
    >
      <Heading
        textAlign={['center', 'left']}
        fontSize={['1.75rem', '5xl']}
        fontWeight='500'
        color='gray.100'
      >
        Europa
      </Heading>
    </Flex>
  );
}
