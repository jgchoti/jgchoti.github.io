import React, { useState, useRef, useEffect } from 'react';
import { projectData } from '../data/projectData.js';
import { profileData } from '../data/profileData.js';
import { contactInfo } from '../data/contactInfo.js';

const Chatbot = ({ theme = 'web' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isSetup, setIsSetup] = useState(true);
    const [suggestedQuestions, setSuggestedQuestions] = useState([
        "What makes Choti unique as a candidate?",
        "Tell me about her recent projects",
        "What's her international experience like?",
        "How can I get in touch with her?"
    ]);
    const messagesEndRef = useRef(null);

    const createProfilePrompt = () => {
        let profileText = "\n**CHOTI'S BACKGROUND & PERSONALITY:**\n\n";

        profileData.forEach(section => {
            profileText += `**${section.title}:**\n`;
            if (typeof section.content === 'string') {
                profileText += `${section.content}\n\n`;
            }
            if (section.subtitle) {
                profileText += `${section.subtitle}\n`;
            }
        });

        return profileText;
    };

    const createContactPrompt = () => {
        let contactText = "\n**CONTACT INFORMATION:**\n";

        contactInfo.forEach(contact => {
            if (contact.platform === 'E-mail') {
                contactText += `• Email: ${contact.name}\n`;
            } else {
                contactText += `• ${contact.platform}: ${contact.name}\n`;
            }
        });

        return contactText;
    };

    const createProjectsPrompt = () => {
        const webProjects = projectData.filter(p => p.type === 'web');
        const dataProjects = projectData.filter(p => p.type === 'data');

        let projectsText = "\n**CHOTI'S PROJECTS:**\n\n";

        projectsText += "**Web Development Projects:**\n";
        webProjects.forEach(project => {
            projectsText += `• **${project.name}**: ${project.description}\n`;
            projectsText += `  - Technologies: ${project.technologies.map(t => t.name).join(', ')}\n`;
            projectsText += `  - Link: ${project.linkUrl || project.webUrl || 'Available on request'}\n`;
            if (project.shortDescription) {
                projectsText += `  - Summary: ${project.shortDescription}\n`;
            }
        });

        projectsText += "\n**Data Science Projects:**\n";
        dataProjects.forEach(project => {
            projectsText += `• **${project.name}**: ${project.description}\n`;
            projectsText += `  - Technologies: ${project.technologies.map(t => t.name).join(', ')}\n`;
            projectsText += `  - Link: ${project.linkUrl}\n`;
            if (project.shortDescription) {
                projectsText += `  - Summary: ${project.shortDescription}\n`;
            }
        });

        return projectsText;
    };

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
  1. Use specific project examples from her portfolio when discussing her skills
  2. Mention actual technologies and tools she's used
  3. Reference real accomplishments and project outcomes
  4. Adapt to the other person's tone and needs
  5. Suggest a friendly, low-pressure next step
  6. ALWAYS redirect off-topic conversations back to Choti's career

  **What you never do:**
  * Make up projects or skills she doesn't have
  * Overwhelm with jargon or endless lists
  * Sound pushy or desperate
  * Answer questions unrelated to Choti's career
  
  **About Choti:**
  - A curious learner passionate about digital skills, data, and solving problems step-by-step
  - Based in Belgium 🇧🇪 (has lived in 9 countries: Thailand, Switzerland, UK, Denmark, Slovenia, Spain, Maldives, Malaysia, Belgium)
  - Adapts quickly and works across cultures - this international experience shapes how she learns and grows
  - Currently completing BeCode AI/Data Science Bootcamp
  - Has learned Dutch, became a mom, and stays endlessly curious
  - Focuses on learning by doing — building digital projects, experimenting with data, and improving skills through real-world challenges
  - Award winner (Tech4Positive Futures Challenge 2024 - Capgemini Belgium)
  - Available for opportunities in Belgium/remote

  ${createProfilePrompt()}
  ${createContactPrompt()}
  ${createProjectsPrompt()}

  **Personal Interests & Values:**
  - ✈️ Travels the world and enjoys local food (bonus points if it's spicy)
  - 📚 Gets totally absorbed in novels — fiction is her go-to way to escape reality
  - 🌍 Learns new languages and figures out how tech can help save the planet
  - Values curiosity, cultural adaptation, and continuous learning
  - Balances technical skills with human connection and global perspective

  **Notable Achievements:**
  - Won Tech4Positive Futures Challenge 2024 (Capgemini Belgium) with coral reef monitoring solution
  - Built 12+ web applications with various technologies
  - Created professional portfolio websites for clients
  - Developed both educational games and data visualization tools

  Always refer to her as "Choti" and use she/her pronouns. Use specific project examples when discussing her capabilities. Focus on connection and curiosity rather than hard selling. STAY ON TOPIC - only discuss Choti's career and professional opportunities.
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
                content: '👋 Hey! I\'m Choti\'s career agent. She\'s a curious learner with a global mindset from living in 9 countries — currently based in Belgium.\n\nShe\'s passionate about turning data into insights and has built some fascinating projects. Whether you\'re hiring, collaborating, or just want to chat about her journey, I\'m here to connect you. What interests you most?'
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
                                <h6 className="mb-0 fw-bold">🤝 Choti's Career Agent</h6>
                                <small className="opacity-75">Let's start a conversation!</small>
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