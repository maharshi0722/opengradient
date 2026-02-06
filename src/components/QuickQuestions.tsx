import { motion } from "framer-motion";
import { quickQuestions } from "@/data/knowledgeBase";

interface QuickQuestionsProps {
  onQuestionClick: (question: string) => void;
  disabled?: boolean;
}

export function QuickQuestions({ onQuestionClick, disabled }: QuickQuestionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto px-4"
    >
      {quickQuestions.map((question, index) => (
        <motion.button
          key={question}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
          whileHover={{ scale: 1.02, borderColor: "hsl(164 100% 42%)" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onQuestionClick(question)}
          disabled={disabled}
          className="group relative px-5 py-4 text-left text-sm rounded-xl 
                     border border-border bg-secondary/50 backdrop-blur-sm
                     hover:bg-secondary hover:border-primary/50 
                     transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-foreground/90 group-hover:text-foreground transition-colors">
            {question}
          </span>
          <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      ))}
    </motion.div>
  );
}
