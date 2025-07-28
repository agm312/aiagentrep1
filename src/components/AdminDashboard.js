import React, { useState, useEffect, useCallback } from 'react';
import { 
  Users, 
  Mail, 
  MessageSquare, 
  TrendingUp, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Plus,
  Activity,
  DollarSign,
  UserPlus,
  Target,
  Zap
} from 'lucide-react';
import { format } from 'date-fns';
import AddClientModal from './AddClientModal';

const AdminDashboard = () => {
  const [clients, setClients] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    active: 0,
    converted: 0,
  });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedClient, setSelectedClient] = useState(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showSMSModal, setShowSMSModal] = useState(false);
  const [emailData, setEmailData] = useState({ template: 'welcome', subject: '', body: '' });
  const [smsData, setSmsData] = useState({ template: 'welcome', message: '' });
  const [showAddClientModal, setShowAddClientModal] = useState(false);

  const fetchClients = useCallback(async () => {
    try {
      const params = new URLSearchParams();
      if (statusFilter !== 'all') params.append('status', statusFilter);
      if (searchTerm) params.append('search', searchTerm);

      try {
        const response = await fetch(`/.netlify/functions/get-clients?${params}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setClients(data.clients);
          setStats(data.stats);
        } else {
          throw new Error('Failed to fetch clients');
        }
      } catch (dbError) {
        console.warn('Database fetch failed, using local storage:', dbError);
        
        // Fallback to localStorage for local development
        const localClients = JSON.parse(localStorage.getItem('localClients') || '[]');
        
        // Filter clients based on search and status
        let filteredClients = localClients;
        
        if (searchTerm) {
          filteredClients = filteredClients.filter(client => 
            client.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.company?.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        
        if (statusFilter !== 'all') {
          filteredClients = filteredClients.filter(client => client.status === statusFilter);
        }
        
        setClients(filteredClients);
        
        // Calculate stats
        const stats = {
          total: localClients.length,
          new: localClients.filter(c => c.status === 'new').length,
          active: localClients.filter(c => c.status === 'active').length,
          converted: localClients.filter(c => c.status === 'converted').length,
        };
        setStats(stats);
      }
    } catch (error) {
      console.error('Error fetching clients:', error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, statusFilter]);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  const sendEmail = async (client) => {
    try {
      try {
        const response = await fetch('/.netlify/functions/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: client.email,
            template: emailData.template,
            clientName: client.name,
            customSubject: emailData.subject,
            customBody: emailData.body,
          }),
        });

        if (response.ok) {
          alert('Email sent successfully!');
          setShowEmailModal(false);
          return;
        } else {
          throw new Error('Failed to send email');
        }
      } catch (emailError) {
        console.warn('Email service unavailable, showing preview:', emailError);
        
        // Show preview for local development
        const emailPreview = `
Email would be sent to: ${client.email}
Template: ${emailData.template}
Subject: ${emailData.subject || 'Default subject'}
Body: ${emailData.body || 'Default email content'}

(In production, this would be sent via SendGrid)
        `;
        
        alert(`Email Preview:\n\n${emailPreview}`);
        setShowEmailModal(false);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  const sendSMS = async (client) => {
    try {
      try {
        const response = await fetch('/.netlify/functions/send-sms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: client.phone,
            template: smsData.template,
            clientName: client.name,
            customMessage: smsData.message,
          }),
        });

        if (response.ok) {
          alert('SMS sent successfully!');
          setShowSMSModal(false);
          return;
        } else {
          throw new Error('Failed to send SMS');
        }
      } catch (smsError) {
        console.warn('SMS service unavailable, showing preview:', smsError);
        
        // Show preview for local development
        const smsPreview = `
SMS would be sent to: ${client.phone}
Template: ${smsData.template}
Message: ${smsData.message || 'Default SMS content'}

(In production, this would be sent via Twilio)
        `;
        
        alert(`SMS Preview:\n\n${smsPreview}`);
        setShowSMSModal(false);
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
      alert('Failed to send SMS');
    }
  };

  const updateClientStatus = async (clientId, newStatus) => {
    try {
      try {
        const response = await fetch('/.netlify/functions/update-client', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: clientId,
            status: newStatus,
          }),
        });

        if (response.ok) {
          fetchClients();
          return;
        }
      } catch (dbError) {
        console.warn('Database update failed, updating local storage:', dbError);
      }
      
      // Fallback to localStorage for local development
      const localClients = JSON.parse(localStorage.getItem('localClients') || '[]');
      const updatedClients = localClients.map(client => 
        client.id === clientId ? { ...client, status: newStatus, updated_at: new Date().toISOString() } : client
      );
      localStorage.setItem('localClients', JSON.stringify(updatedClients));
      fetchClients();
      
    } catch (error) {
      console.error('Error updating client:', error);
    }
  };

  const handleClientAdded = (newClient) => {
    // Save to localStorage for local development
    const localClients = JSON.parse(localStorage.getItem('localClients') || '[]');
    localClients.push(newClient);
    localStorage.setItem('localClients', JSON.stringify(localClients));
    
    // Refresh the client list
    fetchClients();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'converted': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your AI automation clients and campaigns</p>
            </div>
            <button 
              onClick={() => setShowAddClientModal(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus size={16} className="inline mr-2" />
              Add Client
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Clients</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">New Leads</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.new}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Clients</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.active}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Converted</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.converted}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search clients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black placeholder-gray-500"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="active">Active</option>
                  <option value="converted">Converted</option>
                </select>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Filter size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Client Management</h3>
          </div>
          <div className="overflow-x-auto">
            {clients.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <UserPlus size={32} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No clients yet</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Looks like you haven't added any clients yet. Click <strong>Add Client</strong> to get started with your first AI automation campaign!
                </p>
                <button
                  onClick={() => setShowAddClientModal(true)}
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Plus size={20} className="mr-2" />
                  Add Your First Client
                </button>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Target size={24} className="mx-auto text-indigo-600 mb-2" />
                    <h4 className="font-medium text-gray-900">Collect Client Info</h4>
                    <p className="text-sm text-gray-600">Gather contact details and business goals</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Zap size={24} className="mx-auto text-green-600 mb-2" />
                    <h4 className="font-medium text-gray-900">Setup Automation</h4>
                    <p className="text-sm text-gray-600">Configure SMS and email campaigns</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <TrendingUp size={24} className="mx-auto text-purple-600 mb-2" />
                    <h4 className="font-medium text-gray-900">Track Results</h4>
                    <p className="text-sm text-gray-600">Monitor performance and conversions</p>
                  </div>
                </div>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date Added
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clients.map((client) => (
                    <tr key={client.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{client.name || 'N/A'}</div>
                          <div className="text-sm text-gray-500">{client.email}</div>
                          {client.phone && (
                            <div className="text-sm text-gray-500">{client.phone}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{client.company || 'N/A'}</div>
                        {client.company_size && (
                          <div className="text-sm text-gray-500">{client.company_size}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(client.status)}`}>
                          {client.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {client.source}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {format(new Date(client.created_at), 'MMM dd, yyyy')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedClient(client)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedClient(client);
                              setShowEmailModal(true);
                            }}
                            className="text-green-600 hover:text-green-900"
                          >
                            <Mail size={16} />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedClient(client);
                              setShowSMSModal(true);
                            }}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <MessageSquare size={16} />
                          </button>
                          <button
                            onClick={() => updateClientStatus(client.id, 'active')}
                            className="text-purple-600 hover:text-purple-900"
                          >
                            <Edit size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Email Modal */}
      {showEmailModal && selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium mb-4">Send Email to {selectedClient.name}</h3>
            <div className="space-y-4">
              <select
                value={emailData.template}
                onChange={(e) => setEmailData({ ...emailData, template: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="welcome">Welcome Email</option>
                <option value="followUp">Follow-up Email</option>
                <option value="reminder">Reminder Email</option>
              </select>
              <input
                type="text"
                placeholder="Custom subject (optional)"
                value={emailData.subject}
                onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Custom message (optional)"
                value={emailData.body}
                onChange={(e) => setEmailData({ ...emailData, body: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg h-32"
              />
              <div className="flex space-x-2">
                <button
                  onClick={() => sendEmail(selectedClient)}
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                >
                  Send Email
                </button>
                <button
                  onClick={() => setShowEmailModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SMS Modal */}
      {showSMSModal && selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium mb-4">Send SMS to {selectedClient.name}</h3>
            <div className="space-y-4">
              <select
                value={smsData.template}
                onChange={(e) => setSmsData({ ...smsData, template: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="welcome">Welcome SMS</option>
                <option value="followUp">Follow-up SMS</option>
                <option value="reminder">Reminder SMS</option>
                <option value="appointment">Appointment SMS</option>
              </select>
              <textarea
                placeholder="Custom message (optional)"
                value={smsData.message}
                onChange={(e) => setSmsData({ ...smsData, message: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg h-32"
              />
              <div className="flex space-x-2">
                <button
                  onClick={() => sendSMS(selectedClient)}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                  Send SMS
                </button>
                <button
                  onClick={() => setShowSMSModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Client Modal */}
      <AddClientModal
        isOpen={showAddClientModal}
        onClose={() => setShowAddClientModal(false)}
        onClientAdded={handleClientAdded}
      />
    </div>
  );
};

export default AdminDashboard; 