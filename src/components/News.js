import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {



  constructor() {
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bdd6df78c0ef4aaba158bf6cd0de0edf&page=1&pageSize=24";
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults : parsedData.totalResults, loading: false });

  }
  previousHandle = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bdd6df78c0ef4aaba158bf6cd0de0edf&page=${this.state.page - 1}&pageSize=24`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page : this.state.page - 1 , 
      articles : parsedData.articles,
      loading: false,
    })

  }

  nextHandle = async () => {
    this.setState({ loading: true });
    if(this.state.page + 1 > Math.ceil(this.state.totalResults / 24))
    {}
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bdd6df78c0ef4aaba158bf6cd0de0edf&page=${this.state.page + 1}&pageSize=24`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles : parsedData.articles,
      loading: false
    })
    }
  }
  render() {

    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
         {this.state.loading && <Spinner/>}
        <div className="row my-3">
          {!this.state.loading &&this.state.articles.map((element) => {
            return <div className="col-md-3 d-flex my-3" key={element.url}>
              <NewsItem
                title={element.title ? element.title : "Default Title"}
                description={element.description ? element.description : "Default Description"}
                imgUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          })}
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.previousHandle}> &larr; Previous</button>
            <button disabled={this.state.page >= Math.ceil(this.state.totalResults / 24 )} type="button" class="btn btn-dark" onClick={this.nextHandle}> Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}
