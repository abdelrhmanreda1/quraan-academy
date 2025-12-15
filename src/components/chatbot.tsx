import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, X, BotMessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Salam 👋 How can I help you with Quran or Islamic studies today?",
    },
  ]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [
              {
                role: "system",
                content: `
You are a polite Islamic assistant for an online Quran academy.
Main language is English.
You may use short Arabic phrases when appropriate (e.g. Salam, InshaAllah).
Answer clearly, respectfully, and simply.
If asked about Quran, Tajweed, or Islam, follow mainstream Sunni teachings.
If asked about courses, teachers, or pricing, respond professionally.
`,
              },
              { role: "user", content: userMessage },
            ],
            temperature: 0.4,
          }),
        }
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      const reply = data.choices[0].message.content;

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        className="fixed bottom-6 left-6 z-50 w-17 h-17 rounded-full 
            bg-linear-to-br from-[#0F3D2E] to-[#1B6F5A]
             text-white shadow-2xl hover:scale-110
             transition ring-4 ring-white/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X  style={{ width: "32px", height: "32px" }}/>
        ) : (
          <BotMessageSquare style={{ width: "32px", height: "32px" }} />
        )}
      </Button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-6 z-50 w-80 bg-white rounded-xl shadow-2xl flex flex-col"
          >
            <div className="p-3 font-bold bg-primary text-white rounded-tr-xl rounded-tl-xl">
              Quran AI Assistant
            </div>

            <div className="flex-1 p-3 space-y-3 overflow-y-auto max-h-65 scrollbar-hide">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`text-sm p-2 rounded-lg max-w-[85%] w-fit ${
                    m.role === "user" ? "ml-auto bg-secondary" : "bg-gray-100"
                  }`}
                >
                  {m.content}
                </div>
              ))}
            </div>

            <form onSubmit={sendMessage} className="p-2 flex gap-2 border-t">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Quran, Tajweed, courses..."
              />
              <Button type="submit" size="icon">
                <Send size={16} />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
