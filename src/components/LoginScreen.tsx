import { useState } from "react";
import { Input } from "./Input";
import { Starfield } from "./Starfield";
import "./LoginScreen.css";

export function LoginScreen() {
  const [password, setPassword] = useState("");

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Unlocking vault with password:", password);
  };

  return (
    <div className="login-screen">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <div className="lock-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <span className="app-name">ZAPO</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Starfield starCount={100} minOpacity={0.3} maxOpacity={0.95} />
        <div className="content-container">
          <div className="content-frame">
            {/* Header */}
            <div className="header-frame">
              <h1 className="header-title">UNLOCK VAULT</h1>
              <p className="header-subtitle">Enter your master password</p>
            </div>

            {/* Interaction Frame */}
            <form className="interaction-frame" onSubmit={handleUnlock}>
              <Input
                label="Master password"
                type="password"
                value={password}
                onChange={setPassword}
                placeholder="Enter password"
                showPasswordToggle
              />
              <button type="submit" className="unlock-button">
                Unlock Vault
              </button>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </form>

            {/* Footer */}
            <div className="footer-frame">
              <span className="footer-item">AES-256-GCM</span>
              <span className="footer-dot">•</span>
              <span className="footer-item">Argon2</span>
              <span className="footer-dot">•</span>
              <span className="footer-item">Zero-knowledge architecture</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
