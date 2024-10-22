import { Box, Image, Text, VStack,Badge} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import './EditorsPicks.css'

interface News {
  title: string;
  date: string;
  image: string;
  category_news:string;
}

interface EditorsPicksProps {
  newsList: News[];
}

export const EditorsPicks = ({ newsList }: EditorsPicksProps) => {
  const navigate = useNavigate();

  const handleNavigate = (news:News) =>{
    navigate('/news-detail',{state:news});
  }

  
  return (
    <Box className="editors-picks" width="100%">
      <h1 className="Text_Editors">Te puede interesar</h1>
      {newsList.map((news, index) => (
        
        <Box className="container_Editors" onClick={()=> handleNavigate(news)} cursor={'pointer'}
          key={index} 
          bg="white" 
          boxShadow="lg" 
          p={4} 
          rounded="md" 
          mb={4}
          
          width={{ base: "100%", md: "100%" }} 
          mx={{ base: "auto", md: "0" }} 
        >
           <Badge margin={3} fontSize={20} colorScheme='red'>{news.category_news}</Badge>
          <Image src={news.image} alt={news.title} />
          <VStack align="start" mt={4}>
            <Text fontSize="2xl" fontWeight="bold">{news.title}</Text>
            <Text fontSize="sm" color="gray.500">{news.date}</Text>
           
          </VStack>
        </Box>
      ))}
    </Box>
  );
};
