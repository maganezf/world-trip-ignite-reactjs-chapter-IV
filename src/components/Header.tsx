import { Flex, Grid, Icon, Image } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {
  const { asPath } = useRouter();

  const isNotHomePage: boolean = asPath !== '/';

  return (
    <Flex
      as='header'
      w='100%'
      h={['50px', '100px']}
      align='center'
      justify='center'
      bg='white'
      px='1rem'
    >
      <Grid
        maxW='1160px'
        w='100%'
        h='100%'
        alignItems='center'
        justifyContent='center'
        mx='auto'
        templateColumns='repeat(3, 1fr)'
      >
        {isNotHomePage && (
          <Link href='/'>
            <a style={{ width: 'fit-content' }}>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf='start'
              />
            </a>
          </Link>
        )}

        <Image
          w={['81px', '184px']}
          src='/logo.svg'
          alt='logo'
          justifySelf='center'
          gridColumn='2'
        />
      </Grid>
    </Flex>
  );
}
