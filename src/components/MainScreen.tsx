import { useState, useEffect } from "react";
import {
  X,
  Clock,
  Sun,
  Activity,
  Settings,
  LogOut,
  Plus,
  Search,
  Box,
  Play,
  MoreVertical,
} from "lucide-react";
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
              <X size={20} />
            </div>
            <span className="app-name">ZAPO</span>
          </div>

          <div className="navbar-right">
            <div className="time-display">
              <Clock size={16} />
              <span>{formatTime(currentTime)}</span>
            </div>

            <div className="navbar-divider" />

            <button className="navbar-icon-button" aria-label="Toggle theme">
              <Sun size={18} />
            </button>

            <button className="navbar-icon-button" aria-label="Health status">
              <Activity size={18} />
            </button>

            <button className="navbar-icon-button" aria-label="Settings">
              <Settings size={18} />
            </button>

            <button className="navbar-icon-button" aria-label="Logout">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Left Column - Sidebar */}
        <aside className="sidebar">
          <button className="create-box-button">
            <Plus size={20} />
            Create Box
          </button>

          {/* Statistics Section */}
          <div className="statistics-section">
            <h2 className="section-header">STATISTICS</h2>
            <div className="statistics-grid">
              <div className="stat-box">
                <span className="stat-value stat-value-white">1</span>
                <span className="stat-label">TOTAL BOXES</span>
              </div>
              <div className="stat-box">
                <span className="stat-value stat-value-green">1</span>
                <span className="stat-label">DEV BOXES</span>
              </div>
              <div className="stat-box">
                <span className="stat-value stat-value-yellow">0</span>
                <span className="stat-label">SECURE BOXES</span>
              </div>
              <div className="stat-box">
                <span className="stat-value stat-value-blue">1</span>
                <span className="stat-label">TOTAL SECRETS</span>
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

        {/* Vertical Divider */}
        <div className="vertical-divider" />

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
              <Search size={16} />
              <input
                type="text"
                placeholder="Search boxes by name tags..."
                className="search-input"
              />
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="horizontal-divider" />

          {/* Box Cards */}
          <div className="boxes-list">
            <div className="box-card">
              <div className="box-main-content">
                <div className="box-header">
                  <div className="box-header-left">
                    <div className="checkbox" />
                    <Box size={20} />
                    <h3 className="box-name">Test Box</h3>
                  </div>
                  <div className="box-header-right">
                    <button className="play-button" aria-label="Run box">
                      <Play size={14} fill="currentColor" />
                    </button>
                    <button className="menu-button" aria-label="More options">
                      <MoreVertical size={18} />
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
                  <Box size={16} />
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
