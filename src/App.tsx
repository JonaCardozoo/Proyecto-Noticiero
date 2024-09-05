import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { MainStory } from "./components/MainStory/MainStory";
import { EditorsPicks } from "./components/EditorsPicks/EditorsPicks";
import { Admin } from "./components/Admin/Admin";
import Footer from "./Footer/Footer"
import './App.css'
import { NewsDetail } from "./NewsDetail/NewsDetail";
import MarqueeComponent from "./Marquee/Marquee";

interface News {
  title: string;
  date: string;
  image: string;
  category: 'MainStory' | 'EditorsPicks';
  content: string;
  category_news: string;
}

function App() {
  const [newsList, setNewsList] = useState<News[]>(() => {
    const savedNews = localStorage.getItem('newsList');
    return savedNews ? JSON.parse(savedNews) : [];
  });

  const addNews = (news: News) => {
    const updatedNewsList = [...newsList, news];
    setNewsList(updatedNewsList);
    localStorage.setItem('newsList', JSON.stringify(updatedNewsList));
  };

  const mainStoryList = newsList.filter(news => news.category === 'MainStory');
  const editorsPicksList = newsList.filter(news => news.category === 'EditorsPicks');

  return (
    <Router>
      <Box bg="#CBD5E0" minH="100vh">
        < Header />
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
            <Route path="/news-detail" element={<NewsDetail></NewsDetail>}></Route>
          </Routes>

        </Container>
        <MarqueeComponent></MarqueeComponent>
        <Footer></Footer>
      </Box>
    </Router>

  );
}

export default App;
