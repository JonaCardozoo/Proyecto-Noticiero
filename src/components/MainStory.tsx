import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Importa los módulos necesarios de Swiper 11
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '/src/App.css'
// Configura Swiper para usar los módulos

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
        modules={[Autoplay, Pagination, Navigation]} // Configura los módulos aquí
      >
        {newsList.map((news, index) => (
          <SwiperSlide key={index}>
            <Box position="relative">
              <Image src={news.image} alt={news.title} />
              <VStack
              
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="rgba(0, 0, 0, 0.5)"
                color="white"
                p={4}
                align="start"
              >
                <Text fontSize="2xl" fontWeight="bold">
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
