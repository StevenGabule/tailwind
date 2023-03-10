import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {icon} from '@fortawesome/fontawesome-svg-core/import.macro'

import GroceryAppLogo from '../grocery_icon.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from 'swiper'

// ** image
import CoverHero1 from '../Homepage-Grocery-Store.png'
import DeliveryCar from '../free-delivery-car.png'
import Oil from '../oil.png'
import Rice from '../rice.png'
import Food from '../food.png'
import Dals from '../dals.png'
import Drink from '../drinks.png'
import Fruits from '../fruits.png'
import Meals from '../meals.png'
import InstantMixes from '../instant-mixes.png'

import NescafeNido from '../nescafe-nido-boxes.png'
import BreedDogFood from '../breed-dog-food-and-bread.png'
import Item1 from '../item1.jpg'
import NescafeClassic from '../nescafe_1.webp'
import Gatorade from '../gatorade.png'


// ** BRANDS
import Nescafe from '../images/brands/nescafe.png'
import Apple from '../images/brands/apple.png'
import Asus from '../images/brands/asus.png'
import BirdsEye from '../images/brands/birds-eye.png'
import Kelloggs from '../images/brands/kelloggs.png'
import Greegs from '../images/brands/greegs.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function GroceryApp() {
  return (
    <>
      <nav className="border-b-2 border-gray-100">
        <div className="base-container mx-auto flex items-center gap-3 p-4">
          <a href="/" className="flex gap-2">
            <button>
              <FontAwesomeIcon icon={icon({name: 'bars', style: 'solid'})} />
            </button>
            <span>Menu</span>
          </a>
          {/* main menu */}

          <div className="flex items-center">
            <img src={GroceryAppLogo} className="h-auto w-7 shrink-0" alt="" />
            <span className="font-size-really-small line-height-really-small font-bold italic text-slate-500">
              Grocery <br />
              App
            </span>
          </div>
          {/* LOGO */}

          <form className="relative ml-10 w-96">
            <label htmlFor="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"></path>
                </svg>
              </span>
            </label>
            <input
              type="text"
              className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Search for more than 10,000 products"
            />
          </form>
          {/* SEARCH FORM */}

          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div>
                <p className="text-right text-xs text-slate-500">Need help?</p>
                <p className="text-xs">+44 020 81234567</p>
              </div>
              <div>
                <button className="rounded-full bg-gray-100 py-2 px-3">
                  <FontAwesomeIcon
                    icon={icon({name: 'phone-volume', style: 'solid'})}
                  />
                </button>
              </div>
            </div>
            {/* contact */}

            <div className="flex items-center gap-2">
              <div>
                <p className="text-xs font-bold">Locate Store</p>
              </div>
              <div>
                <button className="rounded-full bg-green-100 py-2 px-4">
                  <FontAwesomeIcon
                    icon={icon({name: 'location-dot', style: 'solid'})}
                    className="text-green-600"
                  />
                </button>
              </div>
            </div>
            {/* map */}

            <div className="flex items-center gap-2">
              <div>
                <p className="text-xs font-bold">My Cart</p>
              </div>
              <div>
                <button className="relative rounded-full bg-orange-200 py-2 px-3">
                  <FontAwesomeIcon
                    icon={icon({name: 'bag-shopping', style: 'solid'})}
                    className="text-orange-500"
                  />
                  <span className="top-n-cart right-n-cart font-size-really-small absolute w-4 rounded-full bg-orange-500 text-white">
                    7
                  </span>
                </button>
              </div>
            </div>
            {/* My Cart */}
          </div>
        </div>
        {/* end of container */}
      </nav>
      {/* end of navigation */}
      <div className="base-container mx-auto p-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{clickable: true}}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <img src={CoverHero1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* end of slider hero */}
      <div className="base-container mx-auto rounded-lg p-4">
        <div className="background-subscription-form flex items-center justify-between rounded-lg p-5">
          <div className="flex items-center gap-5">
            <img src={DeliveryCar} alt="" />
            <div>
              <h3 className="text-xl font-bold uppercase">
                <span className="color-subscription-text-orange">
                  Free Delivery
                </span>{' '}
                <span className="color-subscription-text-blue">
                  On Next Day
                </span>
              </h3>
              <p className="text-slate-600">Spend only $35 on your purchases</p>
            </div>
          </div>
          {/* delivery info */}

          <div className="flex items-center">
            <p className="text-sm font-bold text-gray-600">
              Check if we can delivery to you
            </p>

            <form className="relative ml-10 w-96">
              <input
                type="text"
                className="block w-full rounded-md border border-slate-300 bg-white py-4 pl-4 pr-3 shadow-sm  placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Enter your postcode"
              />

              <label htmlFor="relative block">
                <span className="right-9rm absolute inset-y-0 flex items-center pr-4">
                  <FontAwesomeIcon
                    icon={icon({name: 'crosshairs', style: 'solid'})}
                    className="text-gray-500"
                  />
                </span>
              </label>

              <button className="absolute inset-y-2 right-2 rounded-md bg-green-500 px-4 py-1 text-sm font-bold text-white">
                Check Postcode
              </button>
            </form>
          </div>
          {/* form for query and check your post code */}
        </div>
      </div>
      {/* Subscription form */}
      <div className="base-container mx-auto p-4">
        <div className="mb-5 flex justify-between">
          <h4 className="font-bold">Shop By Categories</h4>
          <h4 className="font-bold text-orange-500">View All Categories</h4>
        </div>

        <div className="flex items-center justify-evenly gap-3">
          <a href="/">
            <div className="flex flex-col gap-3 text-center">
              <img src={Oil} alt="" className="mx-auto w-20" />
              <h3 className="">
                Oils, Redefined &amp; <br /> Ghee
              </h3>
            </div>
          </a>

          <a href="/">
            <div className="flex flex-col gap-3 text-center">
              <img src={Rice} alt="" className="mx-auto w-20" />
              <h3>
                Rice, Flour &amp; <br /> Grains
              </h3>
            </div>
          </a>

          <a href="/">
            <div className="flex flex-col gap-3 text-center">
              <img src={Food} alt="" className="mx-auto w-20" />
              <h3>
                Food <br /> Cupboard
              </h3>
            </div>
          </a>

          <a href="/">
            <div className="flex flex-col gap-3 text-center">
              <img src={Dals} alt="" className="mx-auto w-20" />
              <h3>
                Dals &amp; <br /> Pulses
              </h3>
            </div>
          </a>

          <a href="/">
            <div className="flex flex-col gap-3 text-center">
              <img src={Drink} alt="" className="mx-auto w-20" />
              <h3>
                Drinks &amp; <br /> Beverages
              </h3>
            </div>
          </a>

          <a href="/">
            <div className="flex flex-col gap-3 text-center">
              <img src={Fruits} alt="" className="mx-auto w-20" />
              <h3>
                Fresh Fruits &amp; <br /> Vegetable
              </h3>
            </div>
          </a>

          <a href="/">
            <div className="flex flex-col gap-3 text-center">
              <img src={Meals} alt="" className="mx-auto w-20" />
              <h3>
                Ready to Eat <br /> Meals
              </h3>
            </div>
          </a>

          <a href="/">
            <div className="flex flex-col gap-3 text-center">
              <img src={InstantMixes} alt="" className="mx-auto w-20" />
              <h3>
                Instant <br /> Mixes
              </h3>
            </div>
          </a>
        </div>
      </div>
      {/* food categories */}
      <div className="base-container mx-auto p-4">
        <div className="grid h-96 grid-cols-2 gap-4">
          <div className="color-banner-left relative flex items-center rounded-lg p-6">
            <div className="flex flex-col gap-10">
              <h2 className="text-color-current z-10 w-1/2 text-4xl font-bold">
                Baked and Other Products For Your Needs
              </h2>
              <span>
                <a
                  href="/"
                  className="flex w-1/4 items-center gap-4 rounded-md bg-green-500 px-5 py-3 text-center text-white hover:bg-green-700">
                  <span>Show Now</span>
                  <FontAwesomeIcon
                    icon={icon({name: 'arrow-right', style: 'solid'})}
                  />
                </a>
              </span>
            </div>
            <img
              src={BreedDogFood}
              alt=""
              className="absolute bottom-0 right-0"
            />
          </div>

          <div className="color-banner-right relative flex items-center rounded-lg p-6 ">
            <div className="flex flex-col gap-10">
              <h2 className="text-color-current z-10 w-1/2 text-4xl font-bold">
                Make your Breakfast Healthy And Easy
              </h2>
              <span>
                <a
                  href="/"
                  className="flex w-1/4 items-center gap-4 rounded-md bg-green-500 px-5 py-3 text-center text-white hover:bg-green-700">
                  <span>Show Now</span>
                  <FontAwesomeIcon
                    icon={icon({name: 'arrow-right', style: 'solid'})}
                  />
                </a>
              </span>
            </div>
            <img
              src={NescafeNido}
              alt=""
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
      {/* Brand show now */}
      <div className="base-container mx-auto p-4">
        <div className="mb-5 flex justify-between">
          <h4 className="font-bold">Popular Products</h4>
          <h4 className="font-bold text-orange-500">View All</h4>
        </div>

        <div className="grid grid-cols-5 gap-3">
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-200 p-4">
            <div className="">
              <span className="font-size-really-small mr-1 rounded-sm bg-orange-500 p-1 text-white">
                -20%
              </span>
              <span className="font-size-really-small rounded-sm bg-gray-200 p-1 text-gray-700">
                Limited Edition
              </span>
            </div>
            <img src={Item1} alt="" />
            {/* image */}
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-bold">
                Iceland Granny Smith Apples 6 pack
              </h3>
              {/* title */}
              <div>
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon
                  icon={icon({name: 'star', style: 'solid'})}
                  className="text-yellow-500"
                />
                <FontAwesomeIcon icon={icon({name: 'star', style: 'solid'})} />
              </div>
              {/* rating star */}
              <div className="text-slate-400">27p per 1 unit</div>
              {/* unit */}
              <div className="flex">
                <div className="w-1/2">
                  <div className="font-bold text-sky-500">$1.51</div>
                  <div className="text-slate-600 line-through">$1.81</div>
                </div>

                <div className="flex items-center gap-3 border border-orange-400 p-1">
                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'minus', style: 'solid'})}
                    />
                  </button>

                  <div className="text-slate-700">0</div>

                  <button className="rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                    <FontAwesomeIcon
                      icon={icon({name: 'plus', style: 'solid'})}
                    />
                  </button>
                </div>
              </div>
              {/* price */}
            </div>
          </div>
        </div>
        {/* PRODUCT LINE */}

        {/* Brand show now */}
      </div>

      <div className="base-container mx-auto mt-10 p-4">
        <div className="grid h-60 grid-cols-2 gap-4">
          <div className="last-left-color-banner relative flex items-center rounded-lg p-6">
            <div className="flex flex-col gap-5 pl-10">
              <div className="bg-capture-color w-1/4 rounded-full  bg-neutral-200 py-2 text-center text-lg font-bold text-white">
                $12.04
              </div>

              <h2 className="z-10 w-1/2 text-4xl font-bold uppercase text-white">
                Nescafe Original Flavoured
              </h2>
            </div>
            <img
              src={NescafeClassic}
              alt=""
              className="absolute -bottom-5 right-10 w-56"
            />
          </div>

          <div className="last-right-color-banner relative flex items-center rounded-lg p-6 ">
            <div className="flex flex-col gap-5 pl-10">
              <span className="bg-capture-color-last bg-capture-color w-1/4 items-center rounded-full py-2 text-center text-lg font-bold text-white">
                $0.89
              </span>

              <h2 className="z-10 w-1/2  text-4xl font-bold uppercase text-white">
                Gatorade ThiRST Quencher
              </h2>
            </div>
            <img
              src={Gatorade}
              alt=""
              className="absolute -bottom-5 right-20 w-28"
            />
          </div>
        </div>
      </div>

      <div className="base-container mx-auto mt-10 p-4">
        <div className="grid grid-cols-3 items-center justify-between gap-5">
          <div>
            <h3 className="text-3xl font-bold">
              More than 150+ Brands are available
            </h3>
          </div>

          <div className="col-span-2 ">
            <div className="grid grid-cols-7 items-center gap-6">
              <img src={Greegs} alt="" className="shrink-0" />

              <img src={BirdsEye} alt="" className="shrink-0" />

              <img src={Nescafe} alt="" className="shrink-0" />

              <img src={Kelloggs} alt="" className="shrink-0" />

              <img src={Asus} alt="" className="shrink-0" />

              <img src={Apple} alt="" className="shrink-0" />
            </div>
          </div>
        </div>
      </div>
      {/* more brands */}

      <div className="base-container mx-auto mt-10 p-4">
        <h3 className="mb-5 text-3xl font-bold">People are looking for</h3>
        <div className="flex flex-row flex-wrap gap-2">
          <h3 className="bg-light-green">Tommy hifiger casual dress</h3>
          <h3 className="bg-light-green">1080p wireless home security</h3>
          <h3 className="bg-light-green">1080p action camera</h3>
          <h3 className="bg-light-green">Collagen face mask</h3>
          <h3 className="bg-light-green">asics running shoes men</h3>
          <h3 className="bg-light-green">essential oil diffusers</h3>
          <h3 className="bg-light-green">multi coloured rug</h3>
          <h3 className="bg-light-green">
            Portable rechargeable bluetooth speaker
          </h3>
          <h3 className="bg-light-green">Buy whether protein powder</h3>
          <h3 className="bg-light-green">height adjustable desk</h3>
        </div>
      </div>

      <div className="base-container mx-auto mt-10 p-4">
        <div className="flex items-center justify-between">
          <h3 className="mb-5 text-xl font-bold">
            GroceryStore Key measures to ensure safety
          </h3>
          <h3 className="text-xl font-bold text-orange-500">Know more</h3>
        </div>
        <div className="flex flex-row gap-5">
          <div className="rounded-lg border border-green-400 bg-green-200 p-4">
            <h4 className="mb-2 font-bold">Best Safety Standards</h4>
            <p className="text-sm text-gray-600">
              Everyday we check temperature of our employees before they start
              their work.
            </p>
          </div>
          <div className="rounded-lg border border-orange-400 bg-orange-200 p-4">
            <h4 className="mb-2 font-bold">No-contact Delivery</h4>
            <p className="text-sm text-gray-600">
              Have your over dropped off at your door and gate for added safety.
            </p>
          </div>
          <div className="rounded-lg border border-blue-400 bg-blue-200 p-4">
            <h4 className="mb-2 font-bold">Regular Warehouse Cleaning</h4>
            <p className="text-sm text-gray-600">
              We keep on cleaning our warehouse to provide the sanitized
              products.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-5">
        <div className="base-container mx-auto grid grid-cols-3 items-center gap-3 p-4">
          <div className="flex gap-2 text-2xl">
            Need a notification for latest Offers &amp; Discounts?
          </div>

          <form className="relative ml-10 w-96">
            <input
              type="text"
              className="block w-full rounded-md border border-slate-300 bg-white py-4 pl-4 pr-3 shadow-sm  placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Type your email address"
            />
            <button className="absolute inset-y-2 right-2 rounded-md bg-green-500 px-4 py-1 text-sm font-bold text-white">
              Send Now!
            </button>
          </form>

          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div>
                <p className="text-right text-sm text-white text-slate-500 mb-3">
                  Follow Us on Social Media
                </p>
                <div className='flex gap-4 '>
                  <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill='white' d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                  <svg fill='white'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
                  </svg>
                  <svg fill='white'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
                  </svg>

                  <svg fill='white'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* contact */}
          </div>
        </div>
        {/* end of container */}
      </footer>

      <br />
      <br />
      <br />
    </>
  )
}
