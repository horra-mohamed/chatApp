import { useState } from 'react';
import './ChatApp.css';

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [username, setUsername] = useState('');
    
    const handleSendMessage = () => {
        if (!username.trim()) {
            alert('Please enter a username before sending messages.');
            return;
        }
        if (newMessage.trim() !== '') {
            setMessages((prevMessages) => [...prevMessages, { text: newMessage, username }]);
            setNewMessage('');
        }
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleNewMessageChange = (e) => {
        setNewMessage(e.target.value);
    };

    return (
        <><div className="chat-container" >
            <h1 className="chat-title">Chat App</h1>
            <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your username"
                className="chat-input"
            />
            <div className="message-list">
                {messages.length === 0 ? (
                    <p className="no-messages">No messages yet. Start the conversation!</p>
                ) : (
                    messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message-item ${message.username === username ? 'message-self' : 'message-other'
                                }`}
                        >
                            <span className="message-username">{message.username}:</span>{' '}
                            <span className="message-text">{message.text}</span>
                        </div>
                    ))
                )}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={newMessage}
                    onChange={handleNewMessageChange}
                    placeholder="Type a message"
                    className="chat-input"
                />
                <button onClick={handleSendMessage} className="chat-button">
                    Send
                </button>
            </div>
        </div>
        </>
    );
};

export default ChatApp;
