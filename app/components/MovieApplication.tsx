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

    return (
        <main>
            <div className="movie-application">
                <h1>Movie Finder</h1>
                <AddMovieForm />
                <ListOfMovies movies={movies}/>
                <div className="order-buttons">
                    <OrderByAlphaButton nameOfButton="Sort by Alphabet" />
                    <OrderByGradeButton nameOfButton="Sort by Grade" />
                </div>
            </div>
        </main>
    );
}