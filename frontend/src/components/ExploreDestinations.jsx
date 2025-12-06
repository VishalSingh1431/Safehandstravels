const destinations = [
  {
    id: 1,
    name: 'Spiti Valley',
    image: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab6c8?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 2,
    name: 'Meghalaya',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 3,
    name: 'Tawang',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 4,
    name: 'Ladakh',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73bb2?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 5,
    name: 'Manali',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 6,
    name: 'Andaman',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 7,
    name: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73bb2?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 8,
    name: 'Goa',
    image: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 9,
    name: 'Kerala',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 10,
    name: 'Himachal',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60'
  }
]

function ExploreDestinations() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore Destinations
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl mb-3 ring-2 ring-transparent group-hover:ring-[#017233]/20">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 text-center transition-colors group-hover:text-[#017233] mt-1">
                {destination.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExploreDestinations

