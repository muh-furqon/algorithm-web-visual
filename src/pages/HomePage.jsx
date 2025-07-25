// src/pages/HomePage.js
import { Link } from 'react-router-dom';
import { algorithmData } from '../data/algorithms';
import { FiArrowRight } from 'react-icons/fi'; // A nice icon library

// You can install react-icons with: npm install react-icons
const AlgorithmCard = ({ name, description, complexity, path }) => (
  <Link to={path}>
    <div className="group bg-gray-800 p-6 rounded-lg border border-transparent hover:border-sky-500 hover:bg-gray-800/50 transition-all duration-300 h-full">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-gray-100 group-hover:text-sky-400 transition-colors">{name}</h3>
        <span className="text-sm font-mono bg-sky-900/50 text-sky-300 px-2 py-1 rounded-md">{complexity}</span>
      </div>
      <p className="text-gray-400 mt-2 mb-4">{description}</p>
      <div className="text-sky-400 flex items-center gap-2 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Visualize
        <FiArrowRight className="transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
      </div>
    </div>
  </Link>
);


export default function HomePage() {
  const categories = Object.keys(algorithmData);

  return (
    <div className="container mx-auto px-4 py-12">
      
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
          Algorithm Visualizer
        </h1>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore and understand how fundamental computer science algorithms work through interactive visualizations.
        </p>
      </header>

      {/* Algorithm Sections */}
      <div className="space-y-16">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="text-3xl font-bold capitalize mb-6 border-l-4 border-sky-500 pl-4">
              {category} Algorithms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {algorithmData[category].map((algo) => (
                <AlgorithmCard key={algo.name} {...algo} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}