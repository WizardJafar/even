import { useEffect, useState } from "react";

function getApiBase() {
  if (typeof window === "undefined") return "";
  return window.location.hostname === "localhost"
    ? "http://localhost:5050"
    : "https://even-backend-f3n6.onrender.com";
}

export function useSiteConfig() {
  const [site, setSite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    const API_BASE = getApiBase();

    (async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`${API_BASE}/site`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (alive) setSite(data);
      } catch (e) {
        if (alive) setError(e.message || "Fetch error");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  return { site, loading, error };
}
// rsdgfshgrfsf