// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import InsertionSort from './components/InsertionSort';
import Navbar from './components/Navbar';
import HeapSort from './components/HeapSort';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sorting/insertion-sort" element={<InsertionSort />} />
            <Route path="/sorting/heap-sort" element={<HeapSort />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;