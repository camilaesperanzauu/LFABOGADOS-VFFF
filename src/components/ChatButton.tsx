import { MessageCircle } from 'lucide-react'

const ChatButton = () => {
  const whatsappNumber = "+56965220739"
  const message = "Hola, me gustaría recibir asesoría legal."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-white text-dark-blue p-4 rounded-full shadow-lg hover:bg-off-white transition duration-300"
    >
      <MessageCircle size={24} />
    </a>
  )
}

export default ChatButton