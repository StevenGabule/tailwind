import Categories from './components/layouts/Categories'
import Header from './components/layouts/Header'
import Hero from './components/layouts/Hero'

export default function LandPage() {
  return (
    <>
      <Header />

      <Hero />

      {/* categories on development process and procedure */}
      <Categories />

      {/* pricing section */}
      <div className="container mx-auto mt-6">
          
          <div className="text-center mx-auto">
            <h1 className="text-3xl font-bold text-blue-900">Pricing</h1>
            <p>
              Offer multiple packages or monthly subscriptions? Why not showcase
              your
            </p>
            <p className="text-2xl">
              {' '}
              featured price plans here, bold and beautifully.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mx-32">
            <div className="mt-10 h-40 w-80 rounded-3xl bg-red-300 hover:shadow-2xl mx-24"></div>
            <div className="mt-10 h-40 w-80 rounded-3xl bg-red-300 hover:shadow-2xl mx-24"></div>
            <div className="mt-10 h-40 w-80 rounded-3xl bg-red-300 hover:shadow-2xl mx-24"></div>
          </div>

      </div>
    </>
  )
}
