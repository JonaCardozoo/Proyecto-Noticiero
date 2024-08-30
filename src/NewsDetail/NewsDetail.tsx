import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export const NewsDetail = () => {

    const location = useLocation();
    const { title, image, content } = location.state;

    return (
        <Box p="6">
            <VStack spacing="4" align="start">
                <Text fontSize="3x1" fontWeight="bold">
                    {title}
                </Text>
                
                <Image src={image} width="100%" objectFit="cover"></Image>
                <Box>
                    <div style={{width:'100%', fontSize:'20px'}} dangerouslySetInnerHTML={{__html:content}}></div>
                </Box>
            </VStack>
        </Box>
    );

}