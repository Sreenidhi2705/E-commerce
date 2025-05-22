import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsList from './components/ProductsList';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar toggleCart={toggleCart} />
        <main className="flex-grow">
          <Hero />
          <ProductsList />
        </main>
        <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;