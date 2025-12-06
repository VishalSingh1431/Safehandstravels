const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    location: 'Spiti Valley Trip',
    review: 'Amazing experience! The guides were knowledgeable and the itinerary was perfect.',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Rahul Kumar',
    rating: 5,
    location: 'Ladakh Adventure',
    review: 'Best trip of my life! Highly recommend this travel company.',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: 3,
    name: 'Anjali Patel',
    rating: 5,
    location: 'Meghalaya Tour',
    review: 'Exceeded expectations in every way. Beautiful destinations and great service.',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    rating: 5,
    location: 'Manali Escape',
    review: 'Professional team and well-organized trips. Will book again!',
    avatar: 'https://i.pravatar.cc/150?img=8'
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    rating: 5,
    location: 'Kerala Backwaters',
    review: 'Fantastic experience from start to finish. Highly satisfied!',
    avatar: 'https://i.pravatar.cc/150?img=9'
  },
  {
    id: 6,
    name: 'Arjun Mehta',
    rating: 5,
    location: 'Himachal Pradesh',
    review: 'Wonderful memories created. The trip was worth every penny!',
    avatar: 'https://i.pravatar.cc/150?img=13'
  }
]

function Reviews() {
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-gray-700 mt-4 line-clamp-3">{review.review}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="rounded-full border border-gray-300 px-6 py-2 text-sm font-semibold text-gray-900 transition-colors hover:border-[#017233] hover:text-[#017233] whitespace-nowrap"
          >
            See All
          </button>
        </div>
      </div>
    </section>
  )
}

export default Reviews

