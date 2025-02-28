import { FiLoader } from "react-icons/fi";
import { PiSquareThin } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { BiArrowToBottom } from "react-icons/bi";
import { BsCircleHalf } from "react-icons/bs";
import hero3 from"../src/assets/gambar/hero3.png"
import hero4 from"../src/assets/gambar/hero4.png"
import hero9 from"../src/assets/gambar/hero9.png"
import hero6 from"../src/assets/gambar/hero6.png"
import foto1 from"../src/assets/gambar/foto1.png"
import email from"../src/assets/emailwhite.svg";
import foto3 from"../src/assets/gambar/foto3.png"
import fotopas01 from"../src/assets/gambar/fotopas01.png"

import './App.css'

export default function App() {

  function handleClick(){
    const mobile = document.getElementById('navigasi');
    const navmenu = document.getElementById('mobileMenu');
    mobile.classList.toggle('tandax');
    navmenu.classList.toggle('hidden')
    
   }
 
  

  return (
  
    <div className="bg-[#54595F]">
      <header className="bg-linear-to-t from-[#54595F] to-[#7A7A7A] fixed z-999 top-0 left-0 w-full ">
  <nav className="container  mx-auto px-6 py-3 bg-transparent ">
    <div className="flex items-center justify-between">
      <div className="text-white font-bold text-xl">
        <a href="#">Ahmad Soleh Mihardi</a>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center space-x-8">
          <li><a href="#hero" className="text-white hover:text-amber-100 duration-300 font-semibold block pb-2 text-sm">Home</a></li>
          <li><a href="#project" className="text-white hover:text-amber-100 duration-300 font-semibold block pb-2 text-sm">Project</a></li>
          <li><a href="#whyMe" className="text-white hover:text-amber-100 duration-300 font-semibold block pb-2 text-sm">Services</a></li>
          <li><a href="#contact" className="text-white hover:text-amber-100 duration-300 font-semibold block pb-2 text-sm">Contact</a></li>
        </ul>
      </div>
      
        <button className="hamburger md:hidden"  id="navigasi" onClick={handleClick} >
        </button>
      
    </div>
    <div className="hidden md:hidden " id='mobileMenu'>
      <ul className="mt-4 space-y-4">
        <li><a href="#hero" className="block px-4 py-2 text-white bg-gray-900 rounded hover:text-amber-100 duration-300 font-semibold  pb-2 text-sm">Home</a></li>
        <li><a href="#project" className="block px-4 py-2 text-white bg-gray-900 rounded hover:text-amber-100 duration-300 font-semibold  pb-2 text-sm">Project</a></li>
        <li><a href="#whyMe" className="block px-4 py-2 text-white bg-gray-900 rounded hover:text-amber-100 duration-300 font-semibold  pb-2 text-sm">Services</a></li>
        <li><a href="#contact" className="block px-4 py-2 text-white bg-gray-900 rounded hover:text-amber-100 duration-300 font-semibold  pb-2 text-sm ">Contact</a></li>
      </ul>
    </div>
    
  </nav>
</header>
     <section className="container " id="hero">
      <div className='mx-auto md:flex md:mt-18 md:gap-40 md:px-32 '>
        <div className='w-[full] h-90 mt-20 bg-linear-to-t from-[#54595F] to-[#7A7A7A] rounded-md overflow-hidden md:w-2/6 md:h-3/2 md:flex '>
          <div className="w-[50%] mx-auto pt-14 md:w-4/4 md:order-last relative">
            
            <img src={foto1} alt="foto1" className="w-3/2 h-3/2 mx-auto grayscale-50 relative z-10 md:w-3/4 md:h-3/3"/>
            
          <FiLoader className="w-32 h-32 text-[#23A455] grayscale-75  gambarBerputar absolute top-10 -left-10  md:left-0 md:top-20  " />
          <PiSquareThin className="w-22 h-22 text-[#6EC1E4] gambarMembesar2 absolute top-10 left-30 md:top-0 md:left-32 md:w-24 md:h-24
          "/>
          
          
          </div>
        </div>
        <div className="mt-10 md:w-1/2 md:order-first md:pt-20 relative md:text-left">
        <BsCircleHalf className="w-16 h-16 text-amber-100 opacity-10 gambarMuter absolute hidden md:block md:top-8 -left-8 gambarMembesar" />
          <h3 className="text-[#23A455] font-bold md:text-2xl">Hi, i'm Ahmad Soleh Mihardi</h3>
          <h1 className="font-judul ">UI/UX Designer, Front End Developher</h1>
          <p className="paragraf mt-8 md:text-xl">I’m from Indonesia and I have been working as a UI UX designer for more than 3 years. I’ve worked as a web designer and front-end developer for 2 years, I build my own web development, and I’ve been freelancing since 2022,</p>
          <div className="mt-16 mb-4 flex items-center gap-5 cursor-pointer md:mt-20">
            <a href="#" className=" py-4 px-6 bg-[#61CE70] flex gap-2 w-30 items-center font-semibold text-white rounded-lg hover:bg-[#23A455] duration-300 md:px-16 md:w-52 md:text-xl"><MdEmail className="w-6 h-6 text-white md:w-10 md:h-10"/> Email</a>
            <FaInstagram className="w-8 h-8 text-gray-400 hover:text-gray-300 hover:w-9 hover:h-9 duration-300"/>
            <FaWhatsapp className="w-8 h-8 text-gray-400 hover:text-gray-300 hover:w-9 hover:h-9 duration-300"/>
            <FaFacebook className="w-8 h-8 text-gray-400 hover:text-gray-300 hover:w-9 hover:h-9 duration-300"/>
          </div>
          <a href="#" className="mb-8 flex gap-2  items-center font-normal w-1/2 text-white rounded-lg hover:text-[#23A455] duration-300"><BiArrowToBottom className="w-6 h-6 text-white hover:text-[#23A455] duration-300"/> Download CV</a>
          
        </div>
      </div>
     </section>
     <section id='project'>
  <div className='pt-32 pb-20 w-full '>    
    <div className='w-[90%] mx-auto'>
    <h1 className='text-4xl mb-10 lg:font-bold lg:text-6xl text-amber-100'>Selected Project</h1>
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col gap-8'> 
        <img src={hero3} alt="" className='rounded-xl' />
        <h3 className='md:text-lg text-xl font-semibold text-gray-100 hover:text-gray-500 duration-300 flex gap-3 items-center'><img src="../src/assets/file.svg" alt="" className='lg:w-5 w-7 fill-gray-100'/></h3>
        </div>
        <div className='flex flex-col gap-8'> 
        <img src={hero4} alt="" className='rounded-xl' />
        <h3 className='md:text-lg text-xl font-semibold text-gray-100 hover:text-gray-500 duration-300 flex gap-3 items-center'><span ><img src="../src/assets/file.svg" alt="" className='lg:w-5 w-7 fill-gray-100'/></span></h3>
        </div>
        <div className='flex flex-col gap-8'> 
        <img src={hero9} alt="" className='rounded-xl' />
        <h3 className='md:text-lg text-xl font-semibold text-gray-100 hover:text-gray-500 duration-300 flex gap-3 items-center'><span ><img src="../src/assets/file.svg" alt="" className='lg:w-5 w-7 fill-gray-100'/></span></h3>
        </div>
        <div className='flex flex-col gap-8'> 
        <img src={hero6} alt="" className='rounded-xl' />
        <h3 className='md:text-lg text-xl font-semibold text-gray-100 hover:text-gray-500 duration-300 flex gap-3 items-center'><span ><img src="../src/assets/file.svg" alt="" className='lg:w-5 w-7 fill-gray-100'/></span></h3>
        </div>
        </div>
    </div>
  </div>
</section>
<section id='contact'>
  <div className='w-full mt-8 mb-20'>
      <div className="md:w-full w-[90%] mx-auto bg-[#7A7A7A] rounded-lg pt-4 md:flex md:items-center md:justify-between md:px-52 md:py-20 py-12 flex flex-wrap justify-center gap-4">
      
        <h1 className='text-xl font-bold text-white text-center md:text-2xl'>Interested working with me?</h1>
        <div className=' flex justify-center gap-5 '>
          {/* <a href="#" className='py-3 px-3 border rounded-lg border-green-500 text-white hover:text-gray-200 hover:font-semibold duration-300 cursor-pointer'>See More Project</a> */}
          <a href="#" className='py-3 px-3 bg-yellow-500 rounded-lg border-gray-500 text-white hover:bg-yellow-600 duration-300 flex gap-2 cursor-pointer md:px-10 '> <img src={email} alt="" className='w-5 '/>Email Me</a>
        </div>
      </div>
    </div>
  
</section>
<section id='whyMe'>
<h1 className='text-4xl mb-10 lg:font-bold lg:text-5xl text-amber-100 text-center lg:mb-20 pt-20' >Why Hire Me</h1>
<div className='flex flex-wrap gap-10 md:gap-3 md:px-6 justify-center'>
{/* component */}
<div className="max-w-md py-4 px-8 bg-linear-to-t from-[#54595F] to-[#7A7A7A] shadow-lg rounded-lg my-20 md:w-[24%]">
  <div className="flex justify-center -mt-24 mb-10 md:-mt-25">
    <img className="w-[50%] object-cover rounded-full  border-indigo-500 grayscale" src={fotopas01}/>
  </div>
  <div >
    <h2 className="text-gray-800 text-3xl font-semibold text-center lg:text-xl">Collaborativ</h2>
    <p className="mt-2 paragraf text-center">I can work within a team, collaborate well with developers because Im frontend-end myself, and I love feedbacks.</p>
  </div>
  
</div>
<div className="max-w-md py-4 px-8 bg-linear-to-t from-[#54595F] to-[#7A7A7A] shadow-lg rounded-lg my-20 md:w-[24%]">
  <div className="flex justify-center  -mt-28 mb-10 md:-mt-30">
    <img className="w-[35%]  object-cover rounded-full  border-indigo-500 grayscale" src={foto3}/>
  </div>
  <div >
    <h2 className="text-gray-800 text-3xl font-semibold text-center lg:text-xl">Communicative</h2>
    <p className="mt-4 paragraf text-center">I communicate what I struggle to make all crystal clear. I can communicate my ideas well, proven by my videos.</p>
  </div>
  
</div>
<div className="max-w-md py-4 px-8 bg-linear-to-t from-[#54595F] to-[#7A7A7A] shadow-lg rounded-lg my-20 md:w-[24%]"> 
  <div className="flex justify-center  -mt-28 mb-10 md:-mt-25">
    <img className="w-[50%] object-cover rounded-full  border-indigo-500 grayscale" src={fotopas01}/>
  </div>
  <div >
    <h2 className="text-gray-800 text-3xl font-semibold text-center lg:text-xl">Management Freak</h2>
    <p className="mt-2 paragraf">In Duosweb.com, I manage the whole process from acquiring clients, project timeline, until product delivery.</p>
  </div>
  
</div>
<div className="max-w-md py-4 px-8 bg-linear-to-t from-[#54595F] to-[#7A7A7A] shadow-lg rounded-lg my-20 md:w-[24%]">
  <div className="flex justify-center  -mt-28 mb-10 md:-mt-30">
    <img className="w-[35%] object-cover rounded-full  border-indigo-500 grayscale" src={foto3}/>
  </div>
  <div >
    <h2 className="text-gray-800 text-3xl font-semibold text-center lg:text-xl">Client’s Favourite</h2>
    <p className="mt-2 paragraf">I’ve been freelancing for 7 years, working directly with overseas clients and all I heard are positive reviews.</p>
  </div>
  
</div>
</div>
</section>
<footer className="relative bg-blueGray-200 pt-8 pb-6 bg-linear-to-t from-[#54595F] to-[#7A7A7A]">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">Lets keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        {/* <div className="mt-6 lg:mb-0 mb-6">
          <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-github"></i>
          </button>
        </div> */}
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-amber-100 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-amber-100 duration-300 font-normal block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-amber-100 duration-300 font-normal block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-amber-100 duration-300 font-normal block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-amber-100 duration-300 font-normal block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-amber-100 text-sm font-semibold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-amber-100 duration-300 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-amber-100 duration-300 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-amber-100 duration-300 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-amber-100 duration-300 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    
  </div>
</footer>
    </div>
    
  )
}


