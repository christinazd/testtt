'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function TestAuth() {
  const [result, setResult] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const supabase = createClient();

  const testConnection = async () => {
    setResult('Testing...');
    try {
      // Test 1: Check environment variables
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      
      if (!url || !key) {
        setResult('❌ Missing environment variables!');
        return;
      }
      
      setResult(`✅ Environment variables found\nURL: ${url.substring(0, 30)}...\nKey: ${key.substring(0, 30)}...`);
    } catch (error: any) {
      setResult(`❌ Error: ${error.message}`);
    }
  };

  const testLogin = async () => {
    if (!email || !password) {
      setResult('Please enter email and password');
      return;
    }

    setResult('Attempting login...');
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (error) {
        setResult(`❌ Login failed: ${error.message}`);
      } else if (data?.user) {
        setResult(`✅ Login successful!\nUser ID: ${data.user.id}\nEmail: ${data.user.email}`);
      } else {
        setResult('❌ No user data returned');
      }
    } catch (error: any) {
      setResult(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Auth Test Page</h1>
        
        <div className="space-y-4">
          <button
            onClick={testConnection}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Test Connection
          </button>

          <div className="border-t pt-4">
            <h2 className="font-semibold mb-2">Test Login:</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-2 border rounded mb-2"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-3 py-2 border rounded mb-2"
            />
            <button
              onClick={testLogin}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Test Login
            </button>
          </div>

          {result && (
            <div className="mt-4 p-4 bg-gray-50 rounded border">
              <pre className="whitespace-pre-wrap text-sm">{result}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
