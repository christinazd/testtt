'use client';

import Link from 'next/link';
import { LogIn } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-amber-600 transition-colors">
            Fine Dining
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link 
              href="#menu" 
              className="text-gray-700 hover:text-amber-600 transition-colors hidden sm:inline"
            >
              Menu
            </Link>
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-amber-600 transition-colors hidden sm:inline"
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-amber-600 transition-colors hidden sm:inline"
            >
              Contact
            </Link>
            <Link 
              href="/login" 
              className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-semibold"
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Admin</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
