import { Heading } from '@chakra-ui/react';

export function TravelHeading() {
  return (
    <Heading
      textAlign='center'
      fontSize={['lg', '3xl', '4xl']}
      fontWeight='500'
      mb={['5', '14']}
    >
      Vamos nessa? <br />
      Então escolha seu continente
    </Heading>
  );
}
