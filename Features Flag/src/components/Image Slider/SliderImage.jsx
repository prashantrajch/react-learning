import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./style.css";

export default function SliderImage({ url, page, limit }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allImage, setAllImage] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function fetchUrlAPI() {
    try {
      setLoading(true);
      const res = await fetch(`${url}?page=${page}&limit=${limit}`);
      const result = await res.json();
      if (result) {
        setAllImage(result);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
    }
  }

  function handleNextClick() {
    setCurrentIndex((prevIndex) => currentIndex >= allImage.length - 1 ? prevIndex = 0 : ++prevIndex);
  }
  function handlePrevClick() {
    setCurrentIndex((prevIndex) => currentIndex <= 0? prevIndex = allImage.length - 1 : --prevIndex);
  }

  useEffect(() => {
    fetchUrlAPI();
  }, []);

  return (
    <div>
      {error != null ? (
        <p>{error}</p>
      ) : loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Data is Loading</p>
        </div>
      ) : (
        <div className="slider-container">
          {allImage.map((img, ind) => (
            <div
              key={ind}
              className={`slider ${ind == currentIndex ? "active" : null}`}
            >
              <img src={img.download_url} alt={img.author} />
            </div>
          ))}
          <div className="sl-btns">
            {/* <FaArrowAltCircleLeft
                size={30}
                style={{ color: "red", cursor: "pointer" }}
            /> */}
            {/* <FaArrowAltCircleRight
                size={30}
                style={{ color: "red", cursor: "pointer" }}
            /> */}
            <button className="left" onClick={handlePrevClick}>
              &lt;
            </button>
            <button className="right" onClick={handleNextClick}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
