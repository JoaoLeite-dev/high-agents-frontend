export interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export interface Conversation {
  id: string
  messages: Message[]
  slots: any
  currentStep: number
  isCompleted: boolean
}

export interface TestResponse {
  received: boolean
  conversationId: string
  message: string
}