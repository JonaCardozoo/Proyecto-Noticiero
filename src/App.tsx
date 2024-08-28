import { useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { MainStory } from "./components/MainStory/MainStory";
import { EditorsPicks } from "./components/EditorsPicks/EditorsPicks";
import { Admin } from "./components/Admin/Admin";
import './App.css'
import Login from "./components/Login/Login";
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
      <Box bg="gray.100" minH="100vh">
        < Header />
        <Container maxW="container.xl" mt={6}>
          <Routes>
            <Route
              path="/"
              element={
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                  <GridItem colSpan={2}>
                    <MainStory newsList={mainStoryList} />
                  </GridItem>
                  <GridItem>
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
