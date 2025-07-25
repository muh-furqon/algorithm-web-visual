// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import InsertionSort from './components/InsertionSort';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sorting/insertion-sort" element={<InsertionSort />} />
            {/* Add other algorithm routes here */}
            {/* e.g., <Route path="/searching/binary-search" element={<BinarySearchVisualizer />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;