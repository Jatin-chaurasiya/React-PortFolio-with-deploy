import { useState } from "react";
import { FaShareAlt, FaTimes } from "react-icons/fa";

export default function SharePopup() {
  const [open, setOpen] = useState(false);
  const url = window.location.href;

  return (
    <div className="share-container">
      
      {open && (
        <div className="popup">
          <h3>Share Portfolio</h3>

          <a href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank">🐦 Twitter</a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank">💼 LinkedIn</a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank">📘 Facebook</a>
          <a href={`https://wa.me/?text=${url}`} target="_blank">🟢 WhatsApp</a>
          <a href={`mailto:?subject=Check my portfolio&body=${url}`}>✉️ Email</a>

          <button onClick={() => navigator.clipboard.writeText(url)}>
            📋 Copy Link
          </button>
        </div>
      )}

      <button className="share-btn" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaShareAlt />}
      </button>
    </div>
  );
}