// src/pages/Home.jsx
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard"; // Requires MovieCard component
import { fetchData } from "../data"; 

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData('movies').then(setMovies);
  }, []);

  return (
    <>
      <header>
        <NavBar /> 
      </header>
      <main>
        <h1>Home Page</h1> {/* Required by Home.test.jsx */}
        <section>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} /> 
          ))}
        </section>
      </main>
    </>
  );
};
export default Home;
