import { useSelector } from "react-redux"
import { useEffect } from "react"
import Fade from 'react-reveal/Fade';

import AOS from 'aos'
import 'aos/dist/aos.css'

const Review = ({data}) => {


  useEffect(() => {
   
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease'
    });
  },[])


    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode } = coffeeState


    const pic = data.picture.toString().replace('\\', '/')
    const img1 = `https://coffeewebapi.herokuapp.com/${pic}`

    let mainBox = `  text-center h-[350px] flex flex-col items-center justify-between ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} drop-shadow-md`
    let shapes = ' w-[100px] flex items-center justify-center mx-auto'
    let shape = ' m-[5px] shape-1  w-[30px] h-[50px]'
    let rText = ' font-semibold'
    let itemPic = ' w-[100px] h-[100px] rounded-full'
    let rName = 'font-bold text-[25px]'
    let itemPicIn = 'rounded-full w-[100px] h-[100px]'
   
   

  return (
    <Fade bottom>
    <div 
    
    className={mainBox}>
      <div  className={shapes}>
        <div className={shape}></div>
        <div className={shape}></div>
      </div>
      <div  className={rText}>
        {data.reviewText}
      </div>
        <div  className={itemPic}>
            <img className={itemPicIn} src={img1} alt="item photo" />
        </div>
        <label className={rName}>{data.name}</label>
      
    </div>
    </Fade>
  )
}

export default Review