import { quickQuestions } from "@/data/knowledgeBase";

interface QuickQuestionsProps {
  onQuestionClick: (question: string) => void;
  disabled?: boolean;
}

export function QuickQuestions({ onQuestionClick, disabled }: QuickQuestionsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto px-4">
      {quickQuestions.map((question) => (
        <button
          key={question}
          onClick={() => onQuestionClick(question)}
          disabled={disabled}
          className="group relative px-5 py-4 text-left text-sm rounded-xl 
                     border border-border bg-secondary/50 backdrop-blur-sm
                     hover:bg-secondary hover:border-primary/50 
                     transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                     active:scale-[0.98]"
        >
          <span className="text-foreground/90 group-hover:text-foreground transition-colors">
            {question}
          </span>
        </button>
      ))}
    </div>
  );
}
