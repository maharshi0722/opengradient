export interface QAPair {
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

export const knowledgeBase: QAPair[] = [
  // Overview
  {
    question: "What is OpenGradient?",
    answer: "OpenGradient is a decentralized Layer 1 network for Open Intelligence. It provides full-stack verifiable AI infrastructure including on-chain model hosting, secure inference, confidential computing, AI agent execution, and encrypted portable memory.",
    category: "Overview",
    keywords: ["opengradient", "what", "about", "introduction", "layer 1", "network"]
  },
  {
    question: "What is Open Intelligence?",
    answer: "Open Intelligence means AI systems that are transparent, cryptographically verifiable, user-owned, interoperable, and privacy-preserving — instead of closed black-box platforms.",
    category: "Overview",
    keywords: ["open intelligence", "transparent", "verifiable", "privacy"]
  },
  {
    question: "What problem does OpenGradient solve?",
    answer: "Traditional AI traps user data in centralized systems and provides no way to verify computation. OpenGradient introduces verifiable compute, persistent memory, and sovereign user context so AI can learn securely and openly.",
    category: "Overview",
    keywords: ["problem", "solve", "centralized", "verifiable", "data"]
  },
  
  // Memory & Context Protocol
  {
    question: "What is the OpenGradient Memory Layer?",
    answer: "An encrypted portable memory vault that moves across apps, devices, and blockchains, enabling deep personalization while preserving user ownership and privacy.",
    category: "Memory",
    keywords: ["memory layer", "vault", "portable", "encrypted", "personalization"]
  },
  {
    question: "Why is memory important?",
    answer: "Without memory, AI cannot truly learn. OpenGradient enables persistent context so AI can evolve alongside users instead of forgetting everything between sessions.",
    category: "Memory",
    keywords: ["memory", "important", "learn", "persistent", "context"]
  },
  {
    question: "How is memory secured?",
    answer: "Memory is secured through: End-to-end encryption, Trusted Execution Environments (TEE), Hardware enclaves, and Cryptographic verification. All memory is confidential and provable.",
    category: "Memory",
    keywords: ["memory", "secured", "encryption", "tee", "hardware", "cryptographic"]
  },
  {
    question: "Who owns the memory?",
    answer: "Users fully own their memory and control what data is stored, shared, or deleted.",
    category: "Memory",
    keywords: ["own", "memory", "user", "control", "data"]
  },
  {
    question: "Does memory work across AI platforms?",
    answer: "Yes. OpenGradient's Secure Context Protocol interoperates with platforms like ChatGPT, Claude, and Gemini.",
    category: "Memory",
    keywords: ["memory", "platforms", "chatgpt", "claude", "gemini", "interoperable"]
  },
  
  // L1 Network
  {
    question: "What is the OpenGradient Network?",
    answer: "A Layer 1 blockchain purpose-built for AI, enabling: On-chain model hosting, Verifiable inference, Confidential computing, AI agent execution, and Memory synchronization.",
    category: "Network",
    keywords: ["network", "layer 1", "blockchain", "ai", "model hosting"]
  },
  {
    question: "What makes this L1 unique?",
    answer: "It is optimized specifically for AI workloads using heterogeneous compute and cryptographic guarantees — not generic smart contracts.",
    category: "Network",
    keywords: ["unique", "l1", "ai workloads", "heterogeneous", "cryptographic"]
  },
  {
    question: "What are Neuro Stack Blockchains?",
    answer: "Custom AI-enabled appchains that inherit OpenGradient's AI primitives such as SolidML, verifiable inference, and memory integration.",
    category: "Network",
    keywords: ["neuro stack", "appchains", "solidml", "ai primitives"]
  },
  
  // Verifiable Inference
  {
    question: "What is verifiable inference?",
    answer: "A system where every AI output is cryptographically proven to originate from a specific model, executed on authentic hardware, with unmodified inputs.",
    category: "Inference",
    keywords: ["verifiable inference", "cryptographic", "proven", "model", "hardware"]
  },
  {
    question: "Why is verifiable inference important?",
    answer: "It eliminates hidden manipulation and ensures trust in AI decisions.",
    category: "Inference",
    keywords: ["important", "inference", "trust", "manipulation", "decisions"]
  },
  
  // Compute Architecture
  {
    question: "What compute does OpenGradient use?",
    answer: "A heterogeneous architecture: GPU clusters (performance), TEE nodes (confidentiality), ZKML circuits (cryptographic proof). This provides millisecond recall with on-chain integrity.",
    category: "Compute",
    keywords: ["compute", "architecture", "gpu", "tee", "zkml", "performance"]
  },
  
  // SDK
  {
    question: "What is the OpenGradient SDK?",
    answer: "A developer toolkit for: Model management, ML workflows, Inference pipelines, AI agent deployment, and Blockchain integration.",
    category: "SDK",
    keywords: ["sdk", "developer", "toolkit", "model", "ml", "agent"]
  },
  {
    question: "Who uses the SDK?",
    answer: "Developers building AI agents, Web3 apps, DeFi tools, and ML pipelines.",
    category: "SDK",
    keywords: ["sdk", "developers", "ai agents", "web3", "defi", "ml"]
  },
  
  // Model Hub
  {
    question: "What is the Model Hub?",
    answer: "A decentralized AI marketplace where developers can upload, discover, test, and deploy models via OpenGradient's decentralized filestore.",
    category: "Model Hub",
    keywords: ["model hub", "marketplace", "upload", "deploy", "decentralized"]
  },
  {
    question: "What model categories exist?",
    answer: "Language Models, DeFi Models, Multimodal Models, Risk Models, and Protocol Optimization Models.",
    category: "Model Hub",
    keywords: ["model categories", "language", "defi", "multimodal", "risk"]
  },
  {
    question: "Why decentralized model hosting?",
    answer: "Censorship resistance, Global availability, No single point of failure, and Cryptographically secure inference.",
    category: "Model Hub",
    keywords: ["decentralized", "hosting", "censorship", "global", "secure"]
  },
  
  // Security & Privacy
  {
    question: "How does OpenGradient protect privacy?",
    answer: "Through Hardware enclaves, Zero-knowledge ML proofs, End-to-end encryption, and On-chain verification.",
    category: "Security",
    keywords: ["privacy", "protect", "hardware", "zero-knowledge", "encryption"]
  },
  {
    question: "Is OpenGradient open source?",
    answer: "Yes. OpenGradient supports open protocols, transparent research, and community-driven development.",
    category: "Security",
    keywords: ["open source", "protocols", "transparent", "community"]
  },
  
  // Full Stack Platform
  {
    question: "What does full-stack AI platform mean?",
    answer: "OpenGradient provides: Web UI, SDK + CLI, Model repository, Inference infrastructure, Application hosting, AI R&D, and Blockchain execution. Everything needed to build AI apps.",
    category: "Platform",
    keywords: ["full-stack", "platform", "web ui", "sdk", "infrastructure"]
  },
  {
    question: "Is OpenGradient performant?",
    answer: "Yes. Node specialization and heterogeneous compute minimize overhead while maximizing throughput.",
    category: "Platform",
    keywords: ["performant", "performance", "node", "throughput", "overhead"]
  },
  
  // Applications
  {
    question: "What can be built with OpenGradient?",
    answer: "Personalized AI assistants, Autonomous agents, Confidential enterprise AI, DeFi optimization, Risk forecasting, Onchain ML, and Web3 automation.",
    category: "Applications",
    keywords: ["build", "applications", "ai assistants", "agents", "defi", "web3"]
  },
  {
    question: "What is BitQuant?",
    answer: "BitQuant is OpenGradient's DeFAI agent focused on quantitative DeFi using ML-driven workflows.",
    category: "Applications",
    keywords: ["bitquant", "defai", "quantitative", "defi", "ml"]
  },
  
  // Research
  {
    question: "What research areas does OpenGradient focus on?",
    answer: "AI memory systems, Contextual safety, Verifiable compute, ML risk forecasting, and Open standards.",
    category: "Research",
    keywords: ["research", "memory systems", "safety", "verifiable", "standards"]
  },
  
  // Organization
  {
    question: "Who backs OpenGradient?",
    answer: "Industry leaders from crypto, AI, and infrastructure ecosystems including builders from Coinbase, Polygon, NEAR, Celestia, and Magna.",
    category: "Organization",
    keywords: ["backs", "backers", "investors", "coinbase", "polygon", "near"]
  }
];

export const quickQuestions = [
  "What is OpenGradient?",
  "How is memory secured?",
  "What is verifiable inference?",
  "What can be built with OpenGradient?"
];

export const featureHighlights = [
  { label: "Verifiable", description: "Compute" },
  { label: "Encrypted", description: "Memory" },
  { label: "Decentralized", description: "Models" },
  { label: "Open", description: "Intelligence" }
];

export function findBestAnswer(query: string): QAPair | null {
  const normalizedQuery = query.toLowerCase().trim();
  
  // First, try exact question match
  const exactMatch = knowledgeBase.find(
    qa => qa.question.toLowerCase() === normalizedQuery
  );
  if (exactMatch) return exactMatch;
  
  // Score each Q&A pair based on keyword matches
  let bestMatch: QAPair | null = null;
  let bestScore = 0;
  
  for (const qa of knowledgeBase) {
    let score = 0;
    
    // Check if query contains keywords
    for (const keyword of qa.keywords) {
      if (normalizedQuery.includes(keyword.toLowerCase())) {
        score += 2;
      }
    }
    
    // Check question similarity
    const questionWords = qa.question.toLowerCase().split(/\s+/);
    const queryWords = normalizedQuery.split(/\s+/);
    
    for (const queryWord of queryWords) {
      if (queryWord.length > 2 && questionWords.some(w => w.includes(queryWord))) {
        score += 1;
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = qa;
    }
  }
  
  // Return match if score is above threshold
  return bestScore >= 2 ? bestMatch : null;
}
