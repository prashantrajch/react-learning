import { useEffect, useState } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import "./sliderImage.css";
import Images from "./Image";
import Button from "./Button";

export default function SliderImage({ url, page, limit }) {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function fetchData(getUrl) {
    try {
      setLoading(true);

      fetch(`${getUrl}?page=${page}&limit=${limit}`)
        .then((data) => data.json())
        .then((data) => {
          setData(data);
        });
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchData(url);
    } else {
      setError("data is not come");
    }
  }, [url]);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  }

  function handleBtnClick(getIdx) {
    setCurrentSlide(getIdx);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {data.map((items, idx) => (
        <Images
          src={items.download_url}
          alt={items.download_url}
          id={items.id}
          idx={idx}
          currentSlide={currentSlide}
        />
      ))}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {data.map((_, index) => (
          <Button
            idx={index}
            currentSlide={currentSlide}
            handleBtnClick={handleBtnClick}
          />
        ))}
      </span>
    </div>
  );
}
