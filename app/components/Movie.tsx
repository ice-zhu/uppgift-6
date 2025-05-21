//Contains image + title + description + rating

type MovieProps = {
  titleOfMovie: string;
  ratingWithStars: number;
  onDelete: () => void;
};

export function Movie({titleOfMovie, ratingWithStars, onDelete}: MovieProps) {
  return (
    <li className="movie">
        <span className="movie-title">{titleOfMovie}</span>
        <span className="movie-images">
        {getStarsInImages(ratingWithStars)}
        <img src="/images/delete.png" alt="Delete Movie"  onClick={onDelete}/></span>
    </li>
  );
}


// This function converts the rating to images of stars.
function getStarsInImages(ratingWithStars: number ): React.ReactElement[] {
    let starsImg = [];

    for (let i = 0; i < ratingWithStars; i++) {
    starsImg.push(<img key={i} src="/images/star.png" alt="Star" />);
    }

  return starsImg;
}