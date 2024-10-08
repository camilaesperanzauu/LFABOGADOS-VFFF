import React from 'react'
import { MessageCircle } from 'lucide-react'

const ChatButton = () => {
  return (
    <button className="fixed bottom-4 right-4 bg-white text-dark-blue p-4 rounded-full shadow-lg hover:bg-off-white transition duration-300">
      <MessageCircle size={24} />
    </button>
  )
}

export default ChatButton