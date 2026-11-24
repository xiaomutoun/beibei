import { useState } from 'react';
import './App.css';
import Navlinks from './components/Navlinks';
import GuessHero from './pages/GuessHero';
import LearnCoding from './pages/LearnCoding';
import Election from './pages/Election';
import Others from './pages/Others';

function App() {
  const [activePage, setActivePage] = useState<'guessHero' | 'learnCoding' | 'others' | 'election'>('election');

  return (
    <div className="App">
      <header className="App-header">
        <Navlinks activePage={activePage} onSelect={setActivePage} />
        <main className="App-content">
          {activePage === 'guessHero' && <GuessHero />}
          {activePage === 'learnCoding' && <LearnCoding />}
          {activePage === 'others' && <Others />}
          {activePage === 'election' && <Election />}
        </main>
      </header>
    </div>
  );
}

export default App;
