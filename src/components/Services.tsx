import React from 'react'
import { Users, Briefcase, UserCheck, Users2 } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="bg-main-rose p-6 rounded-lg shadow-md border border-light-blue">
    <Icon size={48} className="text-white mb-4" />
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="font-bold text-white">{description}</p>
  </div>
)

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Derecho de Familia",
      description: "Asesoramiento en divorcios, cuidado personal, visitas, pensiones alimenticias, medidas de protección."
    },
    {
      icon: Briefcase,
      title: "Derecho Laboral",
      description: "Protección integral de tus derechos laborales con representación judicial y administrativa, incluyendo defensa en comparendos ante la Inspección del Trabajo."
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
    },
    {
      icon: Users2,
      title: "Investigaciones Internas",
      description: "Prevención, transparencia y resolución efectiva en investigaciones internas corporativas."
    }
  ]

  return (
    <section className="py-20 bg-soft-pink">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-dark-text">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services