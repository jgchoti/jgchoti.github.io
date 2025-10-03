import React, { useState, useRef, useEffect, useCallback } from 'react';

const Chatbot = () => {
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
    const inputRef = useRef(null);

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

    const addMessage = useCallback((type, content) => {
        setMessages(prev => [...prev, { type, content }]);
        return { type, content };
    }, []);

    const sendMessage = useCallback(async (overrideMessage) => {
        const messageToSend = overrideMessage || inputValue.trim();
        if (!messageToSend) return;

        const userMessage = { type: 'user', content: messageToSend };

        addMessage('user', messageToSend);
        setInputValue('');
        setIsTyping(true);

        try {
            const conversationHistory = [...messages, userMessage].slice(-6);
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000);

            const response = await fetch(`${API_BASE_URL}/api/chat-rag`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: messageToSend,
                    conversationHistory: conversationHistory
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
    }, [inputValue, addMessage, messages, API_BASE_URL]);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!isTyping && inputValue.trim() && apiStatus !== 'error') {
                sendMessage();
            }
        }
    }, [isTyping, inputValue, apiStatus, sendMessage]);

    const handleInputChange = useCallback((e) => {
        setInputValue(e.target.value);
    }, []);

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

    const openModal = useCallback(() => {
        setIsModalMode(true);
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalMode(false);
        setIsOpen(false);
    }, []);

    const handleSuggestedQuestion = useCallback((question, index) => {
        setSuggestedQuestions(prev => prev.filter((_, i) => i !== index));
        sendMessage(question);
    }, [sendMessage]);

    return (
        <>
            <div className="chatbot-container">
                {!isOpen && (
                    <div className="d-flex flex-column gap-2 align-items-end">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="btn chatbot-btn rounded-pill px-4 py-3 fw-bold d-flex align-items-center gap-2 shadow-lg position-relative"
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
                        <ChatContent
                            isModalMode={isModalMode}
                            apiStatus={apiStatus}
                            openModal={openModal}
                            closeModal={closeModal}
                            setIsOpen={setIsOpen}
                            messages={messages}
                            isTyping={isTyping}
                            messagesEndRef={messagesEndRef}
                            formatMessage={formatMessage}
                            suggestedQuestions={suggestedQuestions}
                            handleSuggestedQuestion={handleSuggestedQuestion}
                            inputRef={inputRef}
                            inputValue={inputValue}
                            handleInputChange={handleInputChange}
                            handleKeyDown={handleKeyDown}
                            sendMessage={sendMessage}
                        />
                    </div>
                )}
            </div>

            {/* Modal overlay */}
            {isModalMode && (
                <div className="chatbot-modal-overlay">
                    <div className="chatbot-modal" style={{
                        background: 'var(--main-bg-color, white)',
                        border: '1px solid var(--primary-color, #667eea)'
                    }}>
                        <ChatContent
                            isModalMode={isModalMode}
                            apiStatus={apiStatus}
                            openModal={openModal}
                            closeModal={closeModal}
                            setIsOpen={setIsOpen}
                            messages={messages}
                            isTyping={isTyping}
                            messagesEndRef={messagesEndRef}
                            formatMessage={formatMessage}
                            suggestedQuestions={suggestedQuestions}
                            handleSuggestedQuestion={handleSuggestedQuestion}
                            inputRef={inputRef}
                            inputValue={inputValue}
                            handleInputChange={handleInputChange}
                            handleKeyDown={handleKeyDown}
                            sendMessage={sendMessage}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

const ChatContent = React.memo(({
    isModalMode,
    apiStatus,
    openModal,
    closeModal,
    setIsOpen,
    messages,
    isTyping,
    messagesEndRef,
    formatMessage,
    suggestedQuestions,
    handleSuggestedQuestion,
    inputRef,
    inputValue,
    handleInputChange,
    handleKeyDown,
    sendMessage
}) => (
    <>
        {/* Header */}
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
                        style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '35px',
                            height: '35px',
                            fontSize: '16px'
                        }}
                    >
                        ⛶
                    </button>
                )}
                <button
                    onClick={isModalMode ? closeModal : () => setIsOpen(false)}
                    className="btn btn-sm text-white opacity-75 hover-opacity-100 close-btn"
                >
                    ×
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

        {/* Input Area */}
        <div className={`input-area ${isModalMode ? 'modal-input' : ''} p-3`}>
            {suggestedQuestions.length > 0 && (
                <div className="mb-2 d-flex flex-wrap gap-2">
                    {suggestedQuestions.map((question, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleSuggestedQuestion(question, idx)}
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
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder={apiStatus === 'error' ? 'Service temporarily unavailable...' : 'Ask about Choti...'}
                    className="form-control chatbot-input rounded-pill"
                    disabled={isTyping || apiStatus === 'error'}
                    autoComplete="off"
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
));

export default Chatbot;