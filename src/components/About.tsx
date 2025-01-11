const About = () => {
  return (
    <section className="py-20 bg-dark-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Nosotros</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-10">
            <div className="w-20 h-1 bg-light-blue rounded-full"></div>
            <div className="w-3 h-3 mx-2 bg-light-blue rounded-full"></div>
            <div className="w-20 h-1 bg-light-blue rounded-full"></div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-center">LFABOGADOS: Experiencia y Compromiso</h3>
          <p className="text-off-white mb-6 text-lg">
            En LFABOGADOS, nos dedicamos a proteger tus derechos laborales y familiares con pasión y experiencia. Nuestro equipo de abogados altamente calificados está comprometido a brindarte el mejor asesoramiento legal y representación.
          </p>
          <p className="text-off-white mb-6 text-lg">
            Con años de experiencia en el campo legal, hemos ayudado a numerosas familias y trabajadores a resolver sus conflictos y obtener la justicia que merecen. Tu bienestar es nuestra prioridad.
          </p>
          <p className="text-off-white mb-12 text-lg">
            Nos enorgullece ofrecer un servicio personalizado, adaptado a las necesidades únicas de cada cliente. Nuestro enfoque se basa en la empatía, la profesionalidad y el compromiso con la excelencia legal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-opacity-10 bg-white rounded-lg">
              <div className="text-4xl font-bold text-light-blue mb-2">+200</div>
              <div className="text-lg">Casos Exitosos</div>
            </div>
            <div className="text-center p-6 bg-opacity-10 bg-white rounded-lg">
              <div className="text-4xl font-bold text-light-blue mb-2">10+</div>
              <div className="text-lg">Años de Experiencia</div>
            </div>
            <div className="text-center p-6 bg-opacity-10 bg-white rounded-lg">
              <div className="text-4xl font-bold text-light-blue mb-2">100%</div>
              <div className="text-lg">Compromiso</div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-12">
            <div className="w-20 h-1 bg-light-blue rounded-full"></div>
            <div className="w-3 h-3 mx-2 bg-light-blue rounded-full"></div>
            <div className="w-20 h-1 bg-light-blue rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About