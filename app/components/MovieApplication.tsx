import { useState } from "react";
import { AddMovieForm } from "./AddMovieForm";
import { ListOfMovies } from "./ListOfMovies";
import { OrderByAlphaButton } from "./OrderByAlphaButton";
import { OrderByGradeButton } from "./OrderByGradeButton";

export interface MovieProps {
    titleOfMovie: string;
    ratingWithStars: number;
}

export function MovieApplication() {
    const [movies, setMovies] = useState<MovieProps[]>([]);

    function addMovie(title: string, rating: number) {
        const newMovie: MovieProps = {
            titleOfMovie: title,
            ratingWithStars: rating
        };
        setMovies([...movies, newMovie]);
    }

    function sortMoviesByRating() {
        const sorted = [...movies].sort ((i, j) =>
        j.ratingWithStars - i.ratingWithStars);
        setMovies(sorted);
    }

    function sortMoviesByTitle() {
        const sorted = [...movies].sort((i, j) =>
        i.titleOfMovie.localeCompare(j.titleOfMovie));
        setMovies(sorted);
    }

    function onDeleteMovie(index: number) {
        const updatedMovies = [...movies];
        updatedMovies.splice(index, 1);
        setMovies(updatedMovies);
    } 

    return (
        <main>
            <div className="movie-application">
                <h1>Movie Finder</h1>
                <AddMovieForm onAddMovie={addMovie}/>
                <ListOfMovies movies={movies} onDeleteMovie={onDeleteMovie}/>
                <div className="order-buttons">
                    <OrderByAlphaButton nameOfButton="Sort by Alphabet" onClick={sortMoviesByTitle}/>
                    <OrderByGradeButton nameOfButton="Sort by Grade" onClick={sortMoviesByRating}/>
                </div>
            </div>
        </main>
    );
}