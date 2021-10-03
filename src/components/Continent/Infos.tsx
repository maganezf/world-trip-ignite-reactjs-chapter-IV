import {
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  PopoverCloseButton,
  PopoverBody,
  Text,
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

interface InfoItemProps {
  quantity: number;
  label: string;
}

export function InfoItem({ quantity, label }: InfoItemProps) {
  return (
    <Flex
      direction='column'
      justify='center'
      align={['flex-start', 'flex-start', 'center']}
    >
      <Heading color='yellow.400' fontSize={['2xl', '5xl']} fontWeight='500'>
        {quantity}
      </Heading>

      <Text color='gray.700' fontSize={['md', 'xl']} fontWeight='500'>
        {label}
      </Text>
    </Flex>
  );
}

interface InfoItemTriggerProps {
  quantity: number;
  label: string;
  items: string[];
}

export function InfoItemTrigger({
  quantity,
  label,
  items,
}: InfoItemTriggerProps) {
  return (
    <Flex
      direction='column'
      justify='center'
      align={['flex-start', 'flex-start', 'center']}
    >
      <Heading color='yellow.400' fontSize={['2xl', '5xl']} fontWeight='500'>
        {quantity}
      </Heading>

      <Text color='gray.700' fontSize={['md', 'xl']} fontWeight='500'>
        {label}

        <Popover>
          <PopoverTrigger>
            <span>
              <Icon
                as={RiInformationLine}
                w={['10px', '16px']}
                h={['10px', '16px']}
                color='gray.400'
                cursor='pointer'
                ml='1'
              />
            </span>
          </PopoverTrigger>

          <PopoverContent color='gray.700'>
            <PopoverArrow bg='gray.700' />
            <PopoverCloseButton />

            <PopoverBody fontWidth='400' fontSize='lg'>
              {items.map(item => item).join(', ')}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Text>
    </Flex>
  );
}
