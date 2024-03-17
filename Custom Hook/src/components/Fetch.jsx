import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setPending(true);
      let response = await fetch(url, { ...options });
      if (!response.status) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (err) {
      setError(err + " Some Error Occured..");
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, pending, error };
}
