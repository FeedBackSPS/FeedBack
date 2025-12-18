import { useState } from "react";
import styles from "./skolniObedy.module.css";

export default function SkolniObedy() {
  // Stav pro výběr Ano/Ne (true = Ano, false = Ne, null = nevybráno)
  const [vyhovuje, setVyhovuje] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Přidáme manuálně hodnotu tlačítka, pokud není ve formuláři inputem
    const data = Object.fromEntries(formData);
    console.log("Odesílaná data:", { ...data, vyhovujeVyber: vyhovuje ? 'Ano' : 'Ne' });
    alert("Odesláno!");
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>Školní obědy</h2>

        <form onSubmit={handleSubmit}>
          
          {/* Popisný text */}
          <p className={styles.descriptionText}>
            Prosím popište nám vaší spokojenost se školními obědy.
          </p>

          {/* Otázka 1: Výběr ze 2 jídel */}
          <label className={styles.questionLabel}>
            Vyhovuje vám výběr ze 2 jídel?
          </label>
          
          <div className={styles.binaryOptionsGrid}>
            <button 
              type="button" 
              className={`${styles.binaryBtn} ${vyhovuje === true ? styles.active : ''}`}
              onClick={() => setVyhovuje(true)}
            >
              Ano
            </button>
            <button 
              type="button" 
              className={`${styles.binaryBtn} ${vyhovuje === false ? styles.active : ''}`}
              onClick={() => setVyhovuje(false)}
            >
              Ne
            </button>
          </div>

          {/* Otázka 2: Připomínka */}
          <label htmlFor="pripominka" className={styles.questionLabel}>
            Máte nějakou připomínku ke školním obědům?
          </label>
          
          <textarea 
            id="pripominka"
            name="pripominka"
            className={styles.textareaStyle}
            // Na obrázku je textarea prázdná, bez placeholderu
          />

          {/* Tlačítko Odeslat */}
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