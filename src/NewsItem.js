import React from "react";
class NewsItem extends React.Component {
  render() {
    const { item } = this.props;
    const date = new Date(item.publishedAt);
    const formatDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formatTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });

    const Description = item.description || "No Description";

    const imageUrl =
      item.urlToImage ||
      "https://icrier.org/wp-content/uploads/2022/10/media-Event-Image-Not-Found.jpg";

    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        <div className="card border-0 shadow rounded col">
          <img
            src={imageUrl}
            className="card-img-top rounded "
            style={{ height: 250 }}
            alt={item.title}
          />
          <div className="card-body p-2">
            <h5 className="card-title text-dark text-truncate">{item.title}</h5>
            <p className="card-text text-truncate">{Description}</p>
            <p className="card-text">
              <small className="text-muted">
                Published on {formatDate} at {formatTime}
              </small>
            </p>
          </div>
        </div>
      </a>
    );
  }
}

export default NewsItem;
