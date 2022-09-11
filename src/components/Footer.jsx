import { useSelector } from "react-redux"
import { FaBars } from 'react-icons/fa'
import { Link } from "react-scroll"
import { useEffect } from "react"

import Fade from 'react-reveal/Fade';

import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(() => {
   
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease'
    });
  },[])

    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode } = coffeeState
  
   

    let mainBox = `h-[200px] p-[20px] flex flex-col items-center justify-between w-full mt-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'}`
    let icon = ''
    let menus = 'sm:w-[100%] md:w-[90%] lg:w-[90%]  py-[10px] mx-auto font-bold  flex  items-center justify-between  rounded-b-md'
    let mList = ` text-scroll sm:text-[10px] md:text-[15px] lg:text-[15px] sm:m-[1px] md:m-[5px] lg:m-[5px] flex items-center justify-center ${nightMode ? 'bg-neutral-900' : 'bg-slate-100'} w-[150px] text-center mb-[5px] h-[40px] rounded-md cursor-pointer shadow-md hover:shadow-sm`
    let woner = 'font-semibold text-center'
    let wonerName = 'font-bold text-amber-600'
  return (
    <div className={mainBox}>
        <div className={icon}><FaBars/></div>
       
        <ul  className={menus}>
              <Fade left > <li className={mList}><Link>Home</Link></li> </Fade>
               <Fade left > <li className={mList}><Link>About</Link></li> </Fade>
              <Fade left > <li className={mList}><Link>Menu</Link></li> </Fade>
              <Fade bottom > <li className={mList}><Link>Product</Link></li> </Fade>
              <Fade right >  <li className={mList}><Link>Review</Link></li> </Fade>
               <Fade right >  <li className={mList}><Link>Contact</Link></li>  </Fade>
              <Fade right >  <li className={mList}><Link>Blogs</Link></li> </Fade>
         </ul>
     
        <div className={woner}>
            Developed by <span className={wonerName}>Munna Islam Apu </span> || All Right Reserved
        </div>
    </div>
  )
}

export default Footer