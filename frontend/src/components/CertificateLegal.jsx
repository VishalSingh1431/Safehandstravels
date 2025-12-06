import { useState, useEffect } from 'react'

const certificates = [
  {
    id: 1,
    title: 'ISO Certified',
    images: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=60'
    ],
    description: 'We are ISO certified for quality and safety standards'
  },
  {
    id: 2,
    title: 'Legal Compliance',
    images: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=60'
    ],
    description: 'Fully compliant with all travel regulations and licenses'
  }
]

function CertificateLegal() {
  const [currentIndices, setCurrentIndices] = useState({ 1: 0, 2: 0 })

  useEffect(() => {
    const intervals = certificates.map((cert) => {
      return setInterval(() => {
        setCurrentIndices((prev) => ({
          ...prev,
          [cert.id]: (prev[cert.id] + 1) % cert.images.length
        }))
      }, 3500)
    })

    return () => {
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [])

  const goToSlide = (certId, index) => {
    setCurrentIndices((prev) => ({ ...prev, [certId]: index }))
  }

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Certificate & Legal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 md:h-72 overflow-hidden rounded-t-2xl">
                {/* Main Image Display */}
                {certificate.images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentIndices[certificate.id]
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${certificate.title} ${index + 1}`}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                  </div>
                ))}

                {/* Circular Thumbnail Navigation */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {certificate.images.map((image, index) => {
                    const isActive = index === currentIndices[certificate.id]
                    const totalImages = certificate.images.length
                    const angle = (360 / totalImages) * (index - currentIndices[certificate.id])
                    const radius = 45
                    const x = Math.cos((angle * Math.PI) / 180) * radius
                    const y = Math.sin((angle * Math.PI) / 180) * radius
                    
                    return (
                      <button
                        key={index}
                        onClick={() => goToSlide(certificate.id, index)}
                        className={`absolute transition-all duration-500 rounded-full overflow-hidden border-2 ${
                          isActive
                            ? 'w-12 h-12 border-white scale-110 z-30'
                            : 'w-8 h-8 border-white/50 scale-100 opacity-70 hover:opacity-100'
                        }`}
                        style={{
                          transform: isActive
                            ? 'translate(-50%, -50%)'
                            : `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    )
                  })}
                </div>

                {/* Circular Navigation Arrows */}
                <button
                  onClick={() => {
                    const prevIndex = (currentIndices[certificate.id] - 1 + certificate.images.length) % certificate.images.length
                    goToSlide(certificate.id, prevIndex)
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-1.5 transition-all z-20 shadow-md"
                  aria-label="Previous"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const nextIndex = (currentIndices[certificate.id] + 1) % certificate.images.length
                    goToSlide(certificate.id, nextIndex)
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-1.5 transition-all z-20 shadow-md"
                  aria-label="Next"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {certificate.title}
                </h3>
                <p className="text-gray-600">{certificate.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificateLegal

