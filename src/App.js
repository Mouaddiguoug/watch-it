import { useEffect, useContext } from 'react';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import MoviesContext from './Context/MoviesContext';

function App() {
  const { setType, movies ,movie ,type, fetchPopular, fetchMovieWithId } = useContext(MoviesContext);

  useEffect(() => {
    fetchMovieWithId();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Main></Main>
    </div>
  );
}

export default App;
