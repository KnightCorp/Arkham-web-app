import { motion } from "framer-motion";

interface ExamGridProps {
  clubType: string;
}

export const ExamGrid = ({ clubType }: ExamGridProps) => {
  const getItems = (type: string) => {
    switch (type) {
      case "coding":
        return [
          "Data Structures",
          "Algorithms",
          "System Design",
          "Web Dev",
          "Mobile Dev",
          "DevOps",
        ];
      case "exam":
        return ["IIT-JEE", "GMAT", "GRE", "LSAT", "CAT", "GATE"];
      default:
        return [
          "Literature",
          "Philosophy",
          "History",
          "Mathematics",
          "Sciences",
          "Arts",
        ];
    }
  };

  const items = getItems(clubType);

  return (
    <motion.div
      className="grid grid-cols-3 gap-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {items.map((item) => (
        <button key={item} className="game-button">
          {item}
        </button>
      ))}
    </motion.div>
  );
};
