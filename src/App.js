import Directory from "./components/directory/directory";

import "./categories.styles.scss";

const categories = [
  {
    id: 1,
    title: "New Arrivals",
    imageUrl:
      "https://aypoo.com.ar/wp-content/uploads/2022/10/20221012_130632.jpg",
  },
  {
    id: 2,
    title: "Remeras",
    imageUrl:
      "https://aypoo.com.ar/wp-content/uploads/2021/01/1620055625061.jpg",
  },
  {
    id: 3,
    title: "Vestidos",
    imageUrl: "https://aypoo.com.ar/wp-content/uploads/2021/10/931-9.jpg",
  },
  {
    id: 4,
    title: "Blusas",
    imageUrl:
      "https://aypoo.com.ar/wp-content/uploads/2022/07/IMG-0152-scaled.jpg",
  },
  {
    id: 5,
    title: "Calzas",
    imageUrl: "https://aypoo.com.ar/wp-content/uploads/2019/05/10.jpg",
  },
];

const App = () => {
  return <Directory categories={categories} />;
};
