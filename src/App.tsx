import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { MainStory } from "./components/MainStory/MainStory";
import { EditorsPicks } from "./components/EditorsPicks/EditorsPicks";
import { Admin } from "./components/Admin/Admin";
import Footer from "./Footer/Footer";
import './App.css';
import { NewsDetail } from "./NewsDetail/NewsDetail";
import MarqueeComponent from "./Marquee/Marquee";
import { EditNews } from "./EditNews/EditNews";

interface News {
  username: string;
  title: string;
  date: string;
  image: string;
  category: "MainStory" | "EditorsPicks";
  content: string;
  category_news: string;
}

function App() {
  const [newsList, setNewsList] = useState<News[]>([]);

  
  const fetchNewsList = async () => {
    try {
      const response = await fetch('https://api-node-jwit.onrender.com/news');
      if (!response.ok) {
        throw new Error('Error al obtener las noticias');
      }
      const data = await response.json();
      
      setNewsList(data);
    } catch (error: unknown) {
      console.error('Error fetching news:', error);
    }
  };

  
  const addNews = async (news: News) => {
    try {
      const response = await fetch('https://api-node-jwit.onrender.com/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(news),
      });

      if (!response.ok) {
        throw new Error('Error al agregar la noticia');
      }

      
      await fetchNewsList();
    } catch (error) {
      console.error('Error adding news:', error);
    }
  };

  //Mostrar todas las noticias
  useEffect(() => {
    fetchNewsList();
  }, []);

  
  const mainStoryList = newsList.filter(news => news.category === 'MainStory');
  const editorsPicksList = newsList.filter(news => news.category === 'EditorsPicks');

  return (
    <Router>
      <Box bg="#f3f3f3" minH="100vh">
        <Header />
        <Container maxW="container.xl" mt={6}>
          <Routes>
            <Route
              path="/"
              element={
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                  gap={6}
                >
                  <GridItem colSpan={2}>
                    <MainStory newsList={mainStoryList} />
                  </GridItem>
                  <GridItem
                    colSpan={{ base: 1, md: 1 }}
                    mt={{ base: 4, md: 0 }}
                    display={{ base: "flex", md: "block" }}
                    justifyContent={{ base: "center", md: "unset" }}
                  >
                    <EditorsPicks newsList={editorsPicksList} />
                  </GridItem>

                  <GridItem colSpan={{ base: 2, md: 2 }}>
                    <div className="youtube_link" style={{ textAlign: 'center' }}>
                      <h1>Visítanos en nuestro canal de Youtube</h1>
                      <Link margin={{ base: '0' }} href="https://www.youtube.com/@codigopatron2336" isExternal style={{ display: 'inline-block' }}>
                        <Image
                          src="https://i.postimg.cc/W3yGdVV5/CPportada.png"
                          alt="Código Patrón"
                          boxSize={{ base: '100%', md: '150%', lg: '150%' }}
                          objectFit="cover"
                        />
                      </Link>
                    </div>
                  </GridItem>
                </Grid>
              }
            />
            <Route path="/admin" element={<Admin addNews={addNews} />} />
            <Route path="/news-detail" element={<NewsDetail />} />
            <Route
              path="/edit-news"
              element={<EditNews newsList={newsList} setNewsList={setNewsList} />}
            />
          </Routes>
        </Container>
        <MarqueeComponent />
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
