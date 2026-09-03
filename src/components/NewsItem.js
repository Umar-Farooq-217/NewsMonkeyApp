import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl , newsUrl} = this.props;

    return (
      <div className="card h-100 ">
        <img
          src={imgUrl}
          className="card-img-top"
          alt="news"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">
            {description}
          </p>

          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-primary mt-auto"
          >
            Read More
          </a>
        </div>
      </div>
    )
  }
}