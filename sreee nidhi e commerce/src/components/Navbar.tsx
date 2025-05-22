import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  toggleCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleCart }) => {
  const { totalItems } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-blue-600 font-bold text-2xl">ShopEase</span>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="#" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#products" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Products</a>
                <a href="#" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <button 
              onClick={toggleCart}
              className="ml-4 p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart className="h-6 w-6 text-blue-600" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex justify-center">
          <a href="#" className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#products" className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Products</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;