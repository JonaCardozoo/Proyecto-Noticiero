import { Box, Image, Text, VStack } from "@chakra-ui/react";
import '/src/App.css'


interface News {
  title: string;
  date: string;
  image: string;
}

interface EditorsPicksProps {
  newsList: News[];
}

export const EditorsPicks = ({ newsList }: EditorsPicksProps) => {
  return (
    <Box>
      <h1 className="Text_Editors">Te puede interesar</h1>
      {newsList.map((news, index) => (
        <Box key={index} bg="white" boxShadow="lg" p={4} rounded="md" mb={4}>
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
