import { useState } from "react";
import "./style.css";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product i've ever used!",
      author: "John Doe",
    },
    {
      quote: "This is the best product i've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "This is the best product i've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "This is the best product i've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "This is the best product i've ever used!",
      author: "Jane Doe",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>
      <div className="nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;
