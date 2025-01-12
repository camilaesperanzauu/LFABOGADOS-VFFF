const Hero = () => {
  const whatsappNumber = "+56965220739"
  const message = "Hola, me gustaría solicitar una asesoría legal."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="bg-dark-blue text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investigación, defensa y compromiso con tus intereses</h1>
          <div className="space-y-4 text-lg mb-8 font-medium text-off-white">
            <p className="mb-4">
              Somos expertos en derecho laboral, familiar e investigaciones internas, comprometidos con proteger tus intereses y ofrecerte respaldo en cada etapa de tu vida.
            </p>

            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold mb-2">Ámbito Laboral</h2>
                <p>Te asesoramos en conflictos, despidos injustificados y negociaciones colectivas, luchando por la justicia en tu entorno de trabajo.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">Ámbito Corporativo</h2>
                <p>Llevamos a cabo investigaciones internas para identificar irregularidades, fortalecer la ética empresarial y garantizar la transparencia dentro de tu organización.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">Ámbito Familiar</h2>
                <p>Te acompañamos en procesos como divorcios, regulación de visitas y pensión alimenticia, priorizando el bienestar de tus seres queridos.</p>
              </div>
            </div>

            <p className="mt-6 italic">
              Con experiencia, empatía y compromiso, trabajamos para garantizar tu tranquilidad y seguridad legal. ¡Déjanos ser tu defensa en los momentos clave de tu vida!
            </p>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg inline-block"
          >
            Solicitar Asesoría
          </a>
        </div>
        <div className="hidden md:block w-full md:w-1/2">
          <img src="https://i.imgur.com/cGI223Y.png" alt="Justicia y Familia" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}

export default Hero