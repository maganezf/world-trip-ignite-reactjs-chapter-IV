import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      w='100%'
      h={['163px', '250px', '250px', '335px']}
      bgImage="url('/banner-image.svg')"
      bgRepeat='no-repeat'
      bgSize='cover'
      bgPosition='center'
    >
      <Flex
        w='100%'
        mx='auto'
        px={['4', '10', '15', '20', '36']}
        justify={['center', 'space-between']}
        align='center'
      >
        <Box>
          <Heading
            color='gray.100'
            fontWeight='500'
            fontSize={['xl', '2l', '2xl', '4xl']}
          >
            5 continentes <br />
            infinitas possibilidades
          </Heading>

          <Text
            maxW={['100%', '100%', '550px']}
            color='gray.300'
            mt='5'
            fontSize={['0.8rem', 'xl']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          src='/airplane.svg'
          alt='airplane'
          transform='translateY(48px)'
          ml='8'
        />
      </Flex>
    </Flex>
  );
}
