import { Movie } from "./Movie";
import type { MovieProps } from "./MovieApplication";

interface ListOfMoviesProps {
    movies: MovieProps[];
    onDeleteMovie: (index: number) => void;
}

export function ListOfMovies({movies, onDeleteMovie}: ListOfMoviesProps) {
    return (
        <div>
            <h2>List of Movies</h2>
            <ul id="movie-list">
                {movies.map((movie, index: number) => (
                    <Movie key={index} titleOfMovie={movie.titleOfMovie} ratingWithStars={movie.ratingWithStars} onDelete={() => onDeleteMovie(index)}/>
                ))}
            </ul>
        </div>
    );
}