// MenuList.js
import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    const { active, setActive, setCategory } = this.props;

    const links = [
      { id: 1, name: "General", value: "general" },
      { id: 2, name: "Business", value: "business" },
      { id: 3, name: "Entertainment", value: "entertainment" },
      { id: 4, name: "Health", value: "health" },
      { id: 5, name: "Science", value: "science" },
      { id: 6, name: "Sports", value: "sports" },
      { id: 7, name: "Technology", value: "technology" },
    ];

    const onClick = (id, value) => {
      setActive(id);
      setCategory(value);
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            News App 029
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {links.map((link) => (
                <li
                  key={link.id}
                  className={`nav-item ${active === link.id ? "active" : ""}`}
                  onClick={() => onClick(link.id, link.value)}
                >
                  <Link
                    className={`nav-link ${
                      active === link.id ? "text-danger" : ""
                    }`}
                    to={`/category/${link.value}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
