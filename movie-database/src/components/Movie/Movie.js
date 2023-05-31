import Button from "../Button/Button";
import StyledMovie from "./Movie.styled";


function Movie(props) {
    const {movie} = props;
    return (
        <StyledMovie>
            <img
                src={movie.poster}
                alt="{movie.title}"
            />
            <h3 color={movie.color}>{movie.title}</h3>
            <p>{movie.year}</p>
        </StyledMovie>
    );
}

export default Movie;


