import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export function Slider() {
  return (
    <Flex
      w='100%'
      maxW='1280px'
      h={['250px', '450px']}
      mx='auto'
      mb={['5', '10']}
    >
      <Swiper
        style={{ width: '100%', flex: '1' }}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 4000 }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        grabCursor
      >
        <SwiperSlide>
          <Flex
            w='100%'
            h='100%'
            align='center'
            justify='center'
            direction='column'
            bgImage="url('/continents/europe-slider-img.svg')"
            bgPosition='center'
            bgSize='cover'
            textAlign='center'
          >
            <Link href='/continent/europe'>
              <a>
                <Heading
                  color='gray.100'
                  fontSize={['3xl', '4xl', '5xl']}
                  fontWeight='bold'
                >
                  Europa
                </Heading>
                <Text
                  color='gray.300'
                  fontSize={['0.8rem', '1xl', '2xl']}
                  fontWeight='bold'
                  mt={['2', '4']}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w='100%'
            h='100%'
            align='center'
            justify='center'
            direction='column'
            bgImage="url('/continents/europe-slider-img.svg')"
            bgPosition='center'
            bgSize='cover'
            textAlign='center'
          >
            <Link href='/continent/europe'>
              <a>
                <Heading
                  color='gray.100'
                  fontSize={['3xl', '4xl', '5xl']}
                  fontWeight='bold'
                >
                  Europa
                </Heading>
                <Text
                  color='gray.300'
                  fontSize={['0.8rem', '1xl', '2xl']}
                  fontWeight='bold'
                  mt={['2', '4']}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
