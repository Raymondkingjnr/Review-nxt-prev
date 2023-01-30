import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  const checkNum = (Number) => {
    if (Number > people.length - 1) {
      return 0;
    }
    if (Number < 0) {
      return people.length - 1;
    }
    return Number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;

      return checkNum(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;

      return checkNum(newIndex);
    });
  };

  const randomPerson = () => {
    let randomnum = Math.floor(Math.random() * people.length);

    if (randomnum === index) {
      randomnum = index + 1;
    }

    setIndex(checkNum(randomnum));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <FaChevronLeft className="prev-btn" onClick={prevPerson} />
        <FaChevronRight className="next-btn" onClick={nextPerson} />
      </div>
      <button className="random-btn" onClick={randomPerson}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
