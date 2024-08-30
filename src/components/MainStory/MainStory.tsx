import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '/src/App.css'

interface News {
  title: string;
  date: string;
  image: string;
  category: 'MainStory' | 'EditorsPicks';
  content:string;
}

interface MainStoryProps {
  newsList: News[];
}

export const MainStory = ({ newsList }: MainStoryProps) => {
  const navigate = useNavigate();

  const handleNavigate = (news:News) =>{
    navigate('/news-detail',{state:news});
  }
  return (
    <Box className="main-history" width={{ base: "100%", md: "100%" }}>
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
            <Box position="relative" onClick={() => handleNavigate(news)} cursor={"pointer"}>
              <Image 
                cursor={"pointer"}
                src={news.image}
                alt={news.title}
                width={{ base: "100%", md: "900px" }}
                height={{ base: "400px", md: "700px" }}
                objectFit="cover"
              />
              <VStack
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="rgba(0, 0, 0, 0.5)"
                color="white"
                p={4}
                align="start"
                width="850px"
                overflow="hidden"
                boxSizing="border-box"
              >
                <Text fontSize={{ base: "14px", md: "20px"}} fontWeight="bold">
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
