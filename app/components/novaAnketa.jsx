import { useState } from "react";
import styles from "./novaAnketa.module.css";

export default function NovaAnketa() {
  const [importance, setImportance] = useState(4);
  const min = 1;
  const max = 10;

  // Místo prostého pole options nyní máme pole sekcí.
  // Každá sekce má své ID a seznam svých možností.
  const [sections, setSections] = useState([
    {
      id: 1,
      options: [
        { id: 101, placeholder: "xxxxxxx" },
        { id: 102, placeholder: "xxxxxxx" }
      ]
    }
  ]);

  // Funkce pro přidání celé nové sekce (Popis + Možnosti)
  const handleAddSection = () => {
    const newSection = {
      id: Date.now(),
      options: [
        { id: Date.now() + 1, placeholder: "xxxxxxx" },
        { id: Date.now() + 2, placeholder: "xxxxxxx" }
      ]
    };
    setSections([...sections, newSection]);
  };

  // Funkce pro přidání možnosti do KONKRÉTNÍ sekce
  const handleAddOption = (sectionId) => {
    setSections((prevSections) =>
      prevSections.map((sec) => {
        if (sec.id === sectionId) {
          return {
            ...sec,
            options: [
              ...sec.options,
              { id: Date.now(), placeholder: "nová možnost" }
            ]
          };
        }
        return sec;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Odesláno", { importance, sections });
  };

  const percentage = ((importance - min) * 100) / (max - min);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>Nová anketa</h2>

        <form onSubmit={handleSubmit}>
          
          {/* --- GLOBÁLNÍ ČÁST (Název a Důležitost jsou společné) --- */}
          <div className={styles.formGroup}>
            <label htmlFor="nazev" className={styles.label}>Název</label>
            <input 
              type="text" 
              id="nazev" 
              name="title" 
              className={styles.inputStyle} 
              placeholder="xxxxxxxxxxxxx" 
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="dulezitost" className={styles.label}>Důležitost</label>
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

          <hr className={styles.divider} />

          {/* --- OPAKUJÍCÍ SE ČÁST (Popis a Možnosti) --- */}
          <div className={styles.scrollableArea}>
            {sections.map((section, index) => (
              <div key={section.id} className={styles.sectionBlock}>
                
                {/* Zobrazit číslo otázky, pokud je jich víc */}
                {sections.length > 1 && (
                  <h4 className={styles.sectionTitle}>Otázka {index + 1}</h4>
                )}

                <div className={styles.formGroup}>
                  <label className={styles.label}>Popis</label>
                  <textarea 
                    name={`description_${section.id}`}
                    className={styles.textareaStyle} 
                    placeholder="xxxxxxxxxxxxx" 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Možnosti</label>
                  <div className={styles.optionsGrid}>
                    {section.options.map((opt) => (
                      <input 
                        key={opt.id}
                        type="text" 
                        name={`options_${section.id}[]`}
                        className={styles.inputStyle} 
                        placeholder={opt.placeholder} 
                      />
                    ))}
                    
                    <button 
                      type="button" 
                      onClick={() => handleAddOption(section.id)} 
                      className={styles.addOptionBtn}
                    >
                      další možnost
                    </button>
                  </div>
                </div>
                
                {/* Oddělovač mezi sekcemi, pokud to není poslední */}
                {index < sections.length - 1 && <hr className={styles.sectionDivider} />}
              </div>
            ))}
          </div>

          {/* --- PATIČKA S TLAČÍTKY --- */}
          <div className={styles.footerActions}>
            <button 
              type="button" 
              onClick={handleAddSection} 
              className={styles.addBtn}
            >
              Přidat
            </button>

            <button type="submit" className={styles.submitBtn}>
              Odeslat
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}