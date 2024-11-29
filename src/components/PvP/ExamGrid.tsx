export const ExamGrid = () => {
  const exams = ["IIT-JEE", "GMAT", "GRE", "LSAT", "CAT", "GATE"];

  return (
    <div className="grid grid-cols-3 gap-3">
      {exams.map((exam) => (
        <button key={exam} className="game-button">
          {exam}
        </button>
      ))}
    </div>
  );
};
