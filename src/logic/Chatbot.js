// src/components/Chatbot.js - Updated to use external Gemini RAG API
import React, { useState, useRef, useEffect } from 'react';

const Chatbot = ({ theme = 'web' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [apiStatus, setApiStatus] = useState('unknown'); // 'healthy', 'error', 'unknown'
    const [suggestedQuestions, setSuggestedQuestions] = useState([
        "What makes Choti unique as a candidate?",
        "Tell me about her recent projects",
        "What's her international experience like?",
        "How can I get in touch with her?"
    ]);
    const messagesEndRef = useRef(null);
    const API_BASE_URL = process.env.REACT_APP_API_URL

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Check API health when component mounts
    useEffect(() => {
        const checkApiHealth = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/health`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });
                setApiStatus(response.ok ? 'healthy' : 'error');
            } catch (error) {
                console.warn('API health check failed:', error);
                setApiStatus('error');
            }
        };

        checkApiHealth();
    }, [API_BASE_URL]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const welcomeMessage = apiStatus === 'error'
                ? '🤖 Hey! I\'m Choti\'s career agent, but I\'m having some connection issues right now. You can still check out her portfolio at https://jgchoti.vercel.app/ or try again in a moment!'
                : '🤖 Hey! I\'m Choti\'s career agent. She\'s a curious learner and has built some fascinating projects. Whether you\'re hiring, collaborating, or just want to chat about her journey, I\'m here to connect you. What interests you most?';

            setMessages([{
                type: 'bot',
                content: welcomeMessage
            }]);
        }
    }, [isOpen, apiStatus]);

    const addMessage = (type, content) => {
        setMessages(prev => [...prev, { type, content }]);
    };

    // Enhanced sendMessage with external Gemini RAG API
    const sendMessage = async (overrideMessage) => {
        const messageToSend = overrideMessage || inputValue.trim();
        if (!messageToSend) return;

        addMessage('user', messageToSend);
        setInputValue('');
        setIsTyping(true);

        try {
            console.log('📡 Sending request to Gemini API:', `${API_BASE_URL}/api/chat-rag-gemini`);

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

            const response = await fetch(`${API_BASE_URL}/api/chat-rag-gemini`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: messageToSend,
                    conversationHistory: messages.slice(-6) // Last 3 exchanges for context
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            console.log('📡 Gemini API response status:', response.status);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `HTTP ${response.status}`);
            }

            const data = await response.json();
            setIsTyping(false);

            if (data.response) {
                addMessage('bot', data.response);
                console.log('✅ Response received from Gemini API:', data.metadata);
                setApiStatus('healthy');
            } else {
                throw new Error('No response in API data');
            }

        } catch (error) {
            console.error('❌ Gemini API Error:', error);
            setIsTyping(false);
            setApiStatus('error');

            let errorMessage = 'Sorry, I\'m having trouble connecting. ';

            if (error.name === 'AbortError') {
                errorMessage += 'The request timed out. Please try a shorter question.';
            } else if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
                errorMessage += 'Please check your internet connection and try again.';
            } else if (error.message.includes('429')) {
                errorMessage += 'I\'m getting too many requests right now. Please try again in a minute.';
            } else if (error.message.includes('500')) {
                errorMessage += 'There\'s a temporary server issue. Please try again shortly.';
            } else if (error.message.includes('401')) {
                errorMessage += 'There\'s an authentication issue. Please try again later.';
            } else {
                errorMessage += 'Please try again in a moment, or check out her portfolio directly at https://jgchoti.vercel.app/';
            }

            addMessage('bot', errorMessage);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const formatMessage = (content) => {
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/(jgchotirat@gmail\.com)/g, '<a href="mailto:$1" class="text-primary" target="_blank" rel="noopener noreferrer">$1</a>')
            .replace(/(https?:\/\/[^\s<>\)]+)(?=[\s<>\)\.\!,]|$)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-primary">$1</a>');
    };

    return (
        <>
            <div className="chatbot-container position-fixed" style={{ bottom: '20px', right: '20px', zIndex: 9999 }}>
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="btn chatbot-btn rounded-pill px-4 py-3 fw-bold d-flex align-items-center gap-2 shadow-lg"
                        style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            border: 'none',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span>💼</span>
                        <span>Choti's Agent</span>
                        {apiStatus === 'error' && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                !
                            </span>
                        )}
                    </button>
                )}

                {isOpen && (
                    <div className="chatbot-window rounded shadow-lg d-flex flex-column"
                        style={{
                            width: '350px',
                            height: '500px',
                            background: 'white',
                            border: '1px solid #e0e0e0'
                        }}>

                        {/* Header */}
                        <div className="chatbot-header rounded-top p-3 d-flex justify-content-between align-items-center"
                            style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white'
                            }}>
                            <div>
                                <h6 className="mb-0 fw-bold">💼 Choti's Career Agent</h6>
                                <small className="opacity-75 d-flex align-items-center gap-1">
                                    {apiStatus === 'healthy' && <span className="text-success">●</span>}
                                    {apiStatus === 'error' && <span className="text-warning">●</span>}
                                    {apiStatus === 'unknown' && <span className="text-secondary">●</span>}
                                    Powered by Gemini AI
                                </small>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="btn btn-sm text-white opacity-75 hover-opacity-100"
                                style={{
                                    background: 'rgba(255,255,255,0.2)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px'
                                }}
                            >
                                ×
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="chatbot-messages flex-grow-1 p-3 overflow-auto"
                            style={{ backgroundColor: '#f8f9fa' }}>
                            {messages.map((message, index) => (
                                <div key={index} className={`mb-3 ${message.type === 'user' ? 'text-end' : ''}`}>
                                    <div
                                        className={`d-inline-block px-3 py-2 rounded small ${message.type === 'user'
                                            ? 'text-white rounded-bottom-start-0'
                                            : 'bg-white rounded-bottom-end-0 shadow-sm'
                                            }`}
                                        style={{
                                            maxWidth: '85%',
                                            wordBreak: 'break-word',
                                            overflowWrap: 'break-word',
                                            hyphens: 'auto',
                                            background: message.type === 'user'
                                                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                                                : 'white',
                                            border: message.type === 'bot' ? '1px solid #e0e0e0' : 'none'
                                        }}
                                        dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                                    />
                                </div>
                            ))}

                            {isTyping && (
                                <div className="mb-3">
                                    <div className="bg-white d-inline-block px-3 py-2 rounded shadow-sm border">
                                        <div className="d-flex gap-1 align-items-center">
                                            <div className="typing-dot bg-secondary rounded-circle"
                                                style={{
                                                    width: '8px',
                                                    height: '8px',
                                                    animation: 'typing 1.4s infinite ease-in-out'
                                                }}></div>
                                            <div className="typing-dot bg-secondary rounded-circle"
                                                style={{
                                                    width: '8px',
                                                    height: '8px',
                                                    animation: 'typing 1.4s infinite ease-in-out 0.2s'
                                                }}></div>
                                            <div className="typing-dot bg-secondary rounded-circle"
                                                style={{
                                                    width: '8px',
                                                    height: '8px',
                                                    animation: 'typing 1.4s infinite ease-in-out 0.4s'
                                                }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggested Questions */}
                        <div className="p-3 border-top bg-white">
                            {suggestedQuestions.length > 0 && (
                                <div className="mb-2 d-flex flex-wrap gap-2">
                                    {suggestedQuestions.map((question, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                setSuggestedQuestions(prev => prev.filter((_, i) => i !== idx));
                                                sendMessage(question);
                                            }}
                                            className="btn btn-outline-secondary btn-sm rounded-pill"
                                            style={{ fontSize: '0.75rem' }}
                                            disabled={isTyping || apiStatus === 'error'}
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Input Area */}
                            <div className="d-flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder={apiStatus === 'error' ? 'Service temporarily unavailable...' : 'Ask about this candidate...'}
                                    className="form-control rounded-pill"
                                    style={{
                                        border: '2px solid #e0e0e0',
                                        fontSize: '0.9rem'
                                    }}
                                    disabled={isTyping || apiStatus === 'error'}
                                />
                                <button
                                    onClick={() => sendMessage()}
                                    className="btn rounded-circle d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        background: isTyping || apiStatus === 'error'
                                            ? '#6c757d'
                                            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        color: 'white',
                                        border: 'none'
                                    }}
                                    disabled={isTyping || !inputValue.trim() || apiStatus === 'error'}
                                >
                                    {isTyping ? '...' : '➤'}
                                </button>
                            </div>

                            {/* API Status Indicator */}
                            {apiStatus === 'error' && (
                                <div className="mt-2 text-center">
                                    <small className="text-muted">
                                        🔄 <a href="https://jgchoti.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Visit portfolio directly</a>
                                    </small>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Add CSS animation for typing dots */}
            <style jsx>{`
                @keyframes typing {
                    0%, 60%, 100% {
                        transform: translateY(0);
                        opacity: 0.4;
                    }
                    30% {
                        transform: translateY(-10px);
                        opacity: 1;
                    }
                }
                
                .chatbot-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3) !important;
                }

                .chatbot-window {
                    animation: slideUp 0.3s ease-out;
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
};

export default Chatbot;