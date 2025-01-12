import { User } from 'lucide-react'

const testimonials = [
  {
    name: "Jonathan Garcia",
    text: "En 2024, enfrenté un despido por supuesto incumplimiento grave, pero gracias a LFAbogados logré alcanzar un acuerdo altamente favorable. Su asesoría experta me permitió obtener mis indemnizaciones completas y superar esta situación con éxito. Recomiendo plenamente su servicio profesional y comprometido."
  },
  {
    name: "Maria de los Angeles Villarroel",
    text: "Gracias a su vasta experiencia y enfoque estratégico, no solo logré obtener las indemnizaciones que inicialmente esperaba, sino que superaron ampliamente mis expectativas. Su apoyo profesional y comprometido marcó la diferencia en mi caso, asegurando un resultado mucho más favorable del que hubiera imaginado."
  },
  {
    name: "Constanza Escudero",
    text: "Fui despedida, sin derecho a recibir ninguna indemnización. Gracias a la asesoría experta y el compromiso del equipo de LFABOGADOS, lograron revertir la situación y alcanzar un excelente acuerdo. Esto no solo me permitió obtener las indemnizaciones que inicialmente me habían negado, sino que también superaron mis expectativas, garantizando un resultado justo y favorable. Recomiendo plenamente su profesionalismo y dedicación en la defensa de los derechos laborales."
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-dark-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light-blue p-8 rounded-lg shadow-md flex flex-col h-full">
              <p className="italic text-off-white mb-8 text-lg">"{testimonial.text}"</p>
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