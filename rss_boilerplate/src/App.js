// src/App.js

import './css/main.css';
import {hentAlleVarer} from './sanity/service'
import {useEffect, useState} from 'react'

function App() {
  const [handlelistevarer, setHandlelistevarer] = useState([])

  const samleVarer = async () => {
    const alleVarer = await hentAlleVarer();
    setHandlelistevarer(alleVarer);
  }

  useEffect(() => {
    samleVarer();
  }, [])

  console.log(handlelistevarer);

  return (
  <section>
    <h1>Handleliste</h1>
    <ul>
      <li>
        <div className="vare heading">Vare</div>
        <div className="mengde heading">Mengde</div>
      </li>
      {handlelistevarer.map((vare) => (
        <li>
          <div className="vare">{vare.varenavn}</div>
          <div className="mengde">{vare.mengde}</div>
          </li>
        )
      )}
    </ul>
    </section>
  );
}

export default App;