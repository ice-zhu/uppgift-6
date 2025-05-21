type GradeButtonProps = {
    nameOfButton: string;
};

export function OrderByGradeButton({ nameOfButton }: GradeButtonProps) {
    return (
        <div>
            <button className="grade-button" id="grade-button" onClick={sortByGrade}>
                {nameOfButton}
            </button>
        </div>
    );
}

function sortByGrade() {

}
