import React from 'react';
import axios from "axios";
import Movie from "../components/movies";
import "./home.css";
import "../components/movie.css";

class Home extends React.Component{
  
  state = {
    isLoading: true,
    movies:[]
  };
  getMovies= async () => {
    const { data:
      { data:
        { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies , isLoading: false});
}
   componentDidMount() {
     this.getMovies();
  }
  render() {
    const { isLoading ,movies} = this.state;
    return (<section className="container">
      {isLoading ?
        (<div className="loader">
          <span className="loader__text">Loading...</span>
        </div>)
        : (
          <div className="movies">
            {movies.map(
              movie => {
            return <Movie key={movie.id}
              id={movie.id}
              title={movie.title}
              genres={movie.genres}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              year={movie.year} />
          })}
          </div>
        )}
    </section>
    );
  }
}




export default Home;