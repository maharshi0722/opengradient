import { useState, KeyboardEvent } from "react";
import { Send, Sparkles } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function ChatInput({ onSend, disabled, placeholder = "Ask anything about OpenGradient..." }: ChatInputProps) {
  const [input, setInput] = useState("");
  
  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  return (
    <div className="relative">
      <div className="relative flex items-center gap-2 p-2 rounded-2xl bg-secondary/80 backdrop-blur-xl border border-border focus-within:border-primary/50 transition-colors">
        <div className="absolute left-4 text-muted-foreground">
          <Sparkles className="w-4 h-4" />
        </div>
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground pl-10 pr-2 py-2 disabled:opacity-50"
        />
        
        <button
          onClick={handleSend}
          disabled={disabled || !input.trim()}
          className="flex-shrink-0 p-2.5 rounded-xl bg-primary text-primary-foreground 
                     hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200 active:scale-95"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      
      <p className="text-center text-xs text-muted-foreground mt-3">
        Powered by OpenGradient Knowledge Base
      </p>
    </div>
  );
}
