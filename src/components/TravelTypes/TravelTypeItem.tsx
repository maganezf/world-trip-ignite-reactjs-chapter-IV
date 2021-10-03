import { useBreakpointValue } from '@chakra-ui/media-query';
import { Flex, Image, Text } from '@chakra-ui/react';

interface TravelTypeItemProps {
  iconName: string;
  label: string;
}

export function TravelTypeItem({ iconName, label }: TravelTypeItemProps) {
  const isMobileLayout = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={['row', 'column']} align='center' justify='center'>
      {isMobileLayout ? (
        <Image
          w='85px'
          h='85px'
          mb='6'
          src={`/icons/${iconName}.svg`}
          alt={`${iconName}`}
        />
      ) : (
        <Text color='yellow.400' fontSize='4xl' mr='2'>
          •
        </Text>
      )}

      <Text color='gray.700' fontWeight='600' fontSize={['md', 'xl', '2xl']}>
        {label}
      </Text>
    </Flex>
  );
}
