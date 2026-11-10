import React, { useState, useEffect } from "react";
import "../styles/admin.scss";
import { getAnnouncement, updateAnnouncement } from "../firebase/announcement";

// Default fallback values matching the existing hardcoded banner
const DEFAULTS = {
  active: false,
  message: "Registration for Spring 2025 is now open! —",
  linkText: "Enroll Today",
  linkHref: "/contact",
};

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Form fields
  const [active, setActive] = useState(DEFAULTS.active);
  const [message, setMessage] = useState(DEFAULTS.message);
  const [linkText, setLinkText] = useState(DEFAULTS.linkText);
  const [linkHref, setLinkHref] = useState(DEFAULTS.linkHref);

  const [saveStatus, setSaveStatus] = useState(""); // "success" | "error" | ""
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch current announcement data once logged in
  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getAnnouncement();
        if (data) {
          setActive(data.active ?? DEFAULTS.active);
          setMessage(data.message ?? DEFAULTS.message);
          setLinkText(data.linkText ?? DEFAULTS.linkText);
          setLinkHref(data.linkHref ?? DEFAULTS.linkHref);
        }
      } catch (err) {
        console.error("Failed to load announcement data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    const adminPassword = process.env.GATSBY_ADMIN_PASSWORD;
    if (password === adminPassword) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Incorrect password. Please try again.");
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveStatus("");
    try {
      await updateAnnouncement({ active, message, linkText, linkHref });
      setSaveStatus("success");
    } catch (err) {
      console.error("Failed to save announcement:", err);
      setSaveStatus("error");
    } finally {
      setIsSaving(false);
      // Clear status after 4 seconds
      setTimeout(() => setSaveStatus(""), 4000);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword("");
    setLoginError("");
    setSaveStatus("");
  };

  if (!isLoggedIn) {
    return (
      <main className="admin-login">
        <div className="admin-login__card">
          <h1 className="admin-login__title">Admin Access</h1>
          <form className="admin-login__form" onSubmit={handleLogin} noValidate>
            <label htmlFor="admin-password" className="admin-login__label">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              className="admin-login__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              autoComplete="current-password"
              required
            />
            {loginError && (
              <p className="admin-login__error" role="alert">
                {loginError}
              </p>
            )}
            <button type="submit" className="admin-btn admin-btn--primary">
              Login
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-dashboard">
      <div className="admin-dashboard__header">
        <h1 className="admin-dashboard__title">Announcement Settings</h1>
        <button
          type="button"
          className="admin-btn admin-btn--ghost"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {isLoading ? (
        <p className="admin-dashboard__loading">Loading current settings…</p>
      ) : (
        <form
          className="admin-dashboard__form"
          onSubmit={handleSave}
          noValidate
        >
          {/* Active toggle */}
          <div className="admin-field admin-field--toggle">
            <span className="admin-field__label">Banner Active</span>
            <label className="admin-toggle" aria-label="Toggle banner active state">
              <input
                type="checkbox"
                className="admin-toggle__input"
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
              />
              <span className="admin-toggle__track">
                <span className="admin-toggle__thumb" />
              </span>
            </label>
            <span className="admin-field__hint">
              {active ? "Banner is visible" : "Banner is hidden"}
            </span>
          </div>

          {/* Message */}
          <div className="admin-field">
            <label htmlFor="admin-message" className="admin-field__label">
              Message
            </label>
            <textarea
              id="admin-message"
              className="admin-field__textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              placeholder="Announcement message text…"
            />
          </div>

          {/* Link text */}
          <div className="admin-field">
            <label htmlFor="admin-link-text" className="admin-field__label">
              Link Text
            </label>
            <input
              id="admin-link-text"
              type="text"
              className="admin-field__input"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              placeholder="e.g. Enroll Today"
            />
          </div>

          {/* Link href */}
          <div className="admin-field">
            <label htmlFor="admin-link-href" className="admin-field__label">
              Link URL
            </label>
            <input
              id="admin-link-href"
              type="text"
              className="admin-field__input"
              value={linkHref}
              onChange={(e) => setLinkHref(e.target.value)}
              placeholder="/contact"
            />
          </div>

          <div className="admin-dashboard__actions">
            <button
              type="submit"
              className="admin-btn admin-btn--primary"
              disabled={isSaving}
            >
              {isSaving ? "Saving…" : "Save Changes"}
            </button>
          </div>

          {saveStatus === "success" && (
            <p className="admin-toast admin-toast--success" role="status">
              Changes saved successfully.
            </p>
          )}
          {saveStatus === "error" && (
            <p className="admin-toast admin-toast--error" role="alert">
              Failed to save. Check your Firebase connection and try again.
            </p>
          )}
        </form>
      )}
    </main>
  );
};

export default AdminPage;
