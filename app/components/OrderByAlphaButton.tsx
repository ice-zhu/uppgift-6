type AlphaButtonProps = {
    nameOfButton: string;
    onClick: () => void;
};

export function OrderByAlphaButton({ nameOfButton, onClick }: AlphaButtonProps) {
    return (
        <div>
            <button className="grade-button" id="grade-button" onClick={onClick}>
                {nameOfButton}
            </button>
        </div>
    );
}

function sortByAlphabet() {

}
