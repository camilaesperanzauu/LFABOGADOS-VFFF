import React from 'react'
import { Users, Briefcase, UserCheck, Users2 } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-light-blue p-6 rounded-lg shadow-md">
    <Icon size={48} className="text-white mb-4" />
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="font-bold text-off-white">{description}</p>
  </div>
)

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Derecho de Familia",
      description: "Asesoramiento en divorcios, custodia y pensiones alimenticias."
    },
    {
      icon: Briefcase,
      title: "Derecho Laboral",
      description: "Protección de tus derechos en el ámbito laboral."
    },
    {
      icon: UserCheck,
      title: "Asesoría Legal Personalizada",
      description: "Atención individualizada para tus necesidades legales."
    },
    {
      icon: Users2,
      title: "Negociaciones Colectivas y Sindicatos",
      description: "Apoyo en negociaciones y representación sindical."
    }
  ]

  return (
    <section className="py-20 bg-dark-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services