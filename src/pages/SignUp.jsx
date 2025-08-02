import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const plans = [
  { name: 'Build', calls: 1000, sms: 10000, leads: 3000 },
  { name: 'Grow', calls: 3000, sms: 25000, leads: 5000 },
  { name: 'Dominate', calls: 10000, sms: 100000, leads: 20000 },
];

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [plan, setPlan] = useState(plans[0].name);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', userCred.user.uid), {
        email,
        plan,
        usage: { calls: 0, sms: 0, leads: 0 },
        createdAt: new Date(),
        lastReset: new Date(),
      });
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="border p-2 rounded" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="border p-2 rounded" />
        <label htmlFor="plan" className="font-semibold text-gray-700">Select Plan</label>
        <select id="plan" value={plan} onChange={e => setPlan(e.target.value)} className="border p-2 rounded">
          {plans.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
        </select>
        <button type="submit" className="btn-primary">Sign Up</button>
        {error && <div className="text-red-500 text-sm">{error}</div>}
      </form>
    </div>
  );
} 