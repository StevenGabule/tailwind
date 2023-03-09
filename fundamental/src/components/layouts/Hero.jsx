import Photo2 from '../../photo2.jfif'

export default function Hero() {
  return (
    <>
      <div className="container mx-auto flex mt-12">
        <div className="w-1/2 text-center">
          <p className="mt-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia id ducimus ad, alias nostrum explicabo quas aut dolores quisquam nisi.</p>
          <button className="px-6 py-2 bg-blue-400 rounded-full mt-6 text-center font-bold text-white  hover:text-blue-400 hover:bg-white focus:outline-none focus:border-sky-500 focus:ring-sky-500">Get Started</button>
        </div>
        <div className="w-1/2">
          <img src={Photo2} alt="hero logo" className='mx-auto' />
        </div>
      </div>
    </>
  )
}