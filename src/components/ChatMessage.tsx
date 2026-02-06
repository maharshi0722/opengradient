import { motion } from "framer-motion";
import { User, Bot } from "lucide-react";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  category?: string;
}

interface ChatMessageProps {
  message: Message;
  isLatest?: boolean;
}

export function ChatMessage({ message, isLatest }: ChatMessageProps) {
  const isUser = message.role === "user";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <Bot className="w-4 h-4 text-primary" />
        </div>
      )}
      
      <div
        className={`max-w-[80%] sm:max-w-[70%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-primary text-primary-foreground rounded-br-md"
            : "bg-secondary border border-border rounded-bl-md"
        }`}
      >
        {message.category && !isUser && (
          <span className="inline-block text-xs text-primary font-medium mb-1 px-2 py-0.5 rounded-full bg-primary/10">
            {message.category}
          </span>
        )}
        <p className={`text-sm leading-relaxed ${isUser ? "" : "text-foreground/90"}`}>
          {message.content}
        </p>
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
          <User className="w-4 h-4 text-muted-foreground" />
        </div>
      )}
    </motion.div>
  );
}

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3 justify-start"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
        <Bot className="w-4 h-4 text-primary" />
      </div>
      
      <div className="bg-secondary border border-border rounded-2xl rounded-bl-md px-4 py-3">
        <div className="typing-indicator flex gap-1">
          <span className="w-2 h-2 rounded-full bg-primary/60" />
          <span className="w-2 h-2 rounded-full bg-primary/60" />
          <span className="w-2 h-2 rounded-full bg-primary/60" />
        </div>
      </div>
    </motion.div>
  );
}
