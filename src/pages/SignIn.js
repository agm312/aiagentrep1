import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="border p-2 rounded" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="border p-2 rounded" />
        <button type="submit" className="btn-primary">Sign In</button>
        {error && <div className="text-red-500 text-sm">{error}</div>}
      </form>
      <div className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
      </div>
    </div>
  );
} 