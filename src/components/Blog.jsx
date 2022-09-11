import { useSelector } from "react-redux"
import { useEffect } from "react"

import Fade from 'react-reveal/Fade';

import AOS from 'aos'
import 'aos/dist/aos.css'
const Blog = ({data}) => {



  useEffect(() => {
   
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease'
    });
  },[])


    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode } = coffeeState

    let nDate = new Date( data.createdAt)

    let date = nDate.toDateString()
   


    const pic = data.picture.toString().replace('\\', '/')
    const img1 = `http://localhost:5000/${pic}`

    let mainBox = `   h-[450px] rounded-md   flex flex-col items-left justify-between  ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} drop-shadow-md`
    let itemPic = '  '
    let itemPicIn = 'h-[230px] w-full rounded-md'
    let rName = 'font-bold text-[20px] p-[10px]  '
    let personDate = 'font-semibold text-[15px] p-[10px]'
    let bText = ' text-scroll font-semibold text-[17px] p-[10px] h-[100px]'
    let blogBtn = `m-[10px]  text-[15px] bg-amber-600 text-slate-200 mt-[10px] sm:w-[120px] md:w-[120px] lg:w-[140px] cursor-pointer  h-[40px]   rounded-md drop-shadow-lg font-semibold flex items-center justify-center`
   

  return (
    <Fade bottom>
    <div  className={mainBox}>
        <div  className={itemPic}>
            <img className={itemPicIn} src={img1} alt="item photo" />
        </div>
        <div  className={rName}>{data.name}</div>
        <div  className={personDate}>
           By {data.person} / {date}
        </div>
        <div  className={bText}>
           {data.blogText}
        </div>
        <button className={blogBtn}>Read More</button>
    </div>
    </Fade>
  )
}

export default Blog