
  import { createRoot } from "react-dom/client";
  import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
  import App from "./app/App.tsx";
  import AdminDashboard from "./app/pages/AdminDashboard.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/adminGSP" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
  