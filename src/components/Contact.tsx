import React from 'react'

const Contact = () => {
  return (
    <section className="py-20 bg-dark-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
        <div className="max-w-2xl mx-auto bg-light-blue p-8 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-bold mb-2">Nombre</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-dark-blue border border-off-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-bold mb-2">Correo Electrónico</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-dark-blue border border-off-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-white font-bold mb-2">Teléfono</label>
              <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 bg-dark-blue border border-off-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white font-bold mb-2">Mensaje</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-dark-blue border border-off-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white" required></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">Enviar Mensaje</button>
          </form>
          <p className="mt-4 text-sm text-off-white text-center">Nos pondremos en contacto contigo dentro de las próximas 24 horas.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact