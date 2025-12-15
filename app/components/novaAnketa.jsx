import { useState } from "react";

export default function NovaAnketa() {
  const [importance, setImportance] = useState(4);
  
  // Aktualizované placeholdery podle obrázku
  const [options, setOptions] = useState([
    { id: 1, placeholder: "XXXXXXX" },
    { id: 2, placeholder: "XXXXXXX" }
  ]);

  const addOption = () => {
    setOptions([...options, { id: Date.now(), placeholder: "další možnost" }]);
  };

  // Funkce pro odeslání (protože nepoužíváme Remix Form)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Odesílaná data:", data);
    alert("Anketa odeslána (viz konzole)"); // Jen pro ukázku
  };

  // --- DEFINICE STYLŮ PODLE OBRÁZKU ---
  const colors = {
    darkBlue: '#2a3b6e',
    lightGrayInput: '#d9d9d9',
    offWhiteBg: '#f4f4f2',
    labelText: '#222'
  };

  const styles = {
    modalOverlay: {
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: colors.offWhiteBg, // Krémové pozadí
      padding: '35px',
      borderRadius: '30px', // Výrazně zaoblené rohy
      border: `3px solid ${colors.darkBlue}`, // Tmavě modrý rámeček
      width: '90%',
      maxWidth: '480px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    title: {
      marginTop: 0,
      marginBottom: '25px',
      fontSize: '28px',
      fontWeight: '700',
      color: colors.darkBlue,
      textAlign: 'center'
    },
    formGroup: {
      marginBottom: '25px'
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      fontSize: '18px',
      fontWeight: '600',
      color: colors.labelText
    },
    // Společný styl pro inputy a textareu
    inputStyle: {
      width: '100%',
      padding: '14px 16px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#333',
      backgroundColor: colors.lightGrayInput,
      borderRadius: '10px',
      border: 'none',
      boxSizing: 'border-box',
      outline: 'none',
    },
    textareaStyle: {
      minHeight: '80px',
      resize: 'vertical',
      fontFamily: 'inherit'
    },
    rangeContainer: {
      position: 'relative',
      padding: '15px 0 5px 0',
      display: 'flex',
      alignItems: 'center'
    },
    // Modrá "pilulka" s číslem
    rangeValueDisplay: {
      position: 'absolute',
      top: '-35px',
      transform: 'translateX(-50%)',
      backgroundColor: colors.darkBlue,
      color: 'white',
      padding: '6px 16px',
      borderRadius: '20px',
      fontSize: '16px',
      fontWeight: 'bold',
      pointerEvents: 'none',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
    },
    rangeInput: {
      width: '100%',
      cursor: 'pointer',
      height: '8px',
      borderRadius: '4px',
      accentColor: colors.darkBlue,
    },
    optionsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
      marginBottom: '12px'
    },
    addOptionBtn: {
      width: '100%',
      padding: '14px 16px',
      backgroundColor: colors.lightGrayInput,
      border: 'none',
      borderRadius: '10px',
      color: '#555',
      fontWeight: '600',
      fontStyle: 'italic',
      cursor: 'pointer',
      fontSize: '16px',
      gridColumn: 'span 2',
      textAlign: 'left'
    },
    submitBtn: {
      width: '100%',
      padding: '16px',
      backgroundColor: colors.darkBlue,
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '700',
      cursor: 'pointer',
      marginTop: '20px',
      transition: 'opacity 0.2s'
    }
  };

  const textareaStylesCombined = { ...styles.inputStyle, ...styles.textareaStyle };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h2 style={styles.title}>Nová anketa</h2>

        {/* POUŽITÍ STANDARDNÍHO FORM TAGU */}
        <form onSubmit={handleSubmit}>
          
          {/* Název */}
          <div style={styles.formGroup}>
            <label htmlFor="nazev" style={styles.label}>Název</label>
            <input 
              type="text" 
              id="nazev" 
              name="title" 
              style={styles.inputStyle} 
              placeholder="XXXXXXXXXXXX" 
            />
          </div>

          {/* Důležitost */}
          <div style={styles.formGroup}>
            <label htmlFor="dulezitost" style={styles.label}>Důležitost</label>
            <div style={styles.rangeContainer}>
              <div 
                style={{ 
                    ...styles.rangeValueDisplay,
                    left: `calc(${((importance - 1) * 100) / 9}% + (${10 - importance * 2}px))` 
                }}
              >
                {importance}
              </div>
              <input 
                type="range" 
                id="dulezitost" 
                name="importance" 
                min="1" 
                max="10" 
                value={importance}
                onChange={(e) => setImportance(e.target.value)}
                style={styles.rangeInput}
              />
            </div>
          </div>

          {/* Popis */}
          <div style={styles.formGroup}>
            <label htmlFor="popis" style={styles.label}>Popis</label>
            <textarea 
              id="popis" 
              name="description" 
              style={textareaStylesCombined} 
              placeholder="XXXXXXXXXXXX" 
            />
          </div>

          {/* Možnosti */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Možnosti</label>
            <div style={styles.optionsGrid}>
              {options.map((opt) => (
                <input 
                  key={opt.id}
                  type="text" 
                  name="options[]" 
                  style={styles.inputStyle} 
                  placeholder={opt.placeholder} 
                />
              ))}
              
              <button 
                type="button" 
                onClick={addOption} 
                style={styles.addOptionBtn}
                onMouseOver={(e) => e.target.style.backgroundColor = '#c9c9c9'}
                onMouseOut={(e) => e.target.style.backgroundColor = colors.lightGrayInput}
              >
                další možnost
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            style={styles.submitBtn}
            onMouseOver={(e) => e.target.style.opacity = '0.9'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          >
            Vytvořit anketu
          </button>

        </form>
      </div>
    </div>
  );
}