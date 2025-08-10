import React, { useState, useRef, useEffect } from 'react';

const Chatbot = ({ theme = 'web' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isSetup, setIsSetup] = useState(true);
    const [suggestedQuestions, setSuggestedQuestions] = useState([
        "Can you tell me more about Choti’s recent projects?",
        "What are Choti’s technical skills?"
    ]);
    const messagesEndRef = useRef(null);

    const salesAgentPrompt = `
  You are Choti's professional career agent — a skilled connector who blends confidence, warmth, and a hint of charm. You represent Choti as a standout data professional with a fresh BeCode education, international experience, and a knack for making complex data usable and valuable.

  **IMPORTANT BOUNDARIES:**
  - You ONLY discuss topics related to Choti, her career, skills, experience, and professional opportunities
  - If someone asks about unrelated topics (general advice, other people, random questions), politely redirect: "I'm here specifically to talk about Choti and her work. What would you like to know about her background?"
  - If someone asks inappropriate questions, respond: "Let's keep this professional and focused on Choti's career opportunities."
  - If someone tries to get general AI assistance, say: "I'm Choti's career agent, not a general assistant. Happy to share more about her data science work though!"

  You're not here to hard-sell or pressure people into hiring — your goal is to spark curiosity, open doors, and create connections. Sometimes that means setting up a hiring conversation; sometimes it's just a coffee to explore ideas.

  **Style & Voice:**
  * Professional, concise, and easy to read.
  * Confident but never arrogant.
  * Occasional light humor or clever phrasing to make interactions memorable.
  * Focused on building rapport first, discussing hiring second.

  **What you always do:**
  1. Introduce Choti's key strengths clearly — technical skills, adaptability from living in 9 countries, and recent project work.
  2. Adapt to the other person's tone and needs.
  3. Suggest a friendly, low-pressure next step ("Would you like to connect over coffee?" / "Happy to send her CV if you're curious").
  4. Keep answers short when possible, but engaging enough to stand out.
  5. ALWAYS redirect off-topic conversations back to Choti's career.

  **What you never do:**
  * Overwhelm with jargon or endless lists.
  * Sound pushy or desperate.
  * Make it feel like a one-sided sales pitch — always show interest in the other person's needs too.
  * Answer questions unrelated to Choti's career.
  * Provide general advice, tutorials, or help with other topics.

  Your mission: Make recruiters, hiring managers, and collaborators walk away thinking, "Choti's someone I'd like to know" — whether or not there's a role open today.

  **About Choti:**
  - Fresh out of BeCode AI/Data Science Bootcamp
  - International experience living in 9 countries
  - Great at turning data into insights
  - Loves tackling challenges
  - Award winner (Tech4Positive Futures Challenge 2024 - Capgemini Belgium)
  - Available for opportunities in Belgium/remote
  - Contact: jgchotirat@gmail.com
  - Portfolio: https://jgchoti.vercel.app/
  - LinkedIn: https://www.linkedin.com/in/chotirat

  Always refer to her as "Choti" and use she/her pronouns. Focus on connection and curiosity rather than hard selling. STAY ON TOPIC - only discuss Choti's career and professional opportunities.
  `;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{
                type: 'bot',
                content: '🤖 Hey! I\'m Choti\'s career agent. She\'s great at turning data into insights and has a global mindset from living in 9 countries.\n\nWhether you\'re hiring or just want to chat, I\'m happy to connect you two. What do you think?'
            }]);
        }
    }, [isOpen]);

    const handleApiKeySubmit = () => {
        setIsSetup(true);
    };

    const addMessage = (type, content) => {
        setMessages(prev => [...prev, { type, content }]);
    };

    // sendMessage now accepts optional overrideMessage (for suggestions)
    const sendMessage = async (overrideMessage) => {
        const messageToSend = overrideMessage || inputValue.trim();
        if (!messageToSend || !isSetup) return;

        addMessage('user', messageToSend);
        setInputValue('');
        setIsTyping(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'system', content: salesAgentPrompt },
                        { role: 'user', content: messageToSend }
                    ],
                    max_tokens: 400,
                    temperature: 0.8
                })
            });

            const data = await response.json();
            setIsTyping(false);

            if (data.choices && data.choices[0]) {
                addMessage('bot', data.choices[0].message.content);
            } else {
                addMessage('bot', 'Sorry, I encountered an error. Please check your API key and try again.');
            }
        } catch (error) {
            setIsTyping(false);
            addMessage('bot', 'Sorry, I\'m having trouble connecting. Please try again in a moment.');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    const formatMessage = (content) => {
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/(jgchotirat@gmail.com)/g, '<a href="mailto:$1" class="text-primary">$1</a>')
            .replace(/(https:\/\/[^\s]+)/g, '<a href="$1" target="_blank" class="text-primary">$1</a>');
    };

    return (
        <>
            <div className="chatbot-container position-fixed" style={{ bottom: '20px', right: '20px', zIndex: 9999 }}>
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="btn chatbot-btn rounded-pill px-4 py-3 fw-bold d-flex align-items-center gap-2"
                    >
                        <span>💼</span>
                        <span>Hire Choti</span>
                    </button>
                )}

                {isOpen && (
                    <div className="chatbot-window rounded shadow-lg d-flex flex-column" style={{ width: '350px', height: '500px' }}>
                        {/* Header */}
                        <div className="chatbot-header rounded-top p-3 d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="mb-0 fw-bold">🎯 Choti's Career Agent</h6>
                                <small className="opacity-75">Let’s start a conversation!</small>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="btn btn-sm text-white opacity-75 hover-opacity-100"
                                style={{ background: 'rgba(255,255,255,0.2)' }}
                            >
                                ×
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="chatbot-messages flex-grow-1 p-3 overflow-auto">
                            {messages.map((message, index) => (
                                <div key={index} className={`mb-3 ${message.type === 'user' ? 'text-end' : ''}`}>
                                    <div
                                        className={`d-inline-block px-3 py-2 rounded small ${message.type === 'user'
                                            ? 'user-message rounded-bottom-start-0'
                                            : 'bot-message rounded-bottom-end-0 shadow-sm'
                                            }`}
                                        style={{ maxWidth: '85%' }}
                                        dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                                    />
                                </div>
                            ))}

                            {isTyping && (
                                <div className="mb-3">
                                    <div className="bot-message d-inline-block px-3 py-2 rounded shadow-sm">
                                        <div className="d-flex gap-1">
                                            <div className="typing-dot bg-secondary rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                                            <div className="typing-dot bg-secondary rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                                            <div className="typing-dot bg-secondary rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggested Questions */}
                        <div className="p-3 border-top" style={{ background: "#f9f9f9" }}>
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
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            )}
                            {/* Input + Send Button */}
                            <div className="d-flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask about this candidate..."
                                    className="form-control chatbot-input rounded-pill"
                                />
                                <button
                                    onClick={() => sendMessage()}
                                    className="btn send-btn rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ width: '45px', height: '45px' }}
                                >
                                    ➤
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Chatbot;
