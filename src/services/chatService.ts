import axios from 'axios'
import type { Conversation, TestResponse } from '../types/chat'

const API_BASE = 'http://localhost:5073/api/Chat'

export const startConversation = async (): Promise<string> => {
  const response = await axios.post(`${API_BASE}/start`, {})
  return response.data.conversationId
}

export const sendMessage = async (conversationId: string, message: string): Promise<string> => {
  const response = await axios.post(`${API_BASE}/send`, {
    conversationId,
    message
  }, { responseType: 'text' })
  return response.data
}

export const testMessage = async (conversationId: string, message: string): Promise<TestResponse> => {
  const response = await axios.post(`${API_BASE}/test`, {
    conversationId,
    message
  })
  return response.data
}

export const getConversation = async (conversationId: string): Promise<Conversation> => {
  const response = await axios.get(`${API_BASE}/${conversationId}`)
  return response.data.conversation
}