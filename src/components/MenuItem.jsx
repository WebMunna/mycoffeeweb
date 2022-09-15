import { useSelector } from "react-redux"
import { useEffect } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'


const MenuItem = ({data}) => {


    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode } = coffeeState


    useEffect(() => {
   
      AOS.init({
        offset: 100,
        duration: 700,
        easing: 'ease'
      });
    },[])


    const pic = data.picture.toString().replace('\\', '/')
    const img1 = `https://coffeewebapi.herokuapp.com/${pic}`

    let mainBox = `p-[5px] flex flex-col items-center   ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} drop-shadow-md`

    let itemPic = 'w-[100px] h-[100px] rounded-full'
    let itemPicIn = 'rounded-full w-[100px] h-[100px]'
    let itemName = 'font-bold text-[25px]'
    let itemPrices = 'font-bold text-[20px]'
    let prvprice = 'font-semibold text-[15px]'
    let cartButton = ` bg-amber-600 text-slate-200 mt-[10px] sm:w-[140px] md:w-[140px] lg:w-[140px] cursor-pointer lg:w-[100px] h-[40px]   rounded-md drop-shadow-lg font-semibold flex items-center justify-center`

  return (
    <div data-aos='zoom-in'
    data-aos-offset="0"
    data-aos-once="false"
     className={mainBox}>
        <div className={itemPic}>
            <img className={itemPicIn} src={img1} alt="item photo" />
        </div>
        <div  className={itemName}>
             {data.name}
        </div>
        <div  className={itemPrices}>
          {data.price}$     <del className={prvprice}>{data.pprice}$</del>
        </div>
        {/* <button  className={cartButton}>Order Now</button> */}
    </div>
  )
}

export default MenuItem