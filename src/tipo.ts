export interface AdminNews {
    title: string;
    date: string;
    image: string;
    category: "MainStory" | "EditorsPicks";
    content: string;
    category_news: string;
  }
  
  export interface News {
    title: string;
    date: string;
    image: string;
    category: "MainStory" | "EditorsPicks";
    content: string;
    category_news: string;
    username: string; // Este campo es opcional y solo se usa en otros lugares.
  }