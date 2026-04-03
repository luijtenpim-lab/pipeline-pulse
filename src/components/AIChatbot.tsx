import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getMetrics, getInterviewStats, positions, candidates, decisions } from "@/data/mockData";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function generateMockResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();
  const metrics = getMetrics();
  const interviewStats = getInterviewStats();

  if (msg.includes("success") || msg.includes("rate")) {
    return `Your current success rate is **${metrics.successRate}%** — that's ${metrics.successRate >= 15 ? "a solid" : "an"} hire-to-applicant ratio. You've hired ${candidates.filter(c => c.status === "hired").length} out of ${metrics.totalApplicants} total applicants.`;
  }
  if (msg.includes("open") || msg.includes("position")) {
    const openPos = positions.filter(p => p.status === "open");
    return `You have **${metrics.openPositions} open positions**: ${openPos.map(p => p.title).join(", ")}. The highest demand role is **${openPos.sort((a, b) => b.applicantsCount - a.applicantsCount)[0]?.title}** with ${openPos[0]?.applicantsCount} applicants.`;
  }
  if (msg.includes("interview")) {
    return `Here's your interview breakdown:\n- **${interviewStats.scheduled}** scheduled\n- **${interviewStats.unscheduled}** unscheduled\n- **${interviewStats.pendingReview}** pending review\n- **${interviewStats.completed}** completed\n\nTotal: **${interviewStats.total}** interviews.`;
  }
  if (msg.includes("highest") || msg.includes("demand") || msg.includes("popular")) {
    const sorted = [...positions].sort((a, b) => b.applicantsCount - a.applicantsCount);
    return `The highest-demand role is **${sorted[0].title}** with **${sorted[0].applicantsCount}** applicants, followed by **${sorted[1].title}** (${sorted[1].applicantsCount}) and **${sorted[2].title}** (${sorted[2].applicantsCount}).`;
  }
  if (msg.includes("recent") || msg.includes("decision") || msg.includes("activity")) {
    const recent = decisions.slice(0, 3);
    return `Recent decisions:\n${recent.map(d => `- **${d.candidateName}** (${d.role}): ${d.status}`).join("\n")}`;
  }
  return `Based on your dashboard data: you have **${metrics.totalApplicants}** total applicants, **${metrics.openPositions}** open positions, and a **${metrics.successRate}%** success rate. Ask me about interviews, positions, or recent activity for more details!`;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm your hiring assistant. Ask me anything about your recruitment dashboard — success rates, open positions, interview stats, and more." },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Simulate delay
    setTimeout(() => {
      const response = generateMockResponse(userMsg.content);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex w-96 max-h-[500px] flex-col rounded-xl border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <MessageCircle className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">AI Assistant</p>
                <p className="text-xs text-muted-foreground">Ask about your hiring data</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[340px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground rounded-lg px-3 py-2 text-sm">
                  <span className="animate-pulse">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-border p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about your hiring data..."
                className="flex-1 bg-secondary text-sm text-secondary-foreground rounded-lg px-3 py-2 placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-ring"
              />
              <Button size="icon" className="h-9 w-9 shrink-0" onClick={handleSend} disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
