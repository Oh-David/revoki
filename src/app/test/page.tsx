'use client';

import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyBykaZa8a-APtyBO77i_iAyA7YiMELFHWK',
  authDomain: 'revoki-cd9d5.firebaseapp.com',
  projectId: 'revoki-cd9d5',
  storageBucket: 'revoki-cd9d5.appspot.com',
  messagingSenderId: '331141411716',
  appId: '1:331141411716:web:1e282213be03fca093651f',
});

const auth = getAuth(app);

export default function TestPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('✅ Success!');
    } catch (err: any) {
      setMessage(`❌ ${err.message}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Test Signup</h1>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded mb-2 w-64"
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded mb-2 w-64"
      />
      <button onClick={handleSignup} className="bg-black text-white px-4 py-2 rounded">
        Sign Up
      </button>
      {message && <p className="mt-4">{message}</p>}
    </main>
  );
}
