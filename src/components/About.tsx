import React from 'react'

const About = () => {
  return (
    <section className="py-20 bg-dark-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Nosotros</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="flex space-x-4">
              <img src="/assets/images/foto1.png" alt="Camila Rivas" className="w-1/2 h-128 bg-light-blue rounded-lg" />
              <div className="w-1/2 h-128 bg-light-blue rounded-lg"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">LFABOGADOS: Experiencia y Compromiso</h3>
            <p className="text-off-white mb-4">
              En LFABOGADOS, nos dedicamos a proteger tus derechos laborales y familiares con pasión y experiencia. Nuestro equipo de abogados altamente calificados está comprometido a brindarte el mejor asesoramiento legal y representación.
            </p>
            <p className="text-off-white mb-4">
              Con años de experiencia en el campo legal, hemos ayudado a numerosas familias y trabajadores a resolver sus conflictos y obtener la justicia que merecen. Tu bienestar es nuestra prioridad.
            </p>
            <p className="text-off-white">
              Nos enorgullece ofrecer un servicio personalizado, adaptado a las necesidades únicas de cada cliente. Nuestro enfoque se basa en la empatía, la profesionalidad y el compromiso con la excelencia legal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About