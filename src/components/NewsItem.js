import React from "react";

const NewsItem =(props)=> {
    let { title, description, imageUrl, newsUrl, source } = props;
    const truncatedDescription =
      description && description.length > 50
        ? `${description.substring(0, 50)}...`
        : description;
    return (
      <div>
        <div
          className="card my-3"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <img
            src={
              !imageUrl
                ? "https://cdnstatic.rg.ru/uploads/images/2024/04/15/8_80bf4bf9_868.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
            style={{ height: "150px", objectFit: "cover" }}
          />
          <div className="card-body" style={{ minHeight: "200px" }}>
            <h5 className="card-title">
              {title}
              <span
                className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                style={{ display:"flex",justifyContent:"flex-end",position:"absolute", right:"0" }}
              >
                {source}
              </span>
            </h5>
            <p
              className="card-text"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxHeight: "80px",
              }}
            >
              {truncatedDescription}
            </p>
            <a
              href={newsUrl}
              target="noopener"
              className="btn btn-dark"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Read More&rarr;
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
