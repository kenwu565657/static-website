import { useState } from "react";
import {
  QrCode, Code2, BookMarked, Share2, Zap, Shield,
  ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  Mail, MessageSquare, Globe,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import screenshot1 from "@/imports/Simulator_Screenshot_-_iPhone_14_Plus_-_2026-06-21_at_15.35.37.png";
import screenshot2 from "@/imports/Simulator_Screenshot_-_iPhone_14_Plus_-_2026-06-21_at_15.35.52.png";
import screenshot3 from "@/imports/Simulator_Screenshot_-_iPhone_14_Plus_-_2026-06-21_at_15.36.07.png";

/* ── Logo ── */
function QRLogo({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="#1c1c1e" />
      <rect x="8" y="8" width="14" height="14" rx="1" fill="white" />
      <rect x="10" y="10" width="10" height="10" rx="0.5" fill="#1c1c1e" />
      <rect x="12" y="12" width="6" height="6" fill="white" />
      <rect x="26" y="8" width="14" height="14" rx="1" fill="white" />
      <rect x="28" y="10" width="10" height="10" rx="0.5" fill="#1c1c1e" />
      <rect x="30" y="12" width="6" height="6" fill="white" />
      <rect x="8" y="26" width="14" height="14" rx="1" fill="white" />
      <rect x="10" y="28" width="10" height="10" rx="0.5" fill="#1c1c1e" />
      <rect x="12" y="30" width="6" height="6" fill="white" />
      <rect x="26" y="26" width="6" height="6" fill="white" />
      <rect x="34" y="26" width="6" height="6" fill="white" />
      <rect x="26" y="34" width="6" height="6" fill="white" />
      <rect x="34" y="34" width="6" height="6" fill="#007aff" />
    </svg>
  );
}

/* ── Helpers ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#007aff" }}>
      {children}
    </p>
  );
}
function Divider() {
  return <div className="border-t border-border my-16" />;
}

/* ── Store badges ── */
function AppStoreBadge() {
  return (
    <a href="#" className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-85" style={{ background: "#1c1c1e" }}>
      <svg width="18" height="22" viewBox="0 0 18 22" fill="white" aria-hidden="true">
        <path d="M14.94 11.55a4.49 4.49 0 0 1 2.14-3.77 4.6 4.6 0 0 0-3.63-1.96c-1.53-.16-3 .9-3.77.9-.8 0-2-.88-3.3-.85a4.83 4.83 0 0 0-4.07 2.48C.37 11.13 1.3 15.3 3.07 17.6c.87 1.25 1.9 2.65 3.24 2.6 1.31-.05 1.8-.84 3.38-.84 1.57 0 2.03.84 3.4.81 1.41-.02 2.3-1.27 3.15-2.53a10 10 0 0 0 1.43-2.92 4.46 4.46 0 0 1-2.73-3.17zM12.44 3.77A4.4 4.4 0 0 0 13.46 0a4.47 4.47 0 0 0-2.9 1.5A4.18 4.18 0 0 0 9.5 4.7a3.7 3.7 0 0 0 2.94-.93z" />
      </svg>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] opacity-70 font-normal">Download on the</span>
        <span className="text-sm font-bold">App Store</span>
      </span>
    </a>
  );
}
function PlayStoreBadge() {
  return (
    <a href="#" className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold transition-opacity hover:opacity-85" style={{ background: "#f9f6f0", border: "1px solid rgba(0,0,0,0.1)" }}>
      <svg width="18" height="20" viewBox="0 0 18 20" aria-hidden="true">
        <path d="M1 .5 10.5 10 1 19.5V.5Z" fill="#EA4335" />
        <path d="M1 19.5 10.5 10 14.5 14 3 20.5l-2-1Z" fill="#FBBC05" />
        <path d="M14.5 6 10.5 10 1 .5 3-.5l11.5 6.5Z" fill="#4285F4" />
        <path d="M10.5 10l4 4 2-1.5v-5L14.5 6l-4 4Z" fill="#34A853" />
      </svg>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] font-normal" style={{ color: "#8e8e93" }}>Get it on</span>
        <span className="text-sm font-bold text-foreground">Google Play</span>
      </span>
    </a>
  );
}

