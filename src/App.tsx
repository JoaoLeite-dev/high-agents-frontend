import { useState } from 'react'
import './App.css'
import type { Message, Conversation, TestResponse } from './types/chat'
import { startConversation, sendMessage, testMessage, getConversation } from './services/chatService'

function App() {
  const [conversationId, setConversationId] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleStartConversation = async () => {
    setLoading(true)
    try {
      const id = await startConversation()
      setConversationId(id)
      await handleGetConversation(id)
    } catch (error) {
      alert('Error starting conversation: ' + (error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const handleGetConversation = async (id: string) => {
    try {
      const conv: Conversation = await getConversation(id)
      setMessages(conv.messages || [])
    } catch (error) {
      alert('Error getting conversation: ' + (error as Error).message)
      setMessages([])
    }
  }

  const handleSendMessage = async () => {
    if (!conversationId || !inputMessage.trim()) return
    setLoading(true)
    try {
      await sendMessage(conversationId, inputMessage)
      await handleGetConversation(conversationId)
      setInputMessage('')
    } catch (error) {
      alert('Error sending message: ' + (error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const handleTestMessage = async () => {
    if (!conversationId || !inputMessage.trim()) return
    setLoading(true)
    try {
      const result: TestResponse = await testMessage(conversationId, inputMessage)
      alert(`Test result: ${JSON.stringify(result)}`)
    } catch (error) {
      alert('Error testing message: ' + (error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const handleRefreshConversation = async () => {
    if (!conversationId) return
    setLoading(true)
    await handleGetConversation(conversationId)
    setLoading(false)
  }

  return (
    <div className="app">
      <h1>High Agents Chat</h1>
      {!conversationId ? (
        <button onClick={handleStartConversation} disabled={loading}>
          {loading ? 'Starting...' : 'Start Conversation'}
        </button>
      ) : (
        <div className="chat-container">
          <p>Conversation ID: {conversationId}</p>
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                <div className="message-avatar">
                  {msg.role === 'user' ? 'U' : 'A'}
                </div>
                <div className="message-content">
                  <div className="message-bubble">
                    {msg.content}
                  </div>
                  <div className="message-timestamp">
                    {new Date(msg.timestamp).toLocaleString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                      day: '2-digit',
                      month: '2-digit'
                    })}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="loading-message">
                <div className="message-avatar" style={{ backgroundColor: '#28a745' }}>A</div>
                <div className="message-content">
                  <div className="message-bubble" style={{ backgroundColor: '#f8f9fa', color: '#666' }}>
                    Digitando<span className="loading-dots"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="input-container">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
              placeholder="Digite sua mensagem..."
              disabled={loading}
              rows={2}
            />
            <div className="button-group">
              <button onClick={handleSendMessage} disabled={loading || !inputMessage.trim()}>
                Enviar
              </button>
              <button onClick={handleTestMessage} disabled={loading || !inputMessage.trim()}>
                Testar
              </button>
              <button onClick={handleRefreshConversation} disabled={loading}>
                Atualizar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
