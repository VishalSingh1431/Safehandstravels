import HeroVideo from './HeroVideo'
import Navbar from './Navbar'
import UpcomingTrips from './UpcomingTrips'
import ExploreDestinations from './ExploreDestinations'
import BannerSlider from './BannerSlider'
import CertificateLegal from './CertificateLegal'
import Reviews from './Reviews'
import WrittenReviews from './WrittenReviews'

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <HeroVideo />
      <UpcomingTrips />
      <ExploreDestinations />
      <BannerSlider />
      <CertificateLegal />
      <Reviews />
      <WrittenReviews />
    </div>
  )
}

export default Home

