import { User } from 'lucide-react'

const testimonials = [
  {
    name: "Jonathan Garcia",
    text: "LFABOGADOS me ayudó a resolver mi caso de custodia de manera justa y eficiente. ¡Estoy muy agradecido!"
  },
  {
    name: "Carlos Rodríguez",
    text: "Gracias a su experiencia en derecho laboral, pude obtener la compensación que merecía. Excelente servicio."
  },
  {
    name: "Ana Martínez",
    text: "Su asesoría personalizada fue crucial para resolver mi situación legal. Altamente recomendados."
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-dark-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light-blue p-4 rounded-lg shadow-md h-[200px] flex flex-col">
              <p className="italic text-off-white flex-1 mb-2">"{testimonial.text}"</p>
              <div className="flex items-center border-t border-dark-blue pt-2">
                <div className="bg-dark-blue p-2 rounded-full mr-3">
                  <User size={20} className="text-white" />
                </div>
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