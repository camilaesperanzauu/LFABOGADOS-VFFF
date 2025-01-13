const Hero = () => {
  const whatsappNumber = "+56965220739"
  const message = "Hola, me gustaría solicitar una asesoría legal."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="bg-dark-blue text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Protegemos tus intereses, fortalecemos tu organización y defendemos tus derechos.</h1>
          <div className="space-y-4 text-lg mb-8 font-medium text-off-white">
            <p className="mb-4 text-justify">
              Nuestro foco se centra en Derecho laboral, investigaciones internas y asesorías legales, comprometidos con brindar soluciones efectivas y personalizadas para empresas y particulares.
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