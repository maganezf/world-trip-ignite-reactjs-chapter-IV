import { Flex } from '@chakra-ui/react';
import { ContinentBanner } from 'components/Continent/ContinentBanner';
import { Content } from 'components/Continent/Content';
import { Cities } from 'components/Continent/Cities';
import { Header } from 'components/Header';

export default function Continent() {
  return (
    <Flex direction='column'>
      <Header />
      <ContinentBanner />

      <Flex direction='column' maxW='1160px' mx='auto' mb='10' px='1rem'>
        <Content />
        <Cities />
      </Flex>
    </Flex>
  );
}
