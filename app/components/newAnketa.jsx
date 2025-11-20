import { useState } from "react";
import "./newAnketa.css";

export default function NewAnketa() {
  const [importance, setImportance] = useState(4);
  const [options, setOptions] = useState(["", ""]); // výchozí dvě možnosti

  const handleChangeOption = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  return (
    <section>
      <h1>Nová anketa</h1>

      {/* Název */}
      <label>Název</label>
      <input type="text" placeholder="xxxxxxxxxxxx" />

      {/* Důležitost */}
      <label>Důležitost</label>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={importance}
          onChange={(e) => setImportance(Number(e.target.value))}
        />
        <div>{importance}</div>
      </div>

      {/* Popis */}
      <label>Popis</label>
      <textarea placeholder="xxxxxxxxxxxx" />

      {/* Možnosti */}
      <label>Možnosti</label>

      <div className="options-container">
        {options.map((value, idx) => (
          <input
            key={idx}
            type="text"
            placeholder="xxxxxxxx"
            value={value}
            onChange={(e) => handleChangeOption(idx, e.target.value)}
          />
        ))}

        {/* Přidat možnost */}
        <button type="button" onClick={addOption}>
          další možnost
        </button>
      </div>

      {/* Odeslat */}
      <button type="submit">Odeslat</button>
    </section>
  );
}
