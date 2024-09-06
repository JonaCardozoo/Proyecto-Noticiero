import React from 'react';
import { Box, Image, Text, VStack, Badge, IconButton, useBreakpointValue, Button } from '@chakra-ui/react';
import Slider from 'react-slick';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainStory.css';


interface News {
  title: string;
  date: string;
  image: string;
  category: 'MainStory' | 'EditorsPicks';
  content: string;
  category_news: string;
}

interface MainStoryProps {
  newsList: News[];
}

export const MainStory = ({ newsList }: MainStoryProps) => {
  const navigate = useNavigate();
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  const handleEdit = (news: News) => {
    navigate('/edit-news', { state: news });
  };

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleNavigate = (news: News) => {
    navigate('/news-detail', { state: news });
  };
  
  return (
    <Box className="main-history" width={{ base: '100%', md: '100%' }} position="relative" height={'600px'} overflow={'hidden'}>
      
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        bg={'black'}
      >
        <BiLeftArrowAlt />
      </IconButton>
      
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        bg={'black'}
      >
        <BiRightArrowAlt />
      </IconButton>
      
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {newsList.map((news, index) => (
          <Box key={index} position="relative" onClick={() => handleNavigate(news)} cursor={"pointer"}>
            <Image
              cursor={"pointer"}
              src={news.image}
              alt={news.title}
              width={{ base: '100%', md: '900px' }}
              height={{ base: '400px', md: '700px' }}
              objectFit="cover"
            />
            <VStack
              position="absolute"
              bottom={{base:'0',md:'90px'}}
              left={0}
              right={0}
              bg="rgba(0, 0, 0, 0.5)"
              color="white"
              p={4}
              align="start"
              width="100%"
              boxSizing="border-box"
            >
              <Text fontSize={{ base: '14px', md: '20px' }} fontWeight="bold">
                {news.title}
              </Text>
              <Button onClick={() => handleEdit(news)} colorScheme='blue' size="sm">Editar</Button>
              <Badge margin={3} fontSize={20} colorScheme='red'>{news.category_news}</Badge>
            </VStack>
          </Box>
        ))}
      </Slider>
      
    </Box>
    
  );
};
