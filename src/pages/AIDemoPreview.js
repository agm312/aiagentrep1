import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';

const demoTypes = {
  standard: { name: 'Standard Chat', icon: '💬', bgColor: 'bg-green-500' },
  website: { name: 'Website Widget', icon: '🖥️', bgColor: 'bg-blue-500' },
  sms: { name: 'SMS Chat', icon: '📱', bgColor: 'bg-green-600' },
  messenger: { name: 'Messenger', icon: '📘', bgColor: 'bg-blue-600' },
  instagram: { name: 'Instagram DM', icon: '📷', bgColor: 'bg-pink-500' },
};

// Utility function to safely encode/decode Unicode strings for base64
const safeBase64Encode = (str) => {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch (error) {
    console.error('Error encoding string:', error);
    return btoa(str); // Fallback to direct encoding
  }
};

const safeBase64Decode = (str) => {
  try {
    return decodeURIComponent(escape(atob(str)));
  } catch (error) {
    console.error('Error decoding string:', error);
    return atob(str); // Fallback to direct decoding
  }
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-400 mb-4">There was an error loading the demo preview.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Website Widget Component
const WebsiteWidget = ({ config, messages, inputMessage, setInputMessage, handleSendMessage, handleKeyPress, isTyping }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showWelcome, setShowWelcome] = useState(config.showWelcomeMessage);

  useEffect(() => {
    if (config.showWelcomeMessage && config.welcomePopupDelay) {
      const timer = setTimeout(() => setShowWelcome(true), config.welcomePopupDelay * 1000);
      return () => clearTimeout(timer);
    }
  }, [config.showWelcomeMessage, config.welcomePopupDelay]);

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg"
          style={{ backgroundColor: config.themeColor || '#52c4a0' }}
          onClick={() => setIsMinimized(false)}
        >
          {config.logoUrl ? (
            <img 
              src={config.logoUrl} 
              alt="Logo" 
              className="w-full h-full rounded-full object-contain"
              style={{
                transform: `scale(${config.logoScale || 1.0}) translate(${config.logoPositionX || 0}px, ${config.logoPositionY || 0}px)`,
                backgroundColor: config.logoBackgroundColor || '#ffffff'
              }}
            />
          ) : config.avatarUrl ? (
            <img src={config.avatarUrl} alt="AI Avatar" className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="text-2xl">💬</span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Welcome Popup */}
      {showWelcome && config.showWelcomeMessage && (
        <div className="mb-4 bg-white rounded-lg shadow-xl p-4 max-w-xs">
          <div className="flex items-start gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 overflow-hidden"
              style={{ backgroundColor: config.logoUrl ? (config.logoBackgroundColor || '#ffffff') : (config.themeColor || '#52c4a0') }}
            >
              {config.logoUrl ? (
                <img 
                  src={config.logoUrl} 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                  style={{
                    transform: `scale(${config.logoScale || 1.0}) translate(${config.logoPositionX || 0}px, ${config.logoPositionY || 0}px)`
                  }}
                />
              ) : config.avatarUrl ? (
                <img src={config.avatarUrl} alt="AI Avatar" className="w-full h-full rounded-full object-cover" />
              ) : (
                <span>💬</span>
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800 mb-2">{config.welcomeMessage || "Hello! How can I help you today?"}</p>
              <button 
                onClick={() => setShowWelcome(false)}
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Widget */}
      <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
        {/* Header */}
        <div 
          className="flex items-center justify-between p-4 rounded-t-lg text-white"
          style={{ backgroundColor: config.themeColor || '#52c4a0' }}
        >
          <div className="flex items-center gap-3">
            {config.logoUrl ? (
              <div 
                className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: config.logoBackgroundColor || '#ffffff' }}
              >
                <img 
                  src={config.logoUrl} 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                  style={{
                    transform: `scale(${config.logoScale || 1.0}) translate(${config.logoPositionX || 0}px, ${config.logoPositionY || 0}px)`
                  }}
                />
              </div>
            ) : config.avatarUrl ? (
              <img src={config.avatarUrl} alt="AI Avatar" className="w-8 h-8 rounded-full object-cover" />
            ) : (
              <span className="text-xl">💬</span>
            )}
            <div>
              <h3 className="font-semibold text-sm">{config.demoName || 'AI Assistant'}</h3>
              <p className="text-xs opacity-90">Online</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsMinimized(true)}
              className="text-white hover:opacity-80"
            >
              <span className="text-lg">−</span>
            </button>
            <button className="text-white hover:opacity-80">
              <span className="text-lg">×</span>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-black'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-black px-3 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={isTyping || !inputMessage.trim()}
              className="text-white px-3 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: config.themeColor || '#52c4a0' }}
            >
              <span className="text-sm">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Instagram DM Component
const InstagramDM = ({ config, messages, inputMessage, setInputMessage, handleSendMessage, handleKeyPress, isTyping }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg w-96 h-[600px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
               style={{ 
                 background: config.logoUrl ? 'none' : 'linear-gradient(to right, #8b5cf6, #ec4899)',
                 backgroundColor: config.logoUrl ? (config.logoBackgroundColor || '#ffffff') : 'transparent'
               }}>
            {config.logoUrl ? (
              <img 
                src={config.logoUrl} 
                alt="Logo" 
                className="w-full h-full object-contain"
                style={{
                  transform: `scale(${config.logoScale || 1.0}) translate(${config.logoPositionX || 0}px, ${config.logoPositionY || 0}px)`
                }}
              />
            ) : config.avatarUrl ? (
              <img src={config.avatarUrl} alt="AI Avatar" className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-lg">📷</span>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{config.demoName || 'AI Assistant'}</h3>
            <p className="text-xs text-gray-500">Active now</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="text-gray-600 hover:text-gray-800">
            <span className="text-lg">📞</span>
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <span className="text-lg">📹</span>
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <span className="text-lg">ℹ️</span>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-black border border-gray-200'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-black px-4 py-2 rounded-2xl border border-gray-200">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <button className="text-gray-600 hover:text-gray-800">
            <span className="text-xl">📎</span>
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Message..."
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isTyping}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={isTyping || !inputMessage.trim()}
            className="text-white p-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: config.themeColor || '#52c4a0' }}
          >
            <span className="text-sm">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// SMS Chat Component
const SMSChat = ({ config, messages, inputMessage, setInputMessage, handleSendMessage, handleKeyPress, isTyping }) => {
  return (
    <div className="bg-gray-100 rounded-xl shadow-lg w-80 h-[600px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white rounded-t-xl border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
               style={{ backgroundColor: config.logoUrl ? (config.logoBackgroundColor || '#ffffff') : '#10b981' }}>
            {config.logoUrl ? (
              <img 
                src={config.logoUrl} 
                alt="Logo" 
                className="w-full h-full object-contain"
                style={{
                  transform: `scale(${config.logoScale || 1.0}) translate(${config.logoPositionX || 0}px, ${config.logoPositionY || 0}px)`
                }}
              />
            ) : config.avatarUrl ? (
              <img src={config.avatarUrl} alt="AI Avatar" className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-lg">📱</span>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{config.demoName || 'AI Assistant'}</h3>
            <p className="text-xs text-gray-500">Mobile</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="text-gray-600 hover:text-gray-800">
            <span className="text-lg">📞</span>
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <span className="text-lg">📹</span>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                message.sender === 'user'
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-black shadow-sm'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-black px-4 py-2 rounded-2xl shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-white rounded-b-xl border-t border-gray-200">
        <div className="flex items-center gap-3">
          <button className="text-gray-600 hover:text-gray-800">
            <span className="text-xl">📎</span>
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="iMessage"
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled={isTyping}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={isTyping || !inputMessage.trim()}
            className="text-white p-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: config.themeColor || '#52c4a0' }}
          >
            <span className="text-sm">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Messenger Component
const MessengerChat = ({ config, messages, inputMessage, setInputMessage, handleSendMessage, handleKeyPress, isTyping }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg w-96 h-[600px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
               style={{ backgroundColor: config.logoUrl ? (config.logoBackgroundColor || '#ffffff') : '#3b82f6' }}>
            {config.logoUrl ? (
              <img 
                src={config.logoUrl} 
                alt="Logo" 
                className="w-full h-full object-contain"
                style={{
                  transform: `scale(${config.logoScale || 1.0}) translate(${config.logoPositionX || 0}px, ${config.logoPositionY || 0}px)`
                }}
              />
            ) : config.avatarUrl ? (
              <img src={config.avatarUrl} alt="AI Avatar" className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-lg">📘</span>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{config.demoName || 'AI Assistant'}</h3>
            <p className="text-xs text-gray-500">Active now</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="text-gray-600 hover:text-gray-800">
            <span className="text-lg">📞</span>
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <span className="text-lg">📹</span>
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <span className="text-lg">ℹ️</span>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-black shadow-sm'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-black px-4 py-2 rounded-2xl shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <button className="text-gray-600 hover:text-gray-800">
            <span className="text-xl">😊</span>
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <span className="text-xl">📎</span>
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isTyping}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={isTyping || !inputMessage.trim()}
            className="text-white p-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: config.themeColor || '#52c4a0' }}
          >
            <span className="text-sm">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Standard Chat Component
const StandardChat = ({ config, messages, inputMessage, setInputMessage, handleSendMessage, handleKeyPress, isTyping }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 h-96 flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-700">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white overflow-hidden`} 
             style={{ backgroundColor: config.logoUrl ? (config.logoBackgroundColor || '#ffffff') : (config.themeColor || '#52c4a0') }}>
          {config.logoUrl ? (
            <img 
              src={config.logoUrl} 
              alt="Logo" 
              className="w-full h-full object-contain"
              style={{
                transform: `scale(${config.logoScale || 1.0}) translate(${config.logoPositionX || 0}px, ${config.logoPositionY || 0}px)`
              }}
            />
          ) : config.avatarUrl ? (
            <img src={config.avatarUrl} alt="AI Avatar" className="w-full h-full rounded-full object-cover" />
          ) : (
            <span>💬</span>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-white">{config.demoName || 'AI Assistant'}</h3>
          <p className="text-sm text-gray-400">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-700 text-white'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-white px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={config.inputPlaceholder || "Type your message..."}
          className="flex-1 bg-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          disabled={isTyping}
        />
        <button
          onClick={handleSendMessage}
          disabled={isTyping || !inputMessage.trim()}
          className="text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ 
            backgroundColor: config.themeColor || '#52c4a0',
            ':hover': { backgroundColor: config.themeColor ? `${config.themeColor}dd` : '#52c4a0dd' }
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default function AIDemoPreview() {
  const { demoType } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Load config from URL parameters or state
  const [config, setConfig] = useState(location.state?.config || {});
  
  // Add state for current demo type that can be changed
  const [currentDemoType, setCurrentDemoType] = useState(demoType);
  
  // Load configuration from URL parameters if available
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedConfig = urlParams.get('config');
    
    if (encodedConfig && !location.state?.config) {
      try {
        const decodedConfig = safeBase64Decode(encodedConfig);
        const parsedConfig = JSON.parse(decodedConfig);
        setConfig(parsedConfig);
      } catch (error) {
        console.error('Error decoding config from URL:', error);
      }
    }
  }, [location.state?.config]);
  
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: config.welcomeMessage || "👋 Hi there! You've reached HHI Intermodal's AI Assistant. How can I help you today?\n1️⃣ Check yard status\n2️⃣ Schedule a spotter\n3️⃣ Get train ETA\n4️⃣ Talk to a dispatcher", 
      sender: 'ai', 
      timestamp: new Date() 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [demoLink, setDemoLink] = useState('');
  const [bookingState, setBookingState] = useState({
    hasAskedForServices: false,
    hasPhoneNumber: false,
    hasScheduledTime: false,
    phoneNumber: '',
    scheduledTime: ''
  });

  // Generate demo link
  useEffect(() => {
    try {
      const baseUrl = window.location.origin;
      // Properly encode Unicode characters for base64
      const configString = JSON.stringify(config);
      const encodedConfig = safeBase64Encode(configString);
      setDemoLink(`${baseUrl}/ai-demo-preview/${currentDemoType}?demo=true&config=${encodedConfig}`);
    } catch (error) {
      console.error('Error generating demo link:', error);
      setDemoLink(`${window.location.origin}/ai-demo-preview/${currentDemoType}`);
    }
  }, [currentDemoType, config]);

  // Handle demo type change
  const handleDemoTypeChange = (newDemoType) => {
    setCurrentDemoType(newDemoType);
    // Update URL without navigation
    window.history.replaceState(null, '', `/ai-demo-preview/${newDemoType}`);
  };

  // Generate AI response based on configuration
  const generateAIResponse = (userMessage) => {
    const { 
      extractedCompanyData, 
      temperature, 
      topP, 
      selectedModel,
      rulesGuidelines
    } = config;
    
    const message = userMessage.toLowerCase().trim();
    
    // Intermodal Logistics Conversation Flow
    // Check for main menu options (1, 2, 3, 4)
    if (message === '1' || message.includes('yard status') || message.includes('check yard')) {
      return "📍 Sure — please reply with the yard location code (e.g., 'YYZ‑West', 'CHI‑East').";
    }
    
    if (message === '2' || message.includes('schedule spotter') || message.includes('book spotter')) {
      return "📆 Got it—what date and time do you need a spotter? (e.g., 'Tomorrow 14:00')";
    }
    
    if (message === '3' || message.includes('eta') || message.includes('train eta')) {
      return "🚂 Please send me the train number or container ID.";
    }
    
    if (message === '4' || message.includes('dispatcher') || message.includes('human')) {
      return "🔗 Connecting you to a live dispatcher now. Please hold…";
    }
    
    // Handle yard status responses
    if (message.includes('yyz') || message.includes('chi') || message.includes('west') || message.includes('east')) {
      const yardCode = message.toUpperCase();
      const openSpots = Math.floor(Math.random() * 15) + 5; // Random number of open spots
      return `✅ Yard ${yardCode} is clear for spotting. You have ${openSpots} open spots. Anything else?\n• Reply 2 to schedule a spotter\n• Reply 3 for train ETA\n• Reply 4 to talk to a dispatcher`;
    }
    
    // Handle spotter scheduling
    if (message.includes('tomorrow') || message.includes('today') || /\d{4}-\d{2}-\d{2}/.test(message) || /\d{1,2}:\d{2}/.test(message)) {
      const time = message.includes('tomorrow') ? 'Tomorrow' : message.includes('today') ? 'Today' : message;
      return `👍 Your spotter is booked for ${time} at ${extractedCompanyData?.companyName || 'HHI'} yard. Need anything else?\n• 1: Yard status  • 3: Train ETA  • 4: Dispatcher`;
    }
    
    // Handle train ETA responses
    if (/^\d{5}$/.test(message) || /^[A-Z]{3}\d{3}$/.test(message)) {
      const trainNum = message;
      const etaHours = Math.floor(Math.random() * 8) + 2;
      const etaMinutes = Math.floor(Math.random() * 60);
      const eta = `${etaHours}h ${etaMinutes}m`;
      return `📊 Train ${trainNum} is en route, arriving in ${eta}. Would you like to schedule off‑loading or spotter service? Reply 2 to schedule.`;
    }
    
    // Fallback for unrecognized responses
    return "❓ Sorry, I didn't get that. Reply with:\n1 for yard status\n2 to schedule a spotter\n3 for train ETA\n4 to talk to a dispatcher";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim() || isTyping) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response with typing indicator
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: generateAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleShareDemo = async () => {
    try {
      await navigator.clipboard.writeText(demoLink);
      alert('Demo link copied to clipboard!');
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = demoLink;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Demo link copied to clipboard!');
    }
  };

  const handleDownloadCode = () => {
    try {
      const codeSnippet = `// AI Chatbot Integration Code
// Demo Type: ${demoTypes[currentDemoType]?.name}
// Configuration: ${JSON.stringify(config, null, 2)}

const chatbotConfig = {
  demoType: '${currentDemoType}',
  aiDescription: '${config.aiDescription || ''}',
  languageInstructions: '${config.languageInstructions || ''}',
  conversationFlow: '${config.conversationFlow || ''}',
  rulesGuidelines: '${config.rulesGuidelines || ''}',
  companyInfo: '${config.companyInfo || ''}'
};

// Integration code would be generated here based on the demo type
console.log('Chatbot configuration loaded:', chatbotConfig);`;

      const blob = new Blob([codeSnippet], { type: 'text/javascript' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ai-chatbot-${currentDemoType}-config.js`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading code:', error);
      alert('Failed to download code. Please try again.');
    }
  };

  const handleEditConfig = () => {
    navigate(`/ai-demo-config/${currentDemoType}`, { 
      state: { config } 
    });
  };

  // Render the appropriate demo interface based on type
  const renderDemoInterface = () => {
    const commonProps = {
      config,
      messages,
      inputMessage,
      setInputMessage,
      handleSendMessage,
      handleKeyPress,
      isTyping
    };

    switch (currentDemoType) {
      case 'website':
        return <WebsiteWidget {...commonProps} />;
      case 'instagram':
        return <InstagramDM {...commonProps} />;
      case 'sms':
        return <SMSChat {...commonProps} />;
      case 'messenger':
        return <MessengerChat {...commonProps} />;
      default:
        return <StandardChat {...commonProps} />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link to="/ai-demo-config/standard" className="text-teal-400 hover:text-teal-300 mb-4 inline-block">
              ← Back to Configuration
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{demoTypes[currentDemoType]?.icon}</span>
              <h1 className="text-4xl font-bold">AI Demo Preview</h1>
            </div>
            <p className="text-gray-400">Preview your {demoTypes[currentDemoType]?.name} AI chatbot</p>
          </div>

          {/* Demo Type Switcher */}
          <div className="mb-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Switch Demo Type</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {Object.entries(demoTypes).map(([type, info]) => (
                  <button
                    key={type}
                    onClick={() => handleDemoTypeChange(type)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-200 ${
                      currentDemoType === type
                        ? 'bg-teal-500 text-white shadow-lg scale-105'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                  >
                    <span className="text-2xl">{info.icon}</span>
                    <span className="text-sm font-medium text-center">{info.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Demo Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <div className="flex justify-center">
                {renderDemoInterface()}
              </div>
            </div>

            {/* Demo Info */}
            <div className="space-y-6">
              {/* Demo Type Info */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Demo Type</h3>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${demoTypes[currentDemoType]?.bgColor} rounded-lg flex items-center justify-center text-2xl`}>
                    {demoTypes[currentDemoType]?.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{demoTypes[currentDemoType]?.name}</h4>
                    <p className="text-sm text-gray-400">Active Demo</p>
                  </div>
                </div>
              </div>

              {/* Configuration Summary */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Configuration</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-400">Demo Name:</p>
                    <p className="text-xs">{config.demoName || 'AI Assistant'}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">AI Model:</p>
                    <p className="text-xs">{config.selectedModel || 'GPT-4o'}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Theme Color:</p>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: config.themeColor || '#52c4a0' }}></div>
                      <p className="text-xs">{config.themeColor || '#52c4a0'}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400">Theme Mode:</p>
                    <p className="text-xs capitalize">{config.themeMode || 'dark'}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Welcome Message:</p>
                    <p className="text-xs">{config.showWelcomeMessage ? 'Enabled' : 'Disabled'}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Company Data:</p>
                    <p className="text-xs">
                      {config.extractedCompanyData?.services?.length > 0 
                        ? `${config.extractedCompanyData.services.length} services extracted`
                        : 'No company data extracted'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Actions</h3>
                <div className="space-y-3">
                  <button 
                    onClick={handleShareDemo}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Share Demo Link
                  </button>
                  <button 
                    onClick={handleDownloadCode}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Download Code
                  </button>
                  <button 
                    onClick={handleEditConfig}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Edit Configuration
                  </button>
                </div>
              </div>

              {/* Demo Link */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Demo Link</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={demoLink}
                    readOnly
                    className="w-full bg-gray-700 rounded-lg px-3 py-2 text-xs text-gray-300"
                  />
                  <p className="text-xs text-gray-400">
                    Share this link with potential clients to showcase your AI chatbot demo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
} 