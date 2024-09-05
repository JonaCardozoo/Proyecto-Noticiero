import { Box, Image, Text, VStack,Badge } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import './NewsDetail.css'
export const NewsDetail = () => {

    const location = useLocation();
    const { title, image, content,category_news } = location.state;
    
    return (
        <Box p="6">
            <VStack spacing="4" align="start">
                <div className="container_text">
                <Text fontSize="3x1" fontWeight="bold">
                    {title}
                </Text>
                </div>
                
                <Badge fontSize={20} colorScheme="red">{category_news}</Badge>
                <Image src={image} width="100%" objectFit="cover"></Image>
                <Box>
                    <div style={{width:'100%', fontSize:'20px'}} dangerouslySetInnerHTML={{__html:content}}></div>
                </Box>
            </VStack>
        </Box>
    );

}