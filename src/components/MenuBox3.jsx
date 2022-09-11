import { Link } from "react-scroll"
import { useSelector } from "react-redux"
import { useEffect } from "react"

import Fade from 'react-reveal/Fade';

import AOS from 'aos'
import 'aos/dist/aos.css'

const MenuBox3 = () => {

  useEffect(() => {
   
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease'
    });
  },[])

  const coffeeState = useSelector((state) => state.coffeeState)
  const { nightMode } = coffeeState

    let menuBox = ' py-[10px] font-bold sm:w-[130px] md:w-[140px] lg:w-[140px] sm:h-[400px] lg:h-[500px] lg:h-[500px] flex flex-col items-center justify-around '
    let mList = `${nightMode ? 'bg-neutral-900' : 'bg-slate-100'} w-[100px] text-center mb-[5px]  rounded-md cursor-pointer shadow-md hover:shadow-sm`
  return (
    <>
            <ul  className={menuBox}>
               
              <Fade top>  <li className={mList}><Link to ='heroSetting' smooth={true} duration={1000} >Showcase Setting</Link></li> </Fade>
              <Fade top> <li className={mList}><Link to ='aboutSetting' smooth={true} duration={1000}  >About Setting</Link></li> </Fade>
              <Fade top> <li className={mList}><Link to ='menuSetting' smooth={true} duration={1000} >Menu Setting</Link></li> </Fade>
              <Fade bottom> <li className={mList}><Link to ='productSetting' smooth={true} duration={1000} >Product Setting</Link></li> </Fade>
              <Fade bottom> <li className={mList}><Link to ='reviewSetting' smooth={true} duration={1000} >Review Setting</Link></li> </Fade>
              <Fade bottom>  <li className={mList}><Link  to ='contactSetting' smooth={true} duration={1000} >Contact Setting</Link></li> </Fade>
              <Fade bottom> <li className={mList}><Link to ='blogSetting' smooth={true} duration={1000} >Blog Setting</Link></li> </Fade>
            </ul>
    </>
  )
}

export default MenuBox3