/* ── Features ── */
function FeatureCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: "#f9f6f0", border: "1px solid rgba(0,0,0,0.07)" }}>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#1c1c1e" }}>
        <Icon size={18} color="white" strokeWidth={1.8} />
      </div>
      <p className="font-semibold text-sm text-foreground">{title}</p>
      <p className="text-sm leading-relaxed" style={{ color: "#8e8e93" }}>{desc}</p>
    </div>
  );
}
function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "#f9f6f0", border: "1px solid rgba(0,0,0,0.07)" }}>
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
        <span className="font-medium text-sm text-foreground">{q}</span>
        {open ? <ChevronUp size={16} style={{ color: "#8e8e93", flexShrink: 0 }} /> : <ChevronDown size={16} style={{ color: "#8e8e93", flexShrink: 0 }} />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm leading-7 border-t border-border" style={{ color: "#3a3a3c" }}>
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ── Screenshots ── */
const SHOTS = [
  { src: screenshot1 as string, caption: "Script mode — live JavaScript output \n 腳本模式 — 即時輸出 JavaScript 結果" },
  { src: screenshot2 as string, caption: "Library — up to 50 saved QR Code \n 收藏庫 — 最多儲存 50 個二維碼" },
  { src: screenshot3 as string, caption: "Text mode — instant plain-text QR Code \n 文字模式 — 即時生成純文字二維碼" },
];

function Screenshots() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i - 1 + SHOTS.length) % SHOTS.length);
  const next = () => setActive((i) => (i + 1) % SHOTS.length);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-end justify-center gap-5 w-full overflow-hidden py-6">
        {SHOTS.map((s, i) => {
          const isActive = i === active;
          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300 ease-out shrink-0"
              style={{
                transform: isActive ? "scale(1)" : "scale(0.80)",
                opacity: isActive ? 1 : 0.4,
                cursor: isActive ? "default" : "pointer",
                transformOrigin: "center bottom",
              }}
            >
              <div
                className="relative rounded-[2.4rem] overflow-hidden"
                style={{
                  width: 200,
                  height: 432,
                  background: "#1c1c1e",
                  padding: 3,
                  boxShadow: isActive
                    ? "0 32px 72px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.07)"
                    : "0 8px 20px rgba(0,0,0,0.10)",
                }}
              >
                <div
                  className="absolute z-10 rounded-full"
                  style={{ top: 12, left: "50%", transform: "translateX(-50%)", width: 80, height: 18, background: "#1c1c1e" }}
                />
                <div className="w-full h-full rounded-[2.1rem] overflow-hidden bg-white">
                  <ImageWithFallback src={s.src} alt={s.caption} className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-sm font-medium" style={{ color: "#8e8e93" }}>{SHOTS[active].caption}</p>

      <div className="flex items-center gap-4">
        <button onClick={prev} className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95" style={{ background: "#f9f6f0", border: "1px solid rgba(0,0,0,0.09)" }} aria-label="Previous">
          <ChevronLeft size={16} style={{ color: "#1c1c1e" }} />
        </button>
        <div className="flex gap-2 items-center">
          {SHOTS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className="rounded-full transition-all duration-200" style={{ width: active === i ? 20 : 6, height: 6, background: active === i ? "#007aff" : "rgba(0,0,0,0.15)" }} aria-label={`Screenshot ${i + 1}`} />
          ))}
        </div>
        <button onClick={next} className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95" style={{ background: "#f9f6f0", border: "1px solid rgba(0,0,0,0.09)" }} aria-label="Next">
          <ChevronRight size={16} style={{ color: "#1c1c1e" }} />
        </button>
      </div>
    </div>
  );
}

/* ── Legal ── */
function Clause({ num, title, body }: { num: number; title: string; body: string }) {
  return (
    <div className="flex gap-4">
      <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ background: "rgba(0,122,255,0.1)", color: "#007aff" }}>{num}</span>
      <div>
        <p className="font-semibold text-sm text-foreground mb-1">{title}</p>
        <p className="text-sm leading-7" style={{ color: "#3a3a3c" }}>{body}</p>
      </div>
    </div>
  );
}

