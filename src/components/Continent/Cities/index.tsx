import { Grid, Heading } from '@chakra-ui/react';
import { City } from './City';

export function Cities() {
  return (
    <>
      <Heading fontWeight='500' fontSize={['2xl', '4xl']} mb='10'>
        Cidades +100
      </Heading>

      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        alignItems='center'
        justifyContent='center'
        px={['30px', '0']}
      >
        <City
          city='Londres'
          cityImg='londres'
          country='Reino Unido'
          countryImg='united-kingdom'
        />

        <City
          city='Paris'
          cityImg='paris'
          country='França'
          countryImg='france'
        />

        <City city='Roma' cityImg='rome' country='Itália' countryImg='italy' />

        <City
          city='Praga'
          cityImg='prague'
          country='República Tcheca'
          countryImg='czech-republic'
        />

        <City
          city='Amsterdã'
          cityImg='amsterdam'
          country='Holanda'
          countryImg='netherlands'
        />
      </Grid>
    </>
  );
}
