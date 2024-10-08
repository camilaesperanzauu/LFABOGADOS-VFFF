import React from 'react'

const Hero = () => {
  return (
    <section className="bg-dark-blue text-white py-20">
      <div className="container mx-auto px-4 flex items-center">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-4">Defendiendo tus derechos laborales y de familia</h1>
          <p className="text-xl mb-8 font-bold text-off-white">Expertos en derecho laboral y familiar, comprometidos con tu bienestar.</p>
          <button className="btn-primary text-lg">Solicitar Asesoría</button>
        </div>
        <div className="w-1/2">
          <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Justicia y Familia" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}

export default Hero