type AlphaButtonProps = {
    nameOfButton: string;
};

export function OrderByAlphaButton({ nameOfButton }: AlphaButtonProps) {
    return (
        <div>
            <button className="grade-button" id="grade-button" onClick={sortByAlphabet}>
                {nameOfButton}
            </button>
        </div>
    );
}

function sortByAlphabet() {

}
