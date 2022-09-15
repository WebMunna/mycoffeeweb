import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHeroData } from "../features/panelSlice"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


import AOS from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()




    useEffect(() => {
   
      AOS.init({
        offset: 100,
        duration: 2000,
        easing: 'ease'
      });
    },[])


    useEffect(() => {
        dispatch(getHeroData());
       
      
      }, [dispatch])

    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode } = coffeeState
    

    const panelState = useSelector((state) => state.panelState)
    const { heroData } = panelState

    const htitle = heroData.map((data) => (
      data.title
    ))
    const htalk = heroData.map((data) => (
      data.talk
    ))
    const hpicture = heroData.map((data) => (
      data.picture
    ))
    const hcolor = heroData.map((data) => (
      data.color
    ))

    const userOrAdminHandler = () => {
      if(localStorage.getItem('admin')) {
          toast.error('Please logout for access User Panel', {
            position: toast.POSITION.TOP_CENTER
          })
          navigate('/adminpanel')
      } else {
        navigate('/login')
      }
    }
  
  
    const pic = hpicture.toString().replace('\\', '/')
    const img1 = `https://coffeewebapi.herokuapp.com/${pic}`


    const col = hcolor.toString()
   
   

    let hero = ` bg-cover sm:bg-center relative w-full sm:h-[400px] md:h-[500px] lg:h-[600px] flex  items-center `
    let contents = ' container mx-auto  lg:h-[200px] flex flex-col justify-between  md:w-[90%] lg:w-[90%]'
    let title = 'font-bold lg:text-[50px] md:text-[40px] sm:text-[30px] text-slate-300'
    let talk = 'text-[15px] font-semibold sm:w-[300px] md:w-[450px]'
    let button = ` bg-amber-600 text-slate-200 mt-[10px] sm:w-[140px] md:w-[140px] lg:w-[140px] cursor-pointer  h-[40px]   rounded-md drop-shadow-lg font-semibold flex items-center justify-center`

  

    


  return (
    <div  className={hero} style={{backgroundImage: `url(${img1})`}}>
    
     
        <div className={contents}>
            <div data-aos="zoom-in" className={title} style={{ color: `${col}` }} >
                {htitle}
            </div>
            <div data-aos="fade-up" className={talk}  style={{ color: `${col}` }} >
               {htalk}
            </div>
            <div data-aos="fade-up" className={button} onClick={userOrAdminHandler}>
                Get Yours Now
            </div>
        </div>
    </div>
  )
}

export default Hero
