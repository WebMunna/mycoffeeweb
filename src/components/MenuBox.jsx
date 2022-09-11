import { Link } from "react-scroll"
import { useSelector } from "react-redux"
import { useEffect } from "react"

import Fade from 'react-reveal/Fade';

import AOS from 'aos'
import 'aos/dist/aos.css'

const MenuBox = () => {

  useEffect(() => {
   
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease'
    });
  },[])

  const coffeeState = useSelector((state) => state.coffeeState)
  const { nightMode } = coffeeState

    let menuBox = 'py-[10px] font-bold sm:w-[130px] md:w-[140px] lg:w-[140px] sm:h-[400px] lg:h-[500px] lg:h-[500px] flex flex-col items-center justify-around '
    let mList = `${nightMode ? 'bg-neutral-900' : 'bg-slate-100'} w-[100px] text-center mb-[5px] h-[30px] rounded-md cursor-pointer shadow-md hover:shadow-sm`
  return (
    <>
            <ul  className={menuBox}>
              <Fade top>  <li className={mList} ><Link to ='home' smooth={true} duration={1000} >Home</Link></li> </Fade>
              <Fade top> <li className={mList}><Link to ='about' smooth={true} duration={1000}  >About</Link></li> </Fade>
              <Fade top> <li className={mList}><Link to ='menu' smooth={true} duration={1000} >Menu</Link></li> </Fade>
              <Fade bottom>  <li className={mList}><Link to ='product' smooth={true} duration={1000} >Product</Link></li> </Fade>
              <Fade bottom>  <li className={mList}><Link to ='review' smooth={true} duration={1000} >Review</Link></li> </Fade>
              <Fade bottom> <li className={mList}><Link  to ='contact' smooth={true} duration={1000} >Contact</Link></li> </Fade>
              <Fade bottom> <li className={mList}><Link to ='blogs' smooth={true} duration={1000} >Blogs</Link></li> </Fade>
            </ul>
    </>
  )
}

export default MenuBox