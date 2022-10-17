import React, {createContext, useState, useEffect} from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {

  const [type, setType] = useState('movie');
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [loading, isLoading] = useState(false);

  const fetchPopular = async () => {
    isLoading(true);
    try{
      const response = await fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=71a7c06b948e1262aec789e5bea4f67b&language=en-US&page=1`);
      const data = await response.json();
      if(type == "tv"){
        for (let index = 0; index < movies.length; index++) {
          data.results[index].title = data.results[index].name;
          delete data.results[index].name;
          console.log(data.results[index].title);
        }
        setMovies(data.results)
        isLoading(false);
      }
      else{
        setMovies(data.results);
        isLoading(false);
      }
    }
    catch(err){
      console.log(err);
      throw new Error('something went wrong');
      isLoading(false);
    }
  }

  const fetchMovieWithId = async () => {
    isLoading(true);
    try{
      const response = await fetch(`https://api.themoviedb.org/3/movie/634649?api_key=71a7c06b948e1262aec789e5bea4f67b&language=en-US`);
      const data = await response.json();
      setMovie(data);
      isLoading(false);
    }
    catch(err){
      console.log(err);
      isLoading(false);
    }
  }

  return (
    <MoviesContext.Provider value={{ setType, movies, type, fetchPopular, movie, fetchMovieWithId, loading }}>
      { children }
    </MoviesContext.Provider>
  )

}

export default MoviesContext