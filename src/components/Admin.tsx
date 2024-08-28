import React, { useState } from "react";
import { Box, Input, Button, VStack, Select, useToast } from "@chakra-ui/react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importa los estilos de React Quill

interface News {
  title: string;
  date: string;
  image: string;
  category: "MainStory" | "EditorsPicks";
  content: string; // Este es el campo para el contenido enriquecido
}

interface AdminProps {
  addNews: (news: News) => void;
}

export const Admin = ({ addNews }: AdminProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState<"MainStory" | "EditorsPicks" | "">("");
  const [content, setContent] = useState(""); // Estado para el contenido
  const toast = useToast();

  const handleAddNews = () => {
    if (!title || !date || !image || !category || !content) {
      toast({
        title: "Campos incompletos.",
        description: "Por favor, completa todos los campos antes de agregar la noticia.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newNews: News = { title, date, image, category: category as "MainStory" | "EditorsPicks", content };
    addNews(newNews);

    // Limpiar los campos después de agregar la noticia
    setTitle("");
    setDate("");
    setImage("");
    setCategory("");
    setContent("");
  };

  return (
    <Box>
      <VStack spacing={4}>
        <Input
          placeholder="Título de la noticia"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Fecha"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Input
          placeholder="URL de la imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Select
          placeholder="Selecciona la categoría"
          value={category}
          onChange={(e) => setCategory(e.target.value as "MainStory" | "EditorsPicks")}
        >
          <option value="MainStory">MainStory</option>
          <option value="EditorsPicks">EditorsPicks</option>
        </Select>

        <ReactQuill style={{width:'100%', height:'400px'}} value={content} onChange={setContent} placeholder="Escribe el contenido aquí..." />

        <Button style={{marginTop:'80px'}} colorScheme="blue" onClick={handleAddNews}>
          Agregar Noticia
        </Button>
      </VStack>
    </Box>
  );
};
