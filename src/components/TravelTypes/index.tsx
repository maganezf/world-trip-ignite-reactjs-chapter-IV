import { Grid, GridItem } from '@chakra-ui/react';
import { TravelTypeItem } from './TravelTypeItem';

export function TravelTypes() {
  return (
    <Grid
      maxW='1160px'
      w='100%'
      mt={['10', '32']}
      mx='auto'
      justifyContent='space-between'
      align='center'
      gap={[1, 5]}
      templateColumns={[
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(5, 1fr)',
      ]}
    >
      <GridItem>
        <TravelTypeItem iconName='cocktail' label='vida noturna' />
      </GridItem>

      <GridItem>
        <TravelTypeItem iconName='surf' label='praia' />
      </GridItem>

      <GridItem>
        <TravelTypeItem iconName='building' label='moderno' />
      </GridItem>

      <GridItem>
        <TravelTypeItem iconName='museum' label='clássico' />
      </GridItem>

      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelTypeItem iconName='earth' label='e mais...' />
      </GridItem>
    </Grid>
  );
}
