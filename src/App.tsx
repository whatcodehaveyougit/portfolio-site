import Header from './components/Header';
import About from './pages/About';
import CV from './pages/Cv';
import Portfolio from './pages/Portfolio';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="cv" element={<CV />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
