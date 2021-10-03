import { Flex, Grid, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      bg='white'
      w='100%'
      as='header'
      px='1rem'
      h={['50px', '100px']}
      align='center'
      justify='center'
    >
      <Grid
        h='100%'
        mx='auto'
        w='100%'
        maxW='1160px'
        alignItems='center'
        justifyContent='center'
        templateColumns='repeat(3, 1fr)'
      >
        <Image
          src='/logo.svg'
          alt='logo'
          justifySelf='center'
          gridColumn='2'
          w={['81px', '184px']}
        />
      </Grid>
    </Flex>
  );
}
