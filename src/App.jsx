import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Plans from './components/Plans';
import Footer from './components/Footer';
import Painel from './pages/Painel';
import Menu from './pages/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-white text-gray-800">
              <Header />
              <Hero />
              <Features />
              <Plans />
              <Footer />
            </div>
          }
        />
        <Route path="/painel" element={<Painel />} />
        <Route path="/cardapio" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
