
import React ,{useEffect,useState} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props) => {
  const [articles, setarticls] = useState([])
  const [loading, setloading] = useState(true)
  const [currentPage, setcurrentPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)


   const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
   useEffect(() => {
      fetchData();
   }, [])
   

   const fetchMoreData = async () => {
    const nextPage = currentPage + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dc393223e287441081ed2a2480110178&page=${nextPage}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setarticls(articles.concat(parsedData.articles),)
    settotalResults(parsedData.totalResults)
    setcurrentPage(nextPage)

  };

   const fetchData = async () => {
    props.setLoading(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dc393223e287441081ed2a2480110178`;
    const data = await fetch(url);
    props.setLoading(30);
    const parsedData = await data.json();
    props.setLoading(70);
    setarticls(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
    props.setLoading(100);
  }


    return (
      <div className='container my-4'>
        <h1 className='text-center p-4'  style={{marginTop:"80px"}}> DailyNews-Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {articles.length === 0 && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={articles.length > 0 && loading ? <Spinner /> : null}
        > 
        <div className="container">
          <div className="row">
            {articles.map((element, index) => (
              <div className="col-md-3" key={index}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} />
              </div>
            ))}
          </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  
}

News. defaultProps = {
  country: 'in',
  category: 'general'
}

News. propTypes = {
  country: PropTypes.string,
  category: PropTypes.string
}

export default News;
