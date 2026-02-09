import { useEffect, useState } from "react";

const API_BASE = "http://localhost:5050";

export function useSiteConfig() {
  const [site, setSite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

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
