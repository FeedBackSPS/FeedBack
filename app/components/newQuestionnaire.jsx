import { useState } from "react";
import "./newQuestionnaire.css";

export default function NewQuestionnaire() {
  return (
    <section className="questionnaire">
      <h1>Nový dotazník</h1>
      <h2>Popis dotazníku</h2>
      <textarea
        placeholder="xxxxxxxxxxxxxxx"
        name="description"
        className="text-field"
      />

      <h2>Otázka 1 (škála 1)</h2>
      <textarea
        placeholder="xxxxxxxxxxxxxxx"
        name="q1-text"
        className="text-field"
      />

      <div className="question-type-grid">
        <button type="button" className="type-btn top-left">
          Textové pole
        </button>
        <button type="button" className="type-btn top-right">
          Škála
        </button>

        <button type="button" className="type-btn bottom-left">
          Ano/Ne
        </button>
        <button type="button" className="type-btn bottom-mid">
          1 - 5
        </button>
        <button type="button" className="type-btn bottom-right">
          Možnosti
        </button>
      </div>
    </section>
  );
}
