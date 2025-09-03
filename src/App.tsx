import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Cart />
        <main>
          <Hero />
          <div id="products">
            <ProductGrid />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;