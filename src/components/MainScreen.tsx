import { useState, useEffect } from "react";
import "./MainScreen.css";

export function MainScreen() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="main-screen">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <div className="close-icon">
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <span className="app-name">ZAPO</span>
          </div>

          <div className="navbar-right">
            <div className="time-display">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>{formatTime(currentTime)}</span>
            </div>

            <div className="navbar-divider" />

            <button className="navbar-icon-button" aria-label="Toggle theme">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </button>

            <button className="navbar-icon-button" aria-label="Health status">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </button>

            <button className="navbar-icon-button" aria-label="Settings">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6m5.196-15.804l-4.243 4.243m-5.953 5.953l-4.243 4.243M23 12h-6m-6 0H1m15.804-5.196l-4.243 4.243m-5.953 5.953l-4.243 4.243" />
              </svg>
            </button>

            <button className="navbar-icon-button" aria-label="Logout">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Left Column - Sidebar */}
        <aside className="sidebar">
          <button className="create-box-button">
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
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Create Box
          </button>

          {/* Statistics Section */}
          <div className="statistics-section">
            <h2 className="section-header">STATISTICS</h2>
            <div className="statistics-grid">
              <div className="stat-box">
                <span className="stat-label">TOTAL BOXES</span>
                <span className="stat-value stat-value-white">1</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">DEV BOXES</span>
                <span className="stat-value stat-value-green">1</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">SECURE BOXES</span>
                <span className="stat-value stat-value-yellow">0</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">TOTAL SECRETS</span>
                <span className="stat-value stat-value-blue">1</span>
              </div>
            </div>
          </div>

          {/* Active Sessions Section */}
          <div className="active-sessions-section">
            <h2 className="section-header">
              ACTIVE SESSIONS <span className="session-count">(0)</span>
            </h2>
            <p className="no-sessions">No Active Sessions</p>
          </div>
        </aside>

        {/* Right Column - Boxes */}
        <div className="boxes-container">
          {/* Filter Row */}
          <div className="filter-row">
            <div className="select-all">
              <div className="checkbox" />
              <span className="select-all-text">Select all</span>
              <span className="box-count">(1)</span>
            </div>
            <div className="search-bar">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search boxes by name tags..."
                className="search-input"
              />
            </div>
          </div>

          {/* Box Cards */}
          <div className="boxes-list">
            <div className="box-card">
              <div className="box-main-content">
                <div className="box-header">
                  <div className="box-header-left">
                    <div className="checkbox" />
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
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="9" y1="3" x2="9" y2="21" />
                    </svg>
                    <h3 className="box-name">Test Box</h3>
                  </div>
                  <div className="box-header-right">
                    <button className="play-button" aria-label="Run box">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </button>
                    <button className="menu-button" aria-label="More options">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <circle cx="12" cy="5" r="2" />
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="12" cy="19" r="2" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="box-summary">1 secret</div>

                <div className="box-tags">
                  <span className="tag">dev</span>
                  <span className="tag">test</span>
                </div>

                <div className="box-description">Testing the box.</div>
              </div>

              <div className="box-footer">
                <div className="box-footer-divider" />
                <div className="box-footer-content">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                  </svg>
                  <span className="box-date">12/27/2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
