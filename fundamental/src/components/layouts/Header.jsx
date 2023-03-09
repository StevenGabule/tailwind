import Photo1 from '../../photo1.jfif'


export default function Header() {
  return (
    <>
     <div className="container mx-auto mt-4 rounded-full bg-gray-100">
        <nav className="flex items-center justify-between">
          <div className="h-16 w-16">
            <a href="/">
              <img alt="logo" src={Photo1} className="rounded-full" />
            </a>
          </div>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-900 hover:text-green-700">
                Projects
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-900 hover:text-green-700">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-900 hover:text-green-700">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-900 hover:text-green-700">
                Contact
              </a>
            </li>
          </ul>
          <button className="mr-2 rounded-full bg-blue-400 px-6 py-2 capitalize text-white hover:bg-blue-500">
            Sign Up
          </button>
        </nav>
      </div>
    </>
  )
}