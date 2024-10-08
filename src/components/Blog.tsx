import React from 'react'

const blogPosts = [
  {
    title: "Cambios recientes en la legislación laboral",
    excerpt: "Descubre cómo los últimos cambios en la ley pueden afectar tus derechos como trabajador.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Guía para procesos de divorcio",
    excerpt: "Te explicamos paso a paso cómo enfrentar un proceso de divorcio de la manera más efectiva.",
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Derechos de los trabajadores en tiempos de crisis",
    excerpt: "Conoce tus derechos laborales durante situaciones económicas difíciles o emergencias.",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
]

const Blog = () => {
  return (
    <section className="py-20 bg-dark-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Últimas Noticias y Artículos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-light-blue rounded-lg overflow-hidden shadow-md">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-off-white mb-4">{post.excerpt}</p>
                <a href="#" className="text-white font-bold hover:underline">Leer más</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog