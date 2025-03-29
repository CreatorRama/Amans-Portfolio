import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiX } from 'react-icons/fi';

const Chatbot = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (typeof message !== 'string' || !message.trim() || isLoading) return;

    // Add user message
    setConversation(prev => [...prev, { role: 'user', content: message }]);
    setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('https://contact-form-backend-k30u.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Validate response structure
      if (!data.reply || !Array.isArray(data.sources)) {
        throw new Error('Invalid response format from server');
      }

      // Transform sources to match frontend expectations
      const transformedSources = data.sources.map(source => ({
        type: source.type || 'unknown',
        category: source.category || 'general',
        content: source.text || 'No information available'
      }));

      setConversation(prev => [
        ...prev,
        { 
          role: 'bot', 
          content: data.reply,
          sources: transformedSources
        }
      ]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setConversation(prev => [
        ...prev,
        { 
          role: 'bot', 
          content: error.message.includes('Invalid response format') 
            ? "Sorry, I received an unexpected response format."
            : "Sorry, I'm having trouble connecting to the server.",
          error: true
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-80 bg-white rounded-lg shadow-xl flex flex-col border border-gray-200">
      {/* Header */}
      <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
        <h3 className="font-semibold">Portfolio Assistant</h3>
        <button 
          onClick={onClose} 
          className="text-white hover:text-blue-200 focus:outline-none"
          aria-label="Close chatbot"
        >
          <FiX size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto max-h-96">
        {conversation.length === 0 ? (
          <div className="text-center text-gray-500 py-4 text-sm">
            Ask me about my projects, skills, or experience!
          </div>
        ) : (
          conversation.map((msg, index) => (
            <div 
              key={index} 
              className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
            >
              <div className={`inline-block px-3 py-2 rounded-lg text-sm max-w-xs ${
                msg.role === 'user' 
                  ? 'bg-blue-100 text-blue-900' 
                  : msg.error
                    ? 'bg-red-100 text-red-900'
                    : 'bg-gray-100 text-gray-900'
              }`}>
                {msg.content}
              </div>
              
              {/* Sources display */}
              {msg.sources && !msg.error && (
                <div className="mt-2 text-left text-xs text-gray-600">
                  <div className="font-medium mb-1">References:</div>
                  <ul className="space-y-1">
                    {msg.sources.map((source, i) => (
                      <li key={i} className="border-l-2 border-blue-300 pl-2">
                        <span className="font-semibold capitalize">{source.type}:</span> {source.content}
                        {source.category && (
                          <span className="ml-2 text-gray-500">({source.category})</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200">
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Type your question..."
            className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            disabled={isLoading}
            aria-label="Chat input"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-2 rounded-r-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors text-sm focus:outline-none focus:ring-1 focus:ring-blue-800"
            disabled={isLoading || !message.trim()}
            aria-label="Send message"
          >
            {isLoading ? (
              <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <FiSend size={16} />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;