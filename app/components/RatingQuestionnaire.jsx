import { useState } from "react";
import "./ratingQuestionnaire.css";

export default function RatingQuestionnaire() {
  const [value, setValue] = useState(2);

  const getLabel = () => {
    if (value === 1) return "Negativní";
    if (value === 2) return "Neutrální";
    return "Pozitivní";
  };

  return (
    <section className="rating-container">
      <h1>Matematika</h1>

      <p className="question-text">Líbila se vám dnešní prezentace?</p>

      <div className="scale-block">
        <input
          type="range"
          min="1"
          max="3"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="scale"
        />
        <div className="scale-label">{getLabel()}</div>
      </div>

      <p className="question-text">Co byste vytkli?</p>
      <textarea className="text-field" placeholder="" />

      <button className="submit-btn">Odeslat</button>
    </section>
  );
}
