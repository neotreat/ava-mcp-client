// Copyright (c) 2025, René Milzarek
// SPDX-License-Identifier: MIT

import React, { useState } from 'react';

import MessageComponent from '../components/chat/MessageComponent';

const ChatScreenComponent: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <MessageComponent key={index} sx={{ marginBottom: '24px' }}>
            {message}
          </MessageComponent>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatScreenComponent;