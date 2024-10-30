import React from 'react';
import { ShoppingCart, Search, Menu, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
  const { cartItems } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer md:hidden" />
            <span className="text-xl font-bold">Deals</span>
          </div>
          
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative flex-1 max-w-2xl">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="hidden md:block">Welcome, {user?.name}</span>
                <button
                  onClick={logout}
                  className="hidden md:flex items-center gap-2 hover:bg-blue-700 px-4 py-2 rounded"
                >
                  <LogOut className="h-5 w-5" />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="hidden md:block hover:bg-blue-700 px-4 py-2 rounded"
              >
                Login
              </button>
            )}
            <div className="relative">
              <ShoppingCart className="h-6 w-6 cursor-pointer" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}