import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const planLimits = {
  Build: { calls: 1000, sms: 10000, leads: 3000 },
  Grow: { calls: 3000, sms: 25000, leads: 5000 },
};

const stats = [
  { label: 'Calls', value: 0, icon: '📞' },
  { label: 'Messages', value: 0, icon: '💬' },
  { label: 'Appointments', value: 0, icon: '📅' },
  { label: 'Social Posts', value: 0, icon: '📱' },
];

const navLinks = [
  { label: 'Dashboard', icon: '🏠' },
  { label: 'Clients', icon: '👥' },
  { label: 'Tasks', icon: '⚡' },
  { label: 'Reports', icon: '📊' },
  { label: 'Settings', icon: '⚙️' },
];

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [clients, setClients] = useState([
    { name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  ]);
  const [tasks, setTasks] = useState([
    { text: 'Follow up with new leads', done: false },
    { text: 'Schedule onboarding call', done: false },
    { text: 'Review monthly report', done: false },
  ]);
  const [newClient, setNewClient] = useState({ name: '', email: '', status: 'Active' });
  const [newTask, setNewTask] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showAiTaskModal, setShowAiTaskModal] = useState(false);
  const [showOnboardModal, setShowOnboardModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (!auth.currentUser) return;
      const docRef = doc(db, 'users', auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (!userData) return <div className="text-center mt-20">No user data found.</div>;

  // Placeholder: Add monthly reset logic here

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col py-8 px-4">
        <div className="text-2xl font-bold mb-10 text-primary-600 flex items-center gap-2">
          <span>🤖</span> <span>AI Agent Rep</span>
        </div>
        <nav className="flex-1 space-y-2">
          {navLinks.map(link => (
            <button
              key={link.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 font-medium transition ${activeTab === link.label ? 'bg-primary-100 text-primary-700' : 'hover:bg-primary-50'}`}
              onClick={() => setActiveTab(link.label)}
            >
              <span>{link.icon}</span> {link.label}
            </button>
          ))}
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {activeTab === 'Dashboard' && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map(stat => (
                <div key={stat.label} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                  <span className="text-3xl mb-2">{stat.icon}</span>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            {/* Main Dashboard Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Recent Activity Feed */}
              <section className="md:col-span-2 bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="text-gray-400 italic">No recent activity yet.</li>
                </ul>
              </section>
              {/* Quick Actions & Charts */}
              <section className="bg-white rounded-xl shadow p-6 flex flex-col gap-6">
                <div>
                  <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                  <button className="w-full bg-primary-600 text-white font-bold py-3 rounded-lg mb-2 hover:bg-primary-700 transition" onClick={() => setShowAiTaskModal(true)}>Run AI Task</button>
                  <button className="w-full bg-primary-100 text-primary-700 font-bold py-3 rounded-lg hover:bg-primary-200 transition" onClick={() => setShowOnboardModal(true)}>Onboard New Client</button>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4">Charts/Reports</h2>
                  {/* Simple static bar chart */}
                  <div className="bg-gray-100 rounded-lg h-40 flex items-end justify-around p-4">
                    {/* Example bar chart data */}
                    {[{label:'Calls',val:8},{label:'Msgs',val:5},{label:'Appts',val:3},{label:'Posts',val:6}].map((d,i)=>(
                      <div key={i} className="flex flex-col items-center">
                        <div className="bg-primary-500 w-6 rounded-t h-8 flex items-end" style={{height: `${d.val*15}px`}}></div>
                        <span className="text-xs mt-2 text-gray-700">{d.label}</span>
                        <span className="text-xs text-gray-500">{d.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
            {/* Modals */}
            {showAiTaskModal && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full relative">
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={()=>setShowAiTaskModal(false)}>&times;</button>
                  <h2 className="text-xl font-bold mb-4">Run AI Task</h2>
                  <p>This is a demo modal for running an AI task. (Integrate your workflow here!)</p>
                  <button className="mt-6 bg-primary-600 text-white px-4 py-2 rounded" onClick={()=>setShowAiTaskModal(false)}>Close</button>
                </div>
              </div>
            )}
            {showOnboardModal && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full relative">
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={()=>setShowOnboardModal(false)}>&times;</button>
                  <h2 className="text-xl font-bold mb-4">Onboard New Client</h2>
                  <p>This is a demo modal for onboarding a new client. (Add your onboarding form here!)</p>
                  <button className="mt-6 bg-primary-600 text-white px-4 py-2 rounded" onClick={()=>setShowOnboardModal(false)}>Close</button>
                </div>
              </div>
            )}
          </>
        )}
        {activeTab === 'Clients' && (
          <div className="bg-white rounded-xl shadow p-10">
            <h2 className="text-2xl font-bold mb-6 text-primary-700">Clients</h2>
            <form className="flex gap-2 mb-6" onSubmit={e => {e.preventDefault(); setClients([...clients, newClient]); setNewClient({ name: '', email: '', status: 'Active' });}}>
              <input type="text" placeholder="Name" className="border px-2 py-1 rounded" value={newClient.name} onChange={e => setNewClient({ ...newClient, name: e.target.value })} required />
              <input type="email" placeholder="Email" className="border px-2 py-1 rounded" value={newClient.email} onChange={e => setNewClient({ ...newClient, email: e.target.value })} required />
              <select className="border px-2 py-1 rounded" value={newClient.status} onChange={e => setNewClient({ ...newClient, status: e.target.value })}>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <button type="submit" className="bg-primary-600 text-white px-4 py-1 rounded">Add</button>
            </form>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {clients.map((c, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">{c.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{c.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{c.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'Tasks' && (
          <div className="bg-white rounded-xl shadow p-10">
            <h2 className="text-2xl font-bold mb-6 text-primary-700">Tasks</h2>
            <form className="flex gap-2 mb-6" onSubmit={e => {e.preventDefault(); if(newTask){ setTasks([...tasks, { text: newTask, done: false }]); setNewTask(''); }}}>
              <input type="text" placeholder="New task" className="border px-2 py-1 rounded" value={newTask} onChange={e => setNewTask(e.target.value)} />
              <button type="submit" className="bg-primary-600 text-white px-4 py-1 rounded">Add</button>
            </form>
            <ul className="space-y-4">
              {tasks.map((task, i) => (
                <li key={i} className="flex items-center gap-3">
                  <input type="checkbox" checked={task.done} onChange={() => setTasks(tasks.map((t, j) => j === i ? { ...t, done: !t.done } : t))} />
                  <span className={task.done ? 'line-through text-gray-400' : ''}>{task.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'Reports' && (
          <div className="bg-white rounded-xl shadow p-10">
            <h2 className="text-2xl font-bold mb-6 text-primary-700">Reports</h2>
            <div className="mb-4">Monthly Performance</div>
            <ul className="space-y-2">
              <li>Calls: 120</li>
              <li>Messages: 340</li>
              <li>Appointments: 45</li>
              <li>Social Posts: 12</li>
            </ul>
          </div>
        )}
        {activeTab === 'Settings' && (
          <div className="bg-white rounded-xl shadow p-10 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-primary-700">User Settings</h2>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Change Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter new email" value={emailInput} onChange={e => setEmailInput(e.target.value)} />
                <button type="button" className="mt-2 bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700" disabled>Update Email (Demo)</button>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Change Password</label>
                <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter new password" value={passwordInput} onChange={e => setPasswordInput(e.target.value)} />
                <button type="button" className="mt-2 bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700" disabled>Update Password (Demo)</button>
              </div>
              <div>
                <button type="button" className="w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition" onClick={async () => { await signOut(auth); navigate('/signin'); }}>Sign Out</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
} 