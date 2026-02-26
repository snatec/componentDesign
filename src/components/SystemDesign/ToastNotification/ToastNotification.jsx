import React, { useState } from "react";
import './ToastNotification.css';

export default function ToastNotification() {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info") => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message, type }]);

    // auto-remove after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Buttons to show toasts */}
      <button onClick={() => addToast("Info Toast", "info")}>Info</button>
      <button onClick={() => addToast("Success Toast", "success")}>Success</button>
      <button onClick={() => addToast("Error Toast", "error")}>Error</button>
      <button onClick={() => addToast("Warning Toast", "warning")}>Warning</button>

      {/* Toast UI */}
      <div className="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className={`toast ${t.type}`}>
            <span>{t.message}</span>
            <button onClick={() => removeToast(t.id)}>✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}