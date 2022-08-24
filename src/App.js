
import './App.css';
import leaf from './assets/leaf.png'
import vegetable from './assets/vegetable.png'
import dish from './assets/dish.png'
import chef from './assets/chef.png'
import driver from './assets/driver.png'
import avatar1 from './assets/avatar-1.jpeg'
import avatar2 from './assets/avatar-2.jpeg'
import avatar3 from './assets/avatar-3.jpeg'
import {AiFillStar} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {SiPytorchlightning} from 'react-icons/si'
const menus = ["Delivery", "Pricing", "FAQs", "Contact"];
function App() {
  return (
<div
    class="w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-white to-[rgb(128,177,59,0.2)]">

    <nav
      class="flex justify-between items-center py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24"
    >
      <a href="/" class="text-3xl md:text-4xl font-bold tracking-wide">
        Organ<span class="text-[#80b13b]">o</span>
      </a>
      <div
        class="hidden inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14"
      >
        <ul
          class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8"
        >
           <li
              class="text-lg md:text-base lg:text-lg font-medium group text-[#80b13b]"
            >
              <p className='cursor-pointer'> Home</p>
              <div
              class="h-0.5 bg-[#80b13b] scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            />
          </li>
          
            {menus.map((element) => (
              <li
              class="text-lg md:text-base lg:text-lg font-medium group"
            >
              <p className='cursor-pointer'> {element}</p>
              <div
              class="h-0.5 bg-[#80b13b] scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            />
          </li>
            ))}
            
        </ul>
        <button
          class="flex justify-center items-center h-12 px-7 font-medium text-white bg-[#80b13b] rounded-xl hover:shadow-lg transition-shadow duration-300 whitespace-nowrap"
        >
          Get started
        </button>
      </div>
      <button class="block md:hidden relative z-30">
        <GiHamburgerMenu />
      </button>
    </nav>

    <div
      class="flex flex-wrap-reverse gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
      <div class="relative z-10 md:w-1/2 w-full">
        <img
          class="absolute top-0 right-0 md:-top-4 md:-right-8 w-32 h-auto"
          src={leaf}
          alt=""
        />
        <span class="flex items-center px-1 text-xl text-[#80b13b]">
          <span class="font-medium">100% Organic food</span>
          <img class="w-auto h-8" src={vegetable} alt="" />
        </span>
        <h1
          class="pt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight whitespace-nowrap"
        >
          Healthy Lifestyle <br />
          is your only 
          <span class="whitespace-nowrap text-[#80b13b]"> unfair  </span>
          <br />
          <span class="whitespace-nowrap text-[#80b13b]">  advantage </span>
        </h1>
        <p class="pt-8 sm:text-lg max-w-md font-normal text-gray-600 leading-relaxed">
          Choose healthy habits with Organo daily meal prepared by our expert nutritionist
          and chef
        </p>
        <div class="flex pt-8 space-x-4 sm:space-x-6">
          <button
            class="flex justify-center items-center w-full sm:w-auto h-12 px-8 bg-[#80b13b] font-medium text-white rounded-xl whitespace-nowrap shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Get started
          </button>
          <button
            class="flex justify-center items-center w-full sm:w-auto h-12 px-8 font-medium text-gray-900 border border-gray-900 rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
          >
            Explore menu
          </button>
        </div>
        <div class="flex pt-20">
          <img class="w-24" src={chef} alt="" />
          <div class="pt-5 pl-3">
            <div class="text-xl font-bold leading-relaxed">Chef of the month</div>
            <div class="inline-flex text-gray-600 leading-relaxed">
              People loved his 🍳
            </div>
            <div class="font-bold text-[#80b13b] leading-relaxed">80+ famous dishes</div>
          </div>
        </div>
        <div>
          <div class="flex md:hidden pt-8 justify-end space-x-1 font-bold">
            <span>Powered by</span>
            {/* <FuelerIcon class="w-6 h-6 text-gray-900 fill-current" /> */}
            <span>Fueler</span>
          </div>
        </div>
      </div>

      <div class="relative md:w-1/2 w-full flex flex-col justify-between">
        <img
          class="w-96 lg:w-full drop-shadow-2xl self-center lg:self-end"
          src={dish}
          alt=""
        />
        <div
          class="absolute right-0 lg:-right-6 top-0 lg:top-28 flex flex-col py-5 px-7 rounded-2xl shadow-xl bg-white/80 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
        >
          <div class="flex -space-x-3">
            <div
              class="w-16 h-16 rounded-full border-4 border-white object-cover overflow-hidden"
            >
              <img src={avatar1}  alt="" />
            </div>
            <div
              class="w-16 h-16 rounded-full border-4 border-white object-cover overflow-hidden"
            >
              <img src={avatar2}  alt="" />
            </div>
            <div
              class="w-16 h-16 rounded-full border-4 border-white object-cover overflow-hidden"
            >
              <img src={avatar3} alt="" />
            </div>
          </div>
          <div class="pt-3 font-bold">Happy customers</div>
          <div class="flex items-center text-gray-600 leading-relaxed">
            <AiFillStar className='w-5 h-5 text-amber-400' />
            <span class="pl-1">4.9 (+2.5k Ratings)</span>
          </div>
        </div>
        <div
          class="absolute left-0 bottom-0 md:bottom-32 lg:bottom-16 flex bg-white/80 rounded-2xl shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
        >
          <img class="w-auto h-20 self-end" src={driver} alt="" />
          <div class="pr-7 pl-2 py-5">
            <div class="font-bold">Fast delivery</div>
            <div class="text-gray-600 leading-relaxed">30 mins delivery 🚀</div>
          </div>
        </div>
        <div class="hidden md:flex justify-end space-x-1 font-bold">
          <span>Powered by</span>
          <SiPytorchlightning class="w-6 h-6 text-gray-900 fill-current" />
          <span>Fueler</span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
