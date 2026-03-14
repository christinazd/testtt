'use client';

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { LogOut, Home } from 'lucide-react';
import { useState } from 'react';

export default function AdminHeader() {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await supabase.auth.signOut();
      router.push('/login');
      router.refresh();
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-amber-600 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">View Website</span>
            </a>
            <button
              onClick={handleSignOut}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
