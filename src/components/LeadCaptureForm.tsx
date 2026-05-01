'use client';

import { useState } from 'react';

export default function LeadCaptureForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Lead captured:', email);
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Stay Updated</h3>
      {status === 'success' ? (
        <div className="p-4 bg-green-100 text-green-700 rounded-lg">
          Thank you! We'll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors disabled:bg-blue-400"
          >
            {status === 'loading' ? 'Submitting...' : 'Join the Waitlist'}
          </button>
        </form>
      )}
    </div>
  );
}
