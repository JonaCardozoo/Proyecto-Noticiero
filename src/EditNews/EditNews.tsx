import { Box, Button, Input, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

interface News {
  idNoticia: string;
  username: string;
  title: string;
  date: string;
  image: string;
  content: string;
  category: 'MainStory' | 'EditorsPicks';
  category_news: string;
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'blockquote', 'code-block',
  'list', 'bullet',
  'link', 'image',
];

const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline', 'strike'],
    ['link', 'image'],
    ['blockquote', 'code-block'],
    [{ 'align': [] }],
  ],
};

interface EditNewsProps {
  newsList: News[];
  setNewsList: React.Dispatch<React.SetStateAction<News[]>>;
}

export const EditNews = ({ newsList, setNewsList }: EditNewsProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const news = location.state as News;

  const [formData, setFormData] = useState<News>({
    idNoticia: news.idNoticia,
    username: news.username,
    title: news.title,
    date: news.date,
    image: news.image,
    content: news.content,
    category: news.category,
    category_news: news.category_news,
  });

  useEffect(() => {
    setFormData(news);
  }, [news]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setFormData({ ...formData, category: value as 'MainStory' | 'EditorsPicks' });
  };

  const handleContentChange = (value: string) => {
    setFormData({ ...formData, content: value });
  };

  const handleSave = () => {
    const updatedNewsList = newsList.map((item) =>
      item.title === formData.title ? formData : item
    );
    setNewsList(updatedNewsList);
    localStorage.setItem('newsList', JSON.stringify(updatedNewsList));
    navigate('/');
  };

  return (
    <Box>
      <h1>Editar Noticia</h1>
      <FormControl>
        <FormLabel>Título</FormLabel>
        <Input
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Fecha</FormLabel>
        <Input
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Imagen (URL)</FormLabel>
        <Input
          name="image"
          value={formData.image}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Categoría</FormLabel>
        <Select
          placeholder="Selecciona la categoría"
          value={formData.category}
          onChange={handleSelectChange}
          border={"1px solid"}
        >
          <option value="MainStory">MainStory</option>
          <option value="EditorsPicks">EditorsPicks</option>
        </Select>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Contenido</FormLabel>
        <ReactQuill value={formData.content} onChange={handleContentChange} modules={modules} formats={formats} />
      </FormControl>

      <Button onClick={handleSave} colorScheme="green" mt={4}>
        Guardar Cambios
      </Button>
    </Box>
  );
};
