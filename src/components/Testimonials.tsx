import { User } from 'lucide-react'

const testimonials = [
  {
    name: "Jonathan Garcia",
    text: "En 2024, enfrenté un despido por supuesto incumplimiento grave, pero gracias a LFAbogados logré alcanzar un acuerdo altamente favorable. Su asesoría experta me permitió obtener mis indemnizaciones completas y superar esta situación con éxito. Recomiendo plenamente su servicio profesional y comprometido."
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light-blue p-6 rounded-lg shadow-md flex flex-col">
              <p className="italic text-off-white mb-6 line-clamp-6">"{testimonial.text}"</p>
              <div className="flex items-center border-t border-dark-blue pt-4 mt-auto">
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