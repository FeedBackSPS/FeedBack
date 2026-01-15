import { useState } from "react";
import styles from "./novaAnketa.module.css";

export default function NovaAnketa() {
  const [importance, setImportance] = useState(4);
  const min = 1;
  const max = 10;

  const [sections, setSections] = useState([
    {
      id: 1,
      options: [
        { id: 101, placeholder: "xxxxxxx" },
        { id: 102, placeholder: "xxxxxxx" }
      ]
    }
  ]);

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

  const handleAddOption = (sectionId) => {
    setSections((prevSections) =>
      prevSections.map((sec) => {
        if (sec.id === sectionId) {
          return {
            ...sec,
            options: [
              ...sec.options,
              { id: Date.now(), placeholder: "další možnost" }
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
    <div className={styles.container}>
      {/* Pevná hlavička */}
      <div className={styles.header}>
        <h2 className={styles.title}>Nová anketa</h2>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
        
        {/* Scrollovatelný obsah */}
        <div className={styles.scrollableContent}>
            {/* Název */}
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

          {/* Důležitost */}
            <div className={styles.formGroup}>
              <label htmlFor="dulezitost" className={styles.label}>Důležitost</label>
              
              <div className={styles.rangeContainer}>
                {/* 1. Šedé pozadí dráhy */}
                <div className={styles.rangeTrackBg}></div>

                {/* 2. NOVÉ: Modrá výplň (Progress bar) */}
                <div 
                  className={styles.rangeTrackFill} 
                  style={{ width: `${percentage}%` }}
                ></div>
                
                {/* 3. Vizuální kulička s číslem */}
                <div 
                  className={styles.rangeThumbCustom}
                  style={{ left: `${percentage}%` }}
                >
                  {importance}
                </div>

                {/* 4. Neviditelný input pro ovládání */}
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

            {/* Dynamické sekce */}
            {sections.map((section, index) => (
              <div key={section.id} className={styles.sectionBlock}>
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
                
                {index < sections.length - 1 && <hr className={styles.sectionDivider} />}
              </div>
            ))}
        </div>

        {/* Pevná patička */}
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
  );
}