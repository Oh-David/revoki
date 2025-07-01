'use client';

import { auth, db, storage } from '@/lib/firebase';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('✅ Firebase Auth:', auth);
    console.log('✅ Firestore DB:', db);
    console.log('✅ Firebase Storage:', storage);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Revoki</h1>
      <p className="mt-4 text-lg text-gray-600">Your AI art, your marketplace.</p>
    </main>
  );
}
