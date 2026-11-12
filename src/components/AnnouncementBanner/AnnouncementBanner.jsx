import React, { useState, useEffect } from "react";
import "./AnnouncementBanner.scss";

// Hardcoded fallback values used when Firestore returns no data
const FALLBACK = {
  message: "Registration for Spring 2025 is now open!",
};

const AnnouncementBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  // null = still loading, false = inactive / error, object = Firestore data
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    // Guard: Firestore must only be called in the browser, not during SSR
    if (typeof window === "undefined") return;

    let cancelled = false;

    const fetchAnnouncement = async () => {
      try {
        const { getAnnouncement } = await import("../../firebase/announcement");
        const data = await getAnnouncement();
        if (!cancelled) {
          setAnnouncement(data);
        }
      } catch (err) {
        // On any error (missing config, network, etc.) keep announcement null
        // so the banner stays hidden — fail silently for site visitors
        console.error("AnnouncementBanner: failed to load from Firestore", err);
        if (!cancelled) {
          setAnnouncement(false);
        }
      }
    };

    fetchAnnouncement();

    return () => {
      cancelled = true;
    };
  }, []);

  // Don't render until data has loaded, if banner is dismissed,
  // if Firestore returned an error, or if `active` is explicitly false
  if (
    dismissed ||
    announcement === null ||
    announcement === false ||
    !announcement.active
  ) {
    return null;
  }

  const message = announcement.message || FALLBACK.message;

  return (
    <div className="announcement-banner" role="banner" aria-label="Site announcement">
      <p className="announcement-banner__message">
        {message}
      </p>
      <button
        className="announcement-banner__dismiss"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
      >
        &times;
      </button>
    </div>
  );
};

export default AnnouncementBanner;
