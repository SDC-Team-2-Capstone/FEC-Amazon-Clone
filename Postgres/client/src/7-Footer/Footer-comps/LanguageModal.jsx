import { useState, useEffect } from 'react';

import '../Footer.css';

export default function LanguageModal(props) {
  const [lang, setLang] = useState(true);
  return (
    <div className="language-select-modal" style={{ top: `${props.bottom - 240}px`, left: props.left }}>
      <div className="arrow">
        <div className="arrowInner"></div>
      </div>
      <div className="main-modal">
        <div className={`choice ${lang ? 'Alive' : 'Dead'}`} onClick={() => setLang(true)}>
          <div className={`radio${lang ? 'Alive' : 'Dead'}`}></div> English - EN
        </div>
        <div className="small-divider"></div>
        <div className={`choice ${lang ? 'Dead' : 'Alive'}`} onClick={() => setLang(false)}>
          <div className={`radio${lang ? 'Dead' : 'Alive'}`}></div>español - ES
        </div>
        <div className="learn-more">Learn More</div>
        <div className="small-divider"></div>
        <div className="needless-info">
          <div className="flag"></div> You are Shopping on Amazon.com
        </div>
        <div className="modal-bottom">Change country/region.</div>
      </div>
    </div>
  );
}
