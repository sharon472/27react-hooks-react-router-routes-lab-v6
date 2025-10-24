import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { fetchData } from "../data";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchData('actors').then(setActors);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => (
          <section key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie) => (
                <li key={movie}>{movie}</li> 
              ))}
            </ul>
          </section>
        ))}
      </main>
    </>
  );
};

export default Actors;