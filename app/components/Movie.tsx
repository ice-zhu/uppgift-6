//Contains image + title + description + rating

type MovieProps = {
  titleOfMovie: string;
  ratingWithStars: number;
};

export function Movie({titleOfMovie, ratingWithStars}: MovieProps) {
  return (
    <li >
        <span className="movie-title">{titleOfMovie}</span>
        {getStarsInImages(ratingWithStars)}
        <img src="uppgift-6\app\images\delete.png" alt="Delete Movie" />
    </li>
  );
}


// This function converts the rating to images of stars.
function getStarsInImages(ratingWithStars: number ): string {
    let ratingImg = '';

    for (let i = 0; i < ratingWithStars; i++) {
    ratingImg = ratingImg + '<img src="images/star.png" alt="Star"></img>';
    }

  return ratingImg;
}