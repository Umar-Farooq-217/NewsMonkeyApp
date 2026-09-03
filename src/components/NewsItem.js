import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl , newsUrl} = this.props;

    return (
      <div className="card h-100 ">
        <img
          src={!imgUrl ? "https://image.cnbcfm.com/api/v1/image/108328945-1782851611262-gettyimages-2284068650-_73a9042_mpprsnxl.jpeg?v=1782851800&w=1480&h=833&ffmt=webp&vtcrop=y":imgUrl}
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
            className="btn btn-dark mt-auto"
          >
            Read More
          </a>
        </div>
      </div>
    )
  }
}