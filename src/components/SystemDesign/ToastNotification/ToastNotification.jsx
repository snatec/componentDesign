import React, { useState } from "react";
import './ToastNotification.css';

export default function ToastNotification() {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info") => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message, type }]);

    // auto-remove after 3 seconds
    setTimeout(() => removeToast(id), 3000);
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

// It provides a quick way to generate a unique identifier for each toast. This helps React efficiently track list items using the key prop and also allows us to remove a specific toast.

// 👉 Bonus improvement:
// “In production, I might use uuid for better uniqueness.” const id = crypto.randomUUID()

// => How would you improve this implementation?

// Answer:

// Add cleanup for timers : because if the component unmounts before timeout finishes? 
// The timeout will still try to update state, which can lead to memory leaks or warnings.

// Add animation (CSS or libraries)
// Using CSS transitions or libraries like Framer Motion to animate entry/exit of toasts.

// Limit max number of toasts
// setToasts((prev) => [...prev.slice(-2), newToast]);

// Add custom duration per toast

// Accessibility question
// Answer:
// Toasts should use aria-live="polite" so screen readers announce them. Also, buttons should be keyboard accessible.

// How would you pause auto-dismiss on hover?
// Answer:
// Track hover state
// Clear timeout on hover
// Restart it on mouse leave