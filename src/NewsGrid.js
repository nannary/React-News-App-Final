import React from "react";
import NewsItem from "./NewsItem";

class NewsGrid extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <div className="container mt-3 mb-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {items.length > 0 ? (
            items.map((item, i) => (
              <div key={i} className="col">
                <div className="card h-100 shadow">
                  <NewsItem item={item}></NewsItem>
                </div>
              </div>
            ))
          ) : (
            <p>No news available for this category</p>
          )}
        </div>
      </div>
    );
  }
}

export default NewsGrid;
