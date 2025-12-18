import { useState } from "react";
// Důležité: importujeme objekt 'styles' z modulu
import styles from "../components/newQuestionnaire.module.css";

export default function NewQuestionnaire() {
  const [importance, setImportance] = useState(4);
  const min = 1;
  const max = 10;

  const [options, setOptions] = useState([
    { id: 1, placeholder: "xxxxxxx" },
    { id: 2, placeholder: "xxxxxxx" },
  ]);

  const addOption = () => {
    setOptions([...options, { id: Date.now(), placeholder: "nová možnost" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Odesláno");
  };

  const percentage = ((importance - min) * 100) / (max - min);

  return (
    // Používáme styles.nazevTridy místo stringu "nazev-tridy"
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>Nový dotazník</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="nazev" className={styles.label}>
              Název
            </label>
            <input
              type="text"
              id="nazev"
              name="title"
              className={styles.inputStyle}
              placeholder="xxxxxxxxxxxxx"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="dulezitost" className={styles.label}>
              Důležitost
            </label>
            <div className={styles.rangeContainer}>
              <div className={styles.rangeTrackBg}></div>

              <div
                className={styles.rangeThumbCustom}
                style={{ left: `${percentage}%` }}
              >
                {importance}
              </div>

              <input
                type="range"
                id="dulezitost"
                name="importance"
                min={min}
                max={max}
                value={importance}
                onChange={(e) => setImportance(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Možnosti</label>
            <div className={styles.optionsGrid}>
              {options.map((opt) => (
                <input
                  key={opt.id}
                  type="text"
                  name="options[]"
                  className={styles.inputStyle}
                  placeholder={opt.placeholder}
                />
              ))}

              <button
                type="button"
                onClick={addOption}
                className={styles.addOptionBtn}
              >
                další možnost
              </button>
            </div>
          </div>

          <div className={styles.footerActions}>
            <button type="submit" className={styles.submitBtn}>
              Odeslat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
