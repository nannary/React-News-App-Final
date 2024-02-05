import React from "react";
class NewsItem extends React.Component {
  render() {
    const { item } = this.props;
    const WebsiteUrl = item.url;
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
    const Author = item.author || "No author information";

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
        <div className="card border-0 shadow rounded col overflow-hidden position-relative">
          <img
            src={imageUrl}
            className="card-img-top rounded scale"
            style={{ height: 250 }}
            alt={item.title}
          />
          <div className="card-body p-2">
            <div className="d-flex align-items-center">
              <img
                src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${WebsiteUrl}&size=16`}
                className="me-2 mb-2 "
                alt="{item.source.id}"
              ></img>
              <span className="text-truncate">{item.source.name}</span>
            </div>
            <h5 className="card-title text-dark text-truncate">{item.title}</h5>
            <p className="card-text text-truncate">{Description}</p>
            <p className="card-text">
              <small className="text-muted">
                <div className="author-info d-flex align-items-center">
                  <span className="material-symbols-outlined me-2">person_edit</span>
                  {Author}
                </div>
                <span className="fw-bolder">Published on</span> {formatDate} at{" "}
                {formatTime}
              </small>
            </p>
          </div>
        </div>
      </a>
    );
  }
}

export default NewsItem;
