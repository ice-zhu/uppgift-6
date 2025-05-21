import { Movie } from "./Movie";

interface AddMovieFormProps {
    onAddMovie: (title: string, rating: number) => void;
}

export function AddMovieForm({ onAddMovie }: AddMovieFormProps) {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const titleOfMovieElement = form.querySelector<HTMLInputElement>("#search-field");
        const ratingSelectedElement = form.querySelector<HTMLSelectElement>("#rating");

        if (titleOfMovieElement == null || ratingSelectedElement == null) {
            return;
        }
        
        const title = titleOfMovieElement.value;
        const rating = parseInt(ratingSelectedElement.value);
        
        if (title.length < 3 || rating === 0) {
            alert("Title must be at least 3 characters and rating must be selected.");
            return;
        }

        onAddMovie(title, rating);
        form.reset(); // resets the form fields.
    }

    return (
        <div>
            <h2>Add Movie</h2>
            <form id="add-movie-form" onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="search-field">Title</label>
                    <input type="text" id="search-field" className="form-control" placeholder="Write something (minimum 3 characters)" required/>

                    <label htmlFor="search-field">Rating</label>
                    <select name="rating" id="rating" className="form-control" defaultValue="0" required>
                        <option value="0" selected>Choose rating here</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </fieldset>
                <button type="submit" className="form-control" id="submit-btn">Add Movie</button>
            </form>
        </div>
    );
}
