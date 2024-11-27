import { Box, Image, Text, VStack, Badge } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './NewsDetail.css';
import { News } from "../tipo";

export const NewsDetail = () => {
    const { idNoticia } = useParams<{ idNoticia: string }>();
    const [news, setNews] = useState<News | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://apinode-production-5616.up.railway.app/news/${idNoticia}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data: News = await response.json();

                setNews(data);
                setLoading(false);
            } catch (err) {
                setError((err as Error).message);
                setLoading(false);
            }
        };

        fetchNews();
    }, [idNoticia]);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error}</Text>;
    if (!news) return <Text>News not found</Text>;

    const { title, image, content, category_news } = news;

    return (
        <Box p="6">
            <VStack spacing="4" align="start">
                <div className="container_text">
                    <Text fontSize="3xl" fontWeight="bold">{title}</Text>
                </div>
                <Badge fontSize={20} colorScheme="red">{category_news}</Badge>
                <Image src={image} width="100%" objectFit="cover" />
                <Box>
                    <div
                        style={{ width: '100%', fontSize: '20px' }}
                        dangerouslySetInnerHTML={{ __html: content }}
                    ></div>
                </Box>
            </VStack>
        </Box>
    );
};
