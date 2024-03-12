import { useEffect, useState } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  async function fetchData(getURL) {
    try {
      setLoading(true);
      let response = await fetch(getURL);
      let result = await response.json();
      setData(result.products);
      setLoading(false);
    } catch (er) {
      console.log(er);
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const scrolled = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((scrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
  }, []);

  return (
    <div>
      {loading ? (
        <p>Data is loading...! Please Wait</p>
      ) : (
        <div>
          <div className="scroll-top-header">
            <h1>Custom Scroll Indicator </h1>
            <div className="scroll-progress-container">
              <div
                className="scroll-progress-bar"
                style={{ width: `${scrollPercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="data-container">
            {data.map((dataItem) => (
              <p>{dataItem.title}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
