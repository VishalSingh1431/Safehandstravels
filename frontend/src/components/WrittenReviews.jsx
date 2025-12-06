const writtenReviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    date: '2 weeks ago',
    title: 'Unforgettable Experience',
    review: 'This was hands down the best travel experience I have ever had. The attention to detail, knowledgeable guides, and stunning destinations made it absolutely perfect. I would highly recommend to anyone looking for an authentic travel experience.',
    location: 'Spiti Valley Trip',
    avatar: 'https://i.pravatar.cc/150?img=10'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    date: '1 month ago',
    title: 'Exceeded All Expectations',
    review: 'From the moment we booked until we returned home, everything was seamless. The team was professional, friendly, and went above and beyond to ensure we had an amazing time. The itinerary was well-planned and the destinations were breathtaking.',
    location: 'Ladakh Adventure',
    avatar: 'https://i.pravatar.cc/150?img=11'
  },
  {
    id: 3,
    name: 'Emily Davis',
    rating: 5,
    date: '3 weeks ago',
    title: 'Perfect Getaway',
    review: 'I cannot say enough good things about this trip. Every aspect was carefully thought out and executed. The accommodations were comfortable, the food was delicious, and the activities were exciting. I will definitely be booking another trip soon!',
    location: 'Meghalaya Tour',
    avatar: 'https://i.pravatar.cc/150?img=6'
  },
  {
    id: 4,
    name: 'David Wilson',
    rating: 5,
    date: '1 week ago',
    title: 'Best Travel Company',
    review: 'Outstanding service from start to finish. The guides were knowledgeable, the destinations were beautiful, and the overall experience was incredible. This company truly understands what makes a great travel experience and delivers it flawlessly.',
    location: 'Kerala Backwaters',
    avatar: 'https://i.pravatar.cc/150?img=14'
  }
]

function WrittenReviews() {
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
    <section className="w-full bg-white py-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Written Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {writtenReviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
              <p className="text-gray-700 leading-relaxed">{review.review}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="rounded-full border border-gray-300 px-6 py-2 text-sm font-semibold text-gray-900 transition-colors hover:border-[#017233] hover:text-[#017233] whitespace-nowrap"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  )
}

export default WrittenReviews

