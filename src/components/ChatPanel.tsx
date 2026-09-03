import { useEffect, useRef, useState } from 'react';
import { Button } from '@carbon/react';
import { Microphone, Send, Menu } from '@carbon/icons-react';
import './ChatPanel.scss';

interface Message {
  role: 'assistant' | 'user';
  text: string;
  time: string;
}

function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

const INITIAL_MESSAGES: Message[] = [
  {
    role: 'assistant',
    text: 'Hello and welcome, Hazel!\n\n**Get started by asking me about what I can help you with today.**',
    time: getTime(),
  },
];

export default function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function autoResize() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 126)}px`;
  }

  function sendMessage() {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { role: 'user', text, time: getTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    // Simulate assistant response
    setTimeout(() => {
      const assistantMsg: Message = {
        role: 'assistant',
        text: `I received your message: "${text}"\n\nThis is a placeholder response. Connect a real LLM endpoint to replace this.`,
        time: getTime(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    }, 800);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="chat-panel">
      {/* AI Background Layer */}
      <div className="chat-panel__ai-background">
        <div className="chat-panel__aura" />
      </div>

      {/* Chat Content */}
      <div className="chat-panel__content-wrapper">
        {/* Message Display Area */}
        <div className="chat-panel__messages">
          <div className="chat-panel__message-section">
            <div className="chat-panel__spacer" />
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-panel__message${msg.role === 'user' ? ' chat-panel__message--user' : ''}`}
              >
                {msg.role === 'assistant' && (
                  <div className="chat-panel__avatar">
                    <div className="chat-panel__avatar-icon">
                      <div className="chat-panel__avatar-gradient" />
                    </div>
                  </div>
                )}
                <div className="chat-panel__message-content">
                  <div className="chat-panel__message-header">
                    <span className="chat-panel__message-source">
                      {msg.role === 'assistant' ? 'watsonx' : 'You'}
                    </span>
                    <span className="chat-panel__message-time">{msg.time}</span>
                  </div>
                  <div className="chat-panel__message-spacer" />
                  <div className="chat-panel__message-text">
                    {msg.text.split('\n').map((line, j) =>
                      line ? <p key={j} className="chat-panel__message-greeting" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} /> : <br key={j} />
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Sticky Prompt Line */}
        <div className="chat-panel__prompt-line">
          <div className="chat-panel__prompt-background" />
          <div className="chat-panel__prompt-border" />
          <div className="chat-panel__prompt-content">
            <div className="chat-panel__prompt-left">
              <Button kind="ghost" size="sm" hasIconOnly iconDescription="Menu" renderIcon={Menu} className="chat-panel__prompt-button" />
              <div className="chat-panel__prompt-spacer" />
            </div>
            <div className="chat-panel__prompt-input">
              <textarea
                ref={textareaRef}
                className="chat-panel__prompt-textarea"
                placeholder="Type something..."
                value={input}
                rows={1}
                onChange={(e) => { setInput(e.target.value); autoResize(); }}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="chat-panel__prompt-right">
              <Button kind="ghost" size="sm" hasIconOnly iconDescription="Voice input" renderIcon={Microphone} className="chat-panel__prompt-button" />
              <Button kind="ghost" size="sm" hasIconOnly iconDescription="Send" renderIcon={Send} className="chat-panel__prompt-button" onClick={sendMessage} disabled={!input.trim()} />
            </div>
          </div>
        </div>
      </div>

      {/* AI Border */}
      <div className="chat-panel__ai-border" />
    </div>
  );
}

// Made with Bob
