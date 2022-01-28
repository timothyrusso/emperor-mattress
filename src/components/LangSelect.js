import React from 'react';
import './LangSelect.css';

function LangSelect({ onLangSelect }) {
  function handleChange(e) {
    onLangSelect(e.target.value);
  }

  return (
    <select id="LangSelect" onChange={handleChange}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}

export default LangSelect;
