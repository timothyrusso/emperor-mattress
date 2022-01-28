import React from 'react';
import './Header.css';
import { TranslationContext, translations } from '../../contexts/translation/TranslationContext';

function Header() {
  const translation = React.useContext(TranslationContext);
  
  return (
    <h1 className="header-title">{translation.title}</h1>
  );
}

export default Header;
