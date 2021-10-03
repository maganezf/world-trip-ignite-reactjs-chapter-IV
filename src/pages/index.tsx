import { Flex } from '@chakra-ui/react';
import { Banner } from 'components/Banner';
import { Header } from 'components/Header';
import { Slider } from 'components/Slider';
import { Spacer } from 'components/Spacer';
import { TravelHeading } from 'components/TravelHeading';
import { TravelTypes } from 'components/TravelTypes';

export default function Home() {
  return (
    <Flex direction='column'>
      <Header />
      <Banner />
      <TravelTypes />
      <Spacer />
      <TravelHeading />
      <Slider />
    </Flex>
  );
}
