import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { OpenGradientLogo } from "./OpenGradientLogo";
import { FeatureHighlights } from "./FeatureHighlights";
import { QuickQuestions } from "./QuickQuestions";
import { ChatMessage, Message, TypingIndicator } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { findBestAnswer } from "@/data/knowledgeBase";

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);
  
  const handleSendMessage = useCallback(async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    
    await new Promise((resolve) => setTimeout(resolve, 600 + Math.random() * 300));
    
    const result = findBestAnswer(content);
    
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: result 
        ? result.answer 
        : "I don't have specific information about that. Try asking about OpenGradient's memory layer, verifiable inference, the Model Hub, or what you can build!",
      category: result?.category,
    };
    
    setIsTyping(false);
    setMessages((prev) => [...prev, assistantMessage]);
  }, []);

  const handleBack = useCallback(() => {
    setMessages([]);
  }, []);
  
  const hasMessages = messages.length > 0;
  
  return (
    <div className="min-h-screen flex flex-col gradient-mesh">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          {hasMessages && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onClick={handleBack}
              className="p-2 -ml-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Back to home"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground" />
            </motion.button>
          )}
          <OpenGradientLogo size={32} />
        </div>
        <a
          href="https://opengradient.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Docs
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </header>
      
      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <AnimatePresence mode="wait">
          {!hasMessages ? (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col items-center justify-center px-4 py-8 gap-8"
            >
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] gradient-radial pointer-events-none opacity-60" />
              
              <div className="relative z-10 text-center space-y-4">
                <OpenGradientLogo size={56} showText={false} className="justify-center" />
                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                    OpenGradient AI Assistant
                  </h1>
                  <p className="text-muted-foreground max-w-md mx-auto text-sm sm:text-base">
                    Ask me anything about OpenGradient's decentralized AI infrastructure
                  </p>
                </div>
              </div>
              
              <FeatureHighlights />
              <QuickQuestions onQuestionClick={handleSendMessage} disabled={isTyping} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col overflow-hidden"
            >
              <div className="flex-1 overflow-y-auto scrollbar-thin px-4 py-6">
                <div className="max-w-3xl mx-auto space-y-4">
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                  {isTyping && <TypingIndicator />}
                  <div ref={messagesEndRef} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Input area */}
        <div className="px-4 pb-6 pt-2">
          <div className="max-w-3xl mx-auto">
            {hasMessages && (
              <div className="mb-4">
                <QuickQuestions onQuestionClick={handleSendMessage} disabled={isTyping} />
              </div>
            )}
            <ChatInput onSend={handleSendMessage} disabled={isTyping} />
          </div>
        </div>
      </main>
    </div>
  );
}
