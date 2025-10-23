"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getSession } from "@/lib/auth";

export type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
  at: number;
};

const STORAGE_KEY = "hpz_chat_messages";

const suggestions = [
  { label: "Cara daftar", text: "Bagaimana cara mendaftar?" },
  { label: "Login crew", text: "Di mana halaman login crew?" },
  { label: "Welcome page", text: "Kapan welcome page muncul?" },
  { label: "Kontak admin", text: "Bagaimana cara kontak admin?" },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Load persisted messages and session email (if any)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setMessages(JSON.parse(raw));
      const sess = getSession();
      setSessionEmail(sess?.email ?? null);
    } catch {}
  }, []);

  // Persist messages
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  // Auto-scroll on new messages
  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  const greet = useMemo(() => {
    if (sessionEmail) return `Hai, ${sessionEmail.split("@")[0]}! Ada yang bisa dibantu?`;
    return "Hai! Ada yang bisa dibantu?";
  }, [sessionEmail]);

  const handleSend = (text: string) => {
    const content = text.trim();
    if (!content) return;
    const id = crypto.randomUUID?.() ?? Math.random().toString(36).slice(2);
    const now = Date.now();
    const userMsg: ChatMessage = { id, role: "user", text: content, at: now };
    setMessages((prev) => [...prev, userMsg]);

    // Simple scripted bot reply
    const replyText = getBotReply(content);
    const botMsg: ChatMessage = {
      id: `${id}-r`,
      role: "bot",
      text: replyText,
      at: now + 1,
    };
    // Simulate slight delay
    setTimeout(() => setMessages((prev) => [...prev, botMsg]), 300);
  };

  return (
    <>
      {/* floating toggle button */}
        <button
          type="button"
          aria-label={open ? "Tutup chat" : "Buka chat"}
          onClick={() => setOpen((v) => !v)}
          className="fixed z-50 bottom-[calc(env(safe-area-inset-bottom,0px)+20px)] right-[calc(env(safe-area-inset-right,0px)+12px)] rounded-full bg-[#EC1617] text-white shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-transform active:scale-95"
        >
          <span className="block p-3 md:p-4">
          {open ? (
            // close icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 11-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 11-1.414-1.414L8.586 10l-4.95-4.95A1 1 0 115.05 3.636L10 8.586z" clipRule="evenodd" />
            </svg>
          ) : (
            // chat icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M18 10c0 3.866-3.582 7-8 7a9.11 9.11 0 01-3.247-.57L3 17l.691-3.11A6.84 6.84 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
            </svg>
          )}
        </span>
      </button>

      {/* chat panel */}
      {open && (
        <div
          className="fixed z-40 bottom-[calc(env(safe-area-inset-bottom,0px)+84px)] right-[calc(env(safe-area-inset-right,0px)+12px)] w-[min(92vw,22rem)] max-h-[75vh] rounded-xl border border-gray-200 bg-white shadow-xl flex flex-col overflow-hidden"
        >
          <div className="border-b px-4 py-3 bg-gray-50 flex items-center justify-between">
            <div>
              <p className="font-semibold dark:text-black">HPZ Assistant</p>
              <p className="text-xs text-gray-500">Demo chat — no server</p>
            </div>
            <button
              type="button"
              onClick={() => setMessages([])}
              className="text-xs rounded border px-2 py-1 hover:bg-gray-100"
              title="Clear chat"
            >
              Clear
            </button>
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
            <BotBubble>{greet}</BotBubble>
            {messages.map((m) =>
              m.role === "user" ? (
                <UserBubble key={m.id}>{m.text}</UserBubble>
              ) : (
                <BotBubble key={m.id}>{m.text}</BotBubble>
              )
            )}
          </div>

          {/* suggestions */}
          {messages.length === 0 && (
            <div className="px-3 pb-2 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  className="text-xs rounded-full border px-2 py-1 hover:bg-gray-50"
                  onClick={() => handleSend(s.text)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}

          {/* input */}
          <form
            className="border-t flex items-center text-black gap-2 px-2 py-2"
            onSubmit={(e) => {
              e.preventDefault();
              const text = input;
              setInput("");
              handleSend(text);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pesan..."
              className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none text-black focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="rounded-md bg-[#EC1617] text-white px-3 py-2 text-sm hover:bg-red-700"
            >
              Kirim
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function BotBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[85%] rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-900">
      {children}
    </div>
  );
}

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="ml-auto max-w-[85%] rounded-lg bg-[#EC1617] px-3 py-2 text-sm text-white">
      {children}
    </div>
  );
}

function getBotReply(q: string): string {
  const s = q.toLowerCase();

  // Simple intents
  if (s.includes("daftar") || s.includes("register")) {
    return "Untuk daftar, isi form di bagian pendaftaran di halaman utama atau buka /crew/login lalu pilih pendaftaran.";
  }
  if (s.includes("login") && s.includes("crew")) {
    return "Halaman login crew: /crew/login";
  }
  if (s.includes("welcome")) {
    return "Welcome page akan muncul otomatis setelah login pertama kali jika belum menyelesaikan verifikasi. Kamu juga bisa akses manual: /crew/welcome?demo=1";
  }
  if (s.includes("admin")) {
    return "Login admin demo: /admin/login (email: admin@hpz.local, password: admin123).";
  }
  if (s.includes("kontak") || s.includes("contact") || s.includes("whatsapp")) {
    return "Hubungi admin via WhatsApp di tombol WhatsApp pada halaman login, atau kirim email ke admin@hpz.local (demo).";
  }

  // Fallback
  return "Maaf, aku belum mengerti pertanyaan itu. Coba tanya: 'Bagaimana cara mendaftar?' atau 'Di mana halaman login crew?'";
}
