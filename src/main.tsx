import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <main style={{ fontFamily: "system-ui", maxWidth: 860, margin: "64px auto", padding: "0 24px" }}>
      <p style={{ color: "#2563eb", fontWeight: 700 }}>SHOPPING SESSIONS</p>
      <h1>Shop together. Decide better.</h1>
      <p>Create a shared session, invite your people, and turn group opinions into a confident purchase.</p>
      <button style={{ border: 0, borderRadius: 10, background: "#111827", color: "white", padding: "12px 18px" }}>
        Create a session
      </button>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
