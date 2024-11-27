export interface AdminNews {
  idNoticia: string;
  title: string;
  date: string;
  image: string;
  category: "MainStory" | "EditorsPicks";
  content: string;
  category_news: string;
  username: string;
}

export interface News {
  idNoticia: string;
  username?: string;
  title: string;
  date: string;
  image: string;
  category: "MainStory" | "EditorsPicks";
  content: string;
  category_news: string;
}
