import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '/src/App.css'

interface News {
  title: string;
  date: string;
  image: string;
  category: 'MainStory' | 'EditorsPicks';
}

interface MainStoryProps {
  newsList: News[];
}

export const MainStory = ({ newsList }: MainStoryProps) => {
  return (
    
    <Box>
      <h1 className="text_UltimasNoticias">Ultimas Noticias</h1>  
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
          
        }}
        
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {newsList.map((news, index) => (
          <SwiperSlide key={index}>
            <Box position="relative">
              <Image  src={news.image} alt={news.title} width="800px" height="650px" objectFit="cover"/>
              <VStack

                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="rgba(0, 0, 0, 0.5)"
                color="white"
                p={4}
                align="start"
                width="800px"
                overflow="hidden"
                boxSizing="border-box"
              >
                <Text  fontSize="2xl" fontWeight="bold">
                  {news.title}
                </Text>
              </VStack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
