import logo from "./logo.svg";
import "./App.css";
import Menu from "./MenuList";
import NewsGrid from "./NewsGrid";
import Profile from "./Profile";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=66c94f9b26fd4eacbd65dd21cbb1fe82`
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, [category]);

  return (
    <div className="container">
      <Router>
        <h1 className="text-center mt-5">See the Latest News</h1>
        <Menu active={active} setActive={setActive} setCategory={setCategory} />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<NewsGrid items={items} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
