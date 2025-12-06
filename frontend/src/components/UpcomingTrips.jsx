import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { trips } from '../data/trips'

const filters = [
  'All',
  'Meghalaya',
  'Spiti Valley',
  'Tirthan Valley',
  'Himachal Pradesh',
  'Shimla',
  'Varanasi',
  'Rishikesh',
  'Kerala Backwaters'
]

function UpcomingTrips() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleTrips = useMemo(() => {
    if (activeFilter === 'All') return trips
    return trips.filter((trip) => trip.location === activeFilter)
  }, [activeFilter])

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Popular Trips
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                activeFilter === filter
                  ? 'border-[#017233] bg-[#017233] text-white'
                  : 'border-gray-200 text-gray-700 hover:border-[#017233] hover:text-[#017233]'
              }`}
            >
              {filter}
            </button>
          ))}
          <button
            type="button"
            className="rounded-full border border-gray-300 px-6 py-2 text-sm font-semibold text-gray-900 transition-colors hover:border-[#017233] hover:text-[#017233] whitespace-nowrap"
          >
            See All
          </button>
        </div>

        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {visibleTrips.slice(0, 8).map((trip) => (
            <Link
              key={trip.id}
              to={`/trip/${trip.id}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              {/* Snake animation overlay */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-10">
                <div className="snake-overlay"></div>
              </div>
              
              <div className="relative h-40 sm:h-44 w-full overflow-hidden">
                <img src={trip.image} alt={trip.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
                {trip.freebies && (
                  <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Free Goodies 🎁
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  <span>⏱️ {trip.nights} / {trip.duration}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 line-clamp-2">{trip.title}</h3>
                <p className="text-sm text-gray-500">{trip.location}</p>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-lg font-bold text-gray-900">{trip.price}</span>
                  <span className="text-xs text-gray-400 line-through">{trip.oldPrice}</span>
                  <span className="text-xs font-semibold text-[#F43F5E]">{trip.discount}</span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
                  <span>📅</span>
                  <span className="line-clamp-1">{trip.departures.slice(0, 2).join(', ')}{trip.departures.length > 2 ? '...' : ''}</span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#017233]">
                    {trip.month}
                  </span>
                  <button
                    type="button"
                    className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-900 transition-colors hover:border-[#017233] hover:text-[#017233]"
                  >
                    View Itinerary
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingTrips

