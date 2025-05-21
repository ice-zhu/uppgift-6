import { Movie } from "./Movie";

export function AddMovieForm() {
    let titleOfMovieParam: string = (document.getElementById("search-field") as HTMLInputElement).value;
    let ratingWithStarsParam: number = parseInt((document.getElementById("rating") as HTMLSelectElement).value);
    return (
        <div>
            <h2>Add Movie</h2>
            <form id="add-movie-form">
                <fieldset>
                    <legend>Search for movies here</legend>
                    <label htmlFor="search-field">Title:</label>
                    <input type="text" id="search-field" className="form-control" placeholder="Write something (minimum 3 characters)" required />

                    <label htmlFor="search-field">Rating:</label>
                    <select name="rating" id="rating" className="form-control">
                        <option value="0" selected>Choose rating here</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </fieldset>
                <button type="submit" className="form-control" onClick={checkValuesOK(titleOfMovieParam, ratingWithStarsParam)}>Add Movie</button>
            </form>
        </div>
    );
}


function checkValuesOK(title: string, rating: number): boolean {
    if (title.length < 3 || rating == 0) {
        alert("Title must be at least 3 characters long and rating cannot be undefined.");
        return false;
    }

    addMovie(title, rating);
    return true;

}

function addMovie(title: string, rating: number): JSX.Element {
    let movie = {
        title: title,
        rating: rating
    };

    document.getElementById
    return <Movie titleOfMovie={movie.title} ratingWithStars={movie.rating} />;

}