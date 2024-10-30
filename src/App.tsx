import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import LoginPage from './components/LoginPage';
import { products } from './data/products';
import { ShoppingCart } from 'lucide-react';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar onLoginClick={() => setShowLogin(true)} />
          
          <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Featured Products</h1>
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="md:hidden flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                <ShoppingCart className="h-5 w-5" />
                View Cart
              </button>
            </div>

            <div className="flex gap-6">
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>

              <div className={`
                fixed md:static top-0 right-0 h-full w-80 bg-white shadow-lg
                transform transition-transform duration-300 z-40
                ${isCartOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
              `}>
                <div className="sticky top-0 bg-white p-4 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Shopping Cart</h2>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                    >
                      ×
                    </button>
                  </div>
                </div>
                <Cart />
              </div>
            </div>
          </main>

          {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;