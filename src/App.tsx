import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/Cv';
import Portfolio from './pages/Portfolio';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <div className="my-4 flex justify-center bg-slate-200">
        <div className="pages-content bg-white p-6 my-4">
          <Routes>
            <Route path="about" element={<About />} />
            <Route path="cv" element={<CV />} />
            <Route path="" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
