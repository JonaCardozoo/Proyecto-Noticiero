import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { MainStory } from "./components/MainStory/MainStory";
import { EditorsPicks } from "./components/EditorsPicks/EditorsPicks";
import { Admin } from "./components/Admin/Admin";
import './App.css'
interface News {
  title: string;
  date: string;
  image: string;
  category: 'MainStory' | 'EditorsPicks';
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
      <Box bg="gray.200" minH="100vh">
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
                </Grid>
              }
            />
            <Route path="/admin" element={<Admin addNews={addNews} />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
