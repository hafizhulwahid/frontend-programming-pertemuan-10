import { useEffect, useState } from "react";
import Button from "../Button/Button";
import StyledHero from "./Hero.styled";

function Hero() {
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");

    const data = await response.json();

    setMovie(data);
  }

  // useEffect(async () => {
  //   const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");

  //   const data = await response.json();

  //   setMovie(data);

  //   // console.log(data);
  // }, []);

  useEffect(fetchMovie, []);

  console.log(movie);
  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>{movie.Title}</h2>
          <h3>
            Genre: {movie.Genre}
          </h3>
          <p>
            {movie.Plot}
          </p>
          <Button md variant="secondary">Watch</Button>
        </div>
        <div className="hero__right">
          <img
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
