const Hero = () => {
  const whatsappNumber = "+56965220739"
  const message = "Hola, me gustaría solicitar una asesoría legal."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="bg-dark-blue text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Defendiendo tus derechos laborales y de familia</h1>
          <p className="text-xl mb-8 font-bold text-off-white">Expertos en derecho laboral y familiar, comprometidos con tu bienestar.</p>
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