/* ── Contact form ── */
function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inputStyle: React.CSSProperties = {
    background: "white",
    border: "1px solid rgba(0,0,0,0.1)",
    color: "#1c1c1e",
    borderRadius: 12,
    padding: "10px 16px",
    fontSize: 14,
    outline: "none",
    width: "100%",
  };

  if (sent) {
    return (
      <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(0,122,255,0.06)", border: "1px solid rgba(0,122,255,0.15)" }}>
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(0,122,255,0.12)" }}>
          <Mail size={22} style={{ color: "#007aff" }} />
        </div>
        <p className="font-semibold text-foreground mb-1">Message sent!</p>
        <p className="text-sm" style={{ color: "#8e8e93" }}>We'll get back to you within 5 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-2xl p-6 sm:p-8 flex flex-col gap-5" style={{ background: "#f9f6f0", border: "1px solid rgba(0,0,0,0.07)" }}>
      <p className="font-semibold text-sm text-foreground">Send us a message</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium" style={{ color: "#8e8e93" }}>Name</label>
          <input type="text" required placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium" style={{ color: "#8e8e93" }}>Email</label>
          <input type="email" required placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium" style={{ color: "#8e8e93" }}>Message</label>
        <textarea required rows={4} placeholder="Tell us what's on your mind…" value={message} onChange={(e) => setMessage(e.target.value)} style={{ ...inputStyle, resize: "none" }} />
      </div>
      <button type="submit" className="self-start px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-85" style={{ background: "#1c1c1e" }}>
        Send message
      </button>
    </form>
  );
}

