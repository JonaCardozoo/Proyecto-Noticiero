import { useState } from "react";
import { Box, Input, Button, VStack, Select, useToast } from "@chakra-ui/react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Admin.css';

interface News {
  username: string;
  title: string;
  date: string;
  image: string;
  category: "MainStory" | "EditorsPicks";
  content: string;
  category_news: string;
}

interface AdminProps {
  addNews: (news: News) => Promise<void>;
}

export const Admin: React.FC<AdminProps> = ({ addNews }) => {
  const [username] = useState("Jona");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState<"MainStory" | "EditorsPicks" | "">("");
  const [content, setContent] = useState("");
  const [category_news, setCategoryNews] = useState("");
  const toast = useToast();

  const handleAddNews = async () => {
    if (!title || !date || !image || !category || !content || !category_news) {
      toast({
        title: "Campos incompletos.",
        description: "Por favor, completa todos los campos antes de agregar la noticia.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  
    const newNews: News = {
      username,
      title,
      date,
      image,
      category: category as "MainStory" | "EditorsPicks",
      content,
      category_news
    };
  
    try {
      await addNews(newNews);
      toast({
        title: "Noticia agregada con éxito.",
        description: "La noticia ha sido agregada.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
  
      setTitle("");
      setDate("");
      setImage("");
      setCategory("");
      setContent("");
      setCategoryNews("");
    } catch (error) {
      toast({
        title: "Error.",
        description: "Ocurrió un error al agregar la noticia.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box className="Box">
      <VStack className="VStack" spacing={4}>
        <Input
          placeholder="Título de la noticia"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          border={"1px solid"}
        />
        <Input
          placeholder="Fecha"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          border={"1px solid"}
        />
        <Input
          placeholder="URL de la imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          border={"1px solid"}
        />
        <Input
          placeholder="Categoría de la noticia"
          value={category_news}
          onChange={(e) => setCategoryNews(e.target.value)}
          border={"1px solid"}
        />
        <Select
          placeholder="Selecciona la categoría"
          value={category}
          onChange={(e) => setCategory(e.target.value as "MainStory" | "EditorsPicks")}
          border={"1px solid"}
        >
          <option value="MainStory">MainStory</option>
          <option value="EditorsPicks">EditorsPicks</option>
        </Select>

        <ReactQuill
          className="ql_editor"
          style={{ width: '100%', height: '400px' }}
          value={content}
          onChange={setContent}
          placeholder="Escribe el contenido aquí..."
        />

        <Button margin={'33px'} colorScheme="blue" onClick={handleAddNews}>
          Agregar Noticia
        </Button>
      </VStack>
    </Box>
  );
};
