type GradeButtonProps = {
    nameOfButton: string;
    onClick: () => void;
};

export function OrderByGradeButton({ nameOfButton, onClick }: GradeButtonProps) {
    return (
        <div>
            <button className="grade-button" id="grade-button" onClick={onClick}>
                {nameOfButton}
            </button>
        </div>
    );
}

function sortByGrade() {

}