/* ══════════════════════════════════════════════
   Page
══════════════════════════════════════════════ */
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md border-b border-border" style={{ background: "rgba(255,255,255,0.88)" }}>
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <QRLogo size={32} />
            <span className="font-semibold text-sm tracking-tight">Dynamic QR Code Generator 動態二維碼生成器</span>
          </div>
          <nav className="hidden sm:flex items-center gap-5 text-xs font-medium" style={{ color: "#8e8e93" }}>
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#screenshots" className="hover:text-foreground transition-colors">Screenshots</a>
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms</a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6">

        {/* Hero */}
        <section className="pt-16 text-center">
          <div className="flex justify-center mb-6"><QRLogo size={80} /></div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight">
            Dynamic QR Code Generator <br /> 動態二維碼生成器
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "#8e8e93" }}>
            The QR code app for iPhone and Android. Type plain text or JavaScript — then share to others.
            <br />
            支援 iPhone 與 Android 的二維碼生成器。隨心輸入純文字或 JavaScript，即時生成，隨時分享。
          </p>
          {
            false &&
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                { false && <AppStoreBadge /> }
                { false && <PlayStoreBadge /> }
              </div>
          }

          <p className="mt-5 text-xs" style={{ color: "#8e8e93" }}>Free to download · No account needed · Works offline</p>
          <p className="text-xs" style={{ color: "#8e8e93" }}>免費下載 · 免註冊登入 · 100% 離線運行</p>
        </section>

        <Divider />

        {/* Features */}
        <section id="features" className="scroll-mt-20">
          <SectionLabel>What it does / 核心功能</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard icon={QrCode} title="QR Code generation / 生成二維碼" desc="Type anything and get a scannable QR code in real time. No network required. 輸入任何內容，即時獲取可掃描的二維碼。完全無需連接網絡。" />
            <FeatureCard icon={Code2} title="JavaScript Editor / JavaScript 編輯器" desc="Write JS scripts that produce dynamic content — like the current time or calculated values — every time the QR is generated. 撰寫 JS 腳本以產生動態內容（例如當前時間或計算結果），每次生成二維碼時均會即時運算。" />
            <FeatureCard icon={BookMarked} title="Personal library / 個人資料庫" desc="Save up to 50 QR codes locally on your device. Scripts and plain-text codes, all in one place. 於裝置本地儲存多達 50 個二維碼。無論是 JS 腳本還是純文字代碼，都能集中一處輕鬆管理。" />
            <FeatureCard icon={Share2} title="Deep link sharing / 深度鏈接分享" desc="Share QR codes as deep links. Data is encoded directly into the URL — no server, no upload, no tracking. 透過深度連結分享二維碼。資料直接編碼於網址之中 —— 無伺服器、免上傳、零追蹤。" />
          </div>

        </section>

        <Divider />

        {/* Screenshots */}
        <section id="screenshots" className="scroll-mt-20">
          <SectionLabel>See it in action / 實際操作</SectionLabel>
          <Screenshots />
        </section>

        <Divider />

        {/* Privacy */}
        <section id="privacy" className="scroll-mt-20 pb-2">
          <SectionLabel>Privacy Policy / 私隱權政策</SectionLabel>
          <div className="rounded-2xl p-6 sm:p-8 mb-6" style={{ background: "#f9f6f0", border: "1px solid rgba(0,0,0,0.07)" }}>
            <span className="inline-flex text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full mb-5" style={{ background: "rgba(0,122,255,0.1)", color: "#007aff" }}>English</span>
            <p className="text-sm leading-8" style={{ color: "#3a3a3c" }}>
              The Dynamic QR Code Generator app is designed with strict privacy in mind.{" "}
              <strong className="text-foreground">We do not collect, store, transmit, or share any personal data or user-generated content.</strong>
            </p>
            <p className="text-sm leading-8 mt-4" style={{ color: "#3a3a3c" }}>
              All QR codes are generated and stored strictly locally on your device. The <span className="font-medium text-foreground">"Share Link"</span> feature utilises local app links (Deep Linking) to encode data directly into a URL, which is shared via your device's native sharing capabilities. No user data is ever uploaded to, processed by, or stored on any external servers.
            </p>
            <div className="mt-6 pt-5 border-t flex flex-col gap-2 text-xs" style={{ borderColor: "rgba(0,0,0,0.08)", color: "#8e8e93" }}>
              <p>✓  No account required</p>
              <p>✓  No analytics or tracking</p>
              <p>✓  No external servers</p>
              <p>✓  All data deleted when you delete the app</p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8" style={{ background: "#f9f6f0", border: "1px solid rgba(0,0,0,0.07)" }}>
            <span className="inline-flex text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full mb-5" style={{ background: "rgba(0,0,0,0.06)", color: "#3a3a3c" }}>繁體中文</span>
            <p className="text-sm leading-9" style={{ color: "#3a3a3c", fontFamily: "'PingFang TC', 'Heiti TC', sans-serif" }}>
              Dynamic QR Code Generator 應用程式以嚴格保護私隱為原則。
              <strong className="text-foreground">我們不會收集、儲存、傳送或分享任何個人資料或用戶生成的內容。</strong>
            </p>
            <p className="text-sm leading-9 mt-4" style={{ color: "#3a3a3c", fontFamily: "'PingFang TC', 'Heiti TC', sans-serif" }}>
              所有 QR Code 均嚴格於您的裝置本地生成及儲存。<span className="font-medium text-foreground">「分享連結」</span>功能採用深度連結技術，將資料直接編碼於網址中，並透過裝置原生的分享功能送出。我們沒有任何外部伺服器會上傳、處理或儲存您的任何資料。
            </p>
            <div className="mt-6 pt-5 border-t flex flex-col gap-2 text-xs" style={{ borderColor: "rgba(0,0,0,0.08)", color: "#8e8e93", fontFamily: "'PingFang TC', 'Heiti TC', sans-serif" }}>
              <p>✓  無需帳號</p>
              <p>✓  無分析或追蹤</p>
              <p>✓  無外部伺服器</p>
              <p>✓  刪除應用程式時，所有資料一併刪除</p>
            </div>
          </div>
        </section>

        <Divider />

        {/* Terms */}
        <section id="terms" className="scroll-mt-20 pb-14">
          <SectionLabel>Terms &amp; Conditions / 條款與細則</SectionLabel>
          <p className="text-sm leading-7 mb-8" style={{ color: "#8e8e93" }}>
            By downloading or using Dynamic QR Code Generator, you agree to the following. 當您下載或使用動態二維碼生成器時，即代表您同意以下條款。
          </p>
          <div className="space-y-6">
            <Clause num={1} title="Use it as intended / 程式使用" body="The App allows you to generate, store, and share QR codes locally on your device. You are solely responsible for the content, URLs, or data you choose to encode using the App. You agree not to use the App to generate QR codes that link to malicious, illegal, or harmful content. 本程式允許您在裝置本地生成、儲存及分享二維碼。您須對選擇透過本程式進行編碼的內容、網址或資料負上完全責任。您同意不使用本程式生成連結至惡意、非法或有害內容的二維碼。" />
            <Clause num={2} title="Privacy Policy / 私隱政策" body="We take your privacy seriously. The App operates strictly locally on your device and does not collect, store, or transmit your personal data to any external servers. 我們非常重視您的私隱。本程式嚴格於您的裝置本地端運行，不會收集、儲存或傳送您的任何個人資料至任何外部伺服器。" />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border" style={{ background: "#f9f6f0" }}>
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <QRLogo size={36} />
              <div>
                <p className="font-semibold text-sm text-foreground">Dynamic QR Code Generator</p>
                <p className="text-xs" style={{ color: "#8e8e93" }}>Script. Generate. Share.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              { false && <AppStoreBadge /> }
              { false && <PlayStoreBadge /> }
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 border-t border-border text-xs" style={{ color: "#8e8e93" }}>
            <p>© 2026 Dynamic QR Code Generator. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-foreground transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
