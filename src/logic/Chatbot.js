import React, { useState, useRef, useEffect } from 'react';

const Chatbot = ({ theme = 'web' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalMode, setIsModalMode] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [apiStatus, setApiStatus] = useState('unknown');
    const [suggestedQuestions, setSuggestedQuestions] = useState([
        "What makes her unique as a candidate?",
        "Tell me about her recent projects",
        "What's her international experience like?",
    ]);
    const messagesEndRef = useRef(null);

    const getApiUrl = () => {
        if (window.location.hostname === 'localhost') {
            return 'http://localhost:3000';
        }
        if (window.location.hostname === 'jgchoti.github.io') {
            return 'https://jgchoti-api.vercel.app';
        }
        return process.env.REACT_APP_API_URL || 'https://jgchoti-api.vercel.app';
    };

    const API_BASE_URL = getApiUrl();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);


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
                ? '🤖 Hey! I\'m Choti\'s career agent, but I\'m having some connection issues right now. You can still check out her portfolio at https://jgchoti.github.io/ or try again in a moment!'
                : '🤖 Hey! I\'m Choti\'s career agent. She\'s a curious learner with exciting projects.✨ Are you hiring, collaborating, or curious about her journey? I\'d love to hear what interests you ';
            setMessages([{ type: 'bot', content: welcomeMessage }]);
        }
    }, [isOpen, apiStatus]);

    const addMessage = (type, content) => {
        setMessages(prev => [...prev, { type, content }]);
    };

    const sendMessage = async (overrideMessage) => {
        const messageToSend = overrideMessage || inputValue.trim();
        if (!messageToSend) return;

        addMessage('user', messageToSend);
        setInputValue('');
        setIsTyping(true);

        try {
            console.log('Sending request:', `${API_BASE_URL}/api/chat-rag`);
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000);

            const response = await fetch(`${API_BASE_URL}/api/chat-rag`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: messageToSend,
                    conversationHistory: messages.slice(-6)
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            console.log('API response status:', response.status);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `HTTP ${response.status}`);
            }

            const data = await response.json();
            setIsTyping(false);

            if (data.response) {
                addMessage('bot', data.response);
                console.log('Response received from Gemini API:', data.metadata);
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
                errorMessage += 'Please try again in a moment, or check out her portfolio directly at https://jgchoti.github.io/';
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
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary">$1</a>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/(jgchotirat@gmail\.com)/g, '<a href="mailto:$1" class="text-primary" target="_blank" rel="noopener noreferrer">$1</a>')
            .replace(/(?<!href=["'])(?<!<a[^>]*>)(https?:\/\/[^\s<>]+?)(?=[\s<>]|[\.\!\?,;:](?:\s|$)|$)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-primary">$1</a>')
            .replace(/\]\(/g, '')
            .replace(/\[([^\]]*)\]/g, '$1');
    };

    const openModal = () => {
        setIsModalMode(true);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsModalMode(false);
        setIsOpen(false);
    };

    const ChatContent = () => (
        <>
            <div className={`chatbot-header ${isModalMode ? 'modal-header' : ''} rounded-top p-3 d-flex justify-content-between align-items-center`}>
                <div>
                    <h6 className="mb-0 fw-bold">💼 Choti's Agent</h6>
                    <small className="opacity-75 d-flex align-items-center gap-1">
                        <span className={`api-status-${apiStatus}`}>●</span>
                        Powered by Gemini AI
                    </small>
                </div>
                <div className="d-flex align-items-center gap-2">
                    {/* Mode toggle button - only show in corner mode */}
                    {!isModalMode && (
                        <button
                            onClick={openModal}
                            className="btn btn-sm text-white opacity-75 hover-opacity-100"
                            title="Open in full screen"
                        >
                            ⛶
                        </button>
                    )}
                    <button
                        onClick={isModalMode ? closeModal : () => setIsOpen(false)}
                        className="btn btn-sm text-white opacity-75 hover-opacity-100 close-btn"
                    >
                        x
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className={`chatbot-messages ${isModalMode ? 'modal-messages' : ''} flex-grow-1 p-3 overflow-auto`}>
                {messages.map((message, index) => (
                    <div key={index} className={`mb-3 ${message.type === 'user' ? 'message-user' : 'message-bot'}`}>
                        <div
                            className={`d-inline-block px-3 py-2 rounded small message-content ${message.type === 'user'
                                ? 'user-message rounded-bottom-start-0'
                                : 'bot-message rounded-bottom-end-0 shadow-sm'
                                }`}
                            dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                        />
                    </div>
                ))}
                {isTyping && (
                    <div className="mb-3">
                        <div className="typing-indicator d-inline-block px-3 py-2 rounded">
                            <div className="d-flex gap-1 align-items-center">
                                <div className="typing-dot bg-secondary rounded-circle"></div>
                                <div className="typing-dot bg-secondary rounded-circle"></div>
                                <div className="typing-dot bg-secondary rounded-circle"></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className={`input-area ${isModalMode ? 'modal-input' : ''} p-3`}>
                {suggestedQuestions.length > 0 && (
                    <div className="mb-2 d-flex flex-wrap gap-2">
                        {suggestedQuestions.map((question, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setSuggestedQuestions(prev => prev.filter((_, i) => i !== idx));
                                    sendMessage(question);
                                }}
                                className="btn btn-outline-secondary btn-sm rounded-pill suggested-question"
                                disabled={isTyping || apiStatus === 'error'}
                            >
                                {question}
                            </button>
                        ))}
                    </div>
                )}
                <div className="d-flex gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder={apiStatus === 'error' ? 'Service temporarily unavailable...' : 'Ask about Choti...'}
                        className="form-control chatbot-input rounded-pill"
                        disabled={isTyping || apiStatus === 'error'}
                    />
                    <button
                        onClick={() => sendMessage()}
                        className="btn send-btn rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '45px', height: '45px' }}
                        disabled={isTyping || !inputValue.trim() || apiStatus === 'error'}
                    >
                        {isTyping ? '...' : '➤'}
                    </button>
                </div>
            </div>
        </>
    );

    return (
        <>
            <div className="chatbot-container">
                {!isOpen && (
                    <div className="d-flex flex-column gap-2 align-items-end">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="btn chatbot-btn rounded-pill px-4 py-3 fw-bold d-flex align-items-center gap-2 shadow-lg"
                        >
                            <span>💼</span>
                            <span>Choti's Agent</span>
                            {apiStatus === 'error' && (
                                <span className="error-badge badge rounded-pill bg-warning">!</span>
                            )}
                        </button>

                    </div>
                )}

                {/* Corner chat window */}
                {isOpen && !isModalMode && (
                    <div className="chatbot-window rounded shadow-lg d-flex flex-column">
                        <ChatContent />
                    </div>
                )}
            </div >

            {
                isModalMode && (
                    <div className="chatbot-modal-overlay">
                        <div className="chatbot-modal">
                            <ChatContent />
                        </div>
                    </div>
                )
            }

        </>
    );
};

export default Chatbot;