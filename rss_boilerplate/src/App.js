import './App.css';
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
    <>
    <h1>Handleliste</h1>
    <ul>
      <li>
        <div className="vare heading">Vare</div>
        <div className="mengde heading">Mengde</div>
      </li>
      <li>
        <div className="vare">Melk</div>
        <div className="mengde">3 Liter</div>
      </li>
      <li>
        <div className="vare">Egg</div>
        <div className="mengde">12stk</div>
      </li>
    </ul>
    </>
  );
}

export default App;