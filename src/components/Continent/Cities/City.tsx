import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface CityProps {
  city: string;
  cityImg: string;
  country: string;
  countryImg: string;
}

export function City({ city, cityImg, country, countryImg }: CityProps) {
  return (
    <Box maxW='256px' borderRadius='4px' overflow='hidden'>
      <Image
        w='100%'
        h='170px'
        objectFit='cover'
        src={`/cities/${cityImg}.svg`}
        alt={cityImg}
      />

      <Flex
        p='6'
        align='center'
        justify='space-between'
        bg='white'
        border='1px'
        borderColor='yellow.300'
        borderTop='0'
      >
        <Flex direction='column'>
          <Heading fontSize='xl' fontWeight='500'>
            {city}
          </Heading>

          <Text mt='3' fontSize='md' fontWeight='500' color='gray.500'>
            {country}
          </Text>
        </Flex>

        <Image
          w='30px'
          h='30px'
          objectFit='cover'
          borderRadius='full'
          src={`/flags/${countryImg}.svg`}
          alt={countryImg}
        />
      </Flex>
    </Box>
  );
}
