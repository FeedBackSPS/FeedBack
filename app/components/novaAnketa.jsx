import { useState } from "react";
import "./NovaAnketa.css";

export default function NovaAnketa() {
  const [importance, setImportance] = useState(4);
  const min = 1;
  const max = 10;

  // Placeholder texty pro možnosti, aby to vypadalo přesně jako na obrázku
  const [options, setOptions] = useState([
    { id: 1, placeholder: "xxxxxxx" },
    { id: 2, placeholder: "xxxxxxx" }
  ]);

  const addOption = () => {
    // Nová možnost se přidá do pole
    setOptions([...options, { id: Date.now(), placeholder: "nová možnost" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Odesláno");
  };

  // Výpočet procentuální pozice pro modrý slider (aby jezdil přesně)
  // Vzoreček zajišťuje, že střed "pilulky" sedí přesně na hodnotě
  const percentage = ((importance - min) * 100) / (max - min);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="title">Nová anketa</h2>

        <form onSubmit={handleSubmit}>
          
          {/* Název */}
          <div className="form-group">
            <label htmlFor="nazev" className="label">Název</label>
            <input 
              type="text" 
              id="nazev" 
              name="title" 
              className="input-style" 
              placeholder="xxxxxxxxxxxxx" 
            />
          </div>

          {/* Důležitost - Custom Slider */}
          <div className="form-group">
            <label htmlFor="dulezitost" className="label">Důležitost</label>
            <div className="range-container">
              {/* Šedá čára na pozadí */}
              <div className="range-track-bg"></div>
              
              {/* Modrá pilulka s číslem (vizuální reprezentace) */}
              <div 
                className="range-thumb-custom"
                style={{ left: `${percentage}%` }}
              >
                {importance}
              </div>

              {/* Skutečný (neviditelný) input pro ovládání */}
              <input 
                type="range" 
                id="dulezitost" 
                name="importance" 
                min={min} 
                max={max} 
                value={importance}
                onChange={(e) => setImportance(Number(e.target.value))}
                className="range-input"
              />
            </div>
          </div>

          {/* Popis */}
          <div className="form-group">
            <label htmlFor="popis" className="label">Popis</label>
            <textarea 
              id="popis" 
              name="description" 
              className="textarea-style" 
              placeholder="xxxxxxxxxxxxx" 
            />
          </div>

          {/* Možnosti */}
          <div className="form-group">
            <label className="label">Možnosti</label>
            <div className="options-grid">
              {/* Renderování inputů */}
              {options.map((opt) => (
                <input 
                  key={opt.id}
                  type="text" 
                  name="options[]" 
                  className="input-style" 
                  placeholder={opt.placeholder} 
                />
              ))}
              
              {/* Tlačítko "další možnost" uvnitř gridu jako na obrázku */}
              <button 
                type="button" 
                onClick={addOption} 
                className="add-option-btn"
              >
                další možnost
              </button>
            </div>
          </div>

          {/* Tlačítko Odeslat vpravo dole */}
          <div className="footer-actions">
            <button type="submit" className="submit-btn">
              Odeslat
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}