// App.js
import logo from "./logo.svg";
import "./App.css";
import Menu from "./MenuList";
import NewsGrid from "./NewsGrid";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("all"); 

  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = () => {
    let apiUrl;

    if (category === "all") {
      apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=66c94f9b26fd4eacbd65dd21cbb1fe82`;
    } else {
      apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=66c94f9b26fd4eacbd65dd21cbb1fe82`;
    }

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data.articles);
      })
      .catch((error) => console.error("Error fetching news:", error));
  };

  return (
    <div className="container">
      <Router>
        <h1 className="text-center mt-5">See the Latest News</h1>
        <Menu active={active} setActive={setActive} setCategory={setCategory} />
        <Routes>
          <Route path="/category/:category" element={<NewsGrid items={items} />} />
          <Route path="/" element={<Navigate to="/category/all" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
