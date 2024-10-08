import React from 'react'

const testimonials = [
  {
    name: "María González",
    text: "LFABOGADOS me ayudó a resolver mi caso de custodia de manera justa y eficiente. ¡Estoy muy agradecida!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Carlos Rodríguez",
    text: "Gracias a su experiencia en derecho laboral, pude obtener la compensación que merecía. Excelente servicio.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Ana Martínez",
    text: "Su asesoría personalizada fue crucial para resolver mi situación legal. Altamente recomendados.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-dark-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light-blue p-6 rounded-lg shadow-md">
              <p className="mb-4 italic text-off-white">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <span className="font-bold text-white">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials