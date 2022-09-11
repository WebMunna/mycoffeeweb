import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAboutData } from "../features/panelSlice"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"



import AOS from 'aos'
import 'aos/dist/aos.css'


const About = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()



    useEffect(() => {
   
      AOS.init({
        offset: 100,
        duration: 700,
        easing: 'ease'
      });
    },[])


    useEffect(() => {
        dispatch(getAboutData());
        dispatch(getAboutData());
        dispatch(getAboutData());
       
      
      }, [dispatch])

    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode } = coffeeState
    

    const panelState = useSelector((state) => state.panelState)
  const { aboutData } = panelState


  const htitle = aboutData.map((data) => (
    data.title
  ))
  const htalk = aboutData.map((data) => (
    data.talk
  ))

  const hpicture = aboutData.map((data) => (
    data.picture
  ))

    const userOrAdminHandler = () => {
      if(localStorage.getItem('admin')) {
          toast.error('Please logout for access User Panel')
          navigate('/adminpanel')
      } else {
        navigate('/login')
      }
    }
  
  
    const pic = hpicture.toString().replace('\\', '/')
    const img1 = `http://localhost:5000/${pic}`


    let mainBox = 'pt-[70px] container w-[90%] mx-auto '
    let headingTitle = 'mb-[20px] sm:text-[40px] md:text-[50px] lg:text-[50px] font-bold text-center'
    let aboutSpan = 'text-amber-500'
    let usSpan = ''
    let contents = ` rounded-md flex sm:flex-col md:flex-row lg:flex-row ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} shadow-md `
    let imageBox = 'rounded-md sm:w-[100%] md:w-[50%] lg:w-[50%]  sm:h-[250px] md:h-[300px] lg:h-[400px] bg-cover bg-center'
    let textContentBox = ' sm:w-[100%] md:w-[50%] lg:w-[50%] p-[20px] flex flex-col justify-between sm:h-[300px] md:h-[300px] lg:h-[400px]'
    let title = 'sm:text-[20px] md:text-[25px] lg:text-[30px] font-bold'
    let talk = ' sm:text-[15px] md:text-[15px] lg:text-[20px] font-semibold text-scroll sm:h-[150px] md:h-[200px] lg:h-[230px]'
    let button = ` bg-amber-600 text-slate-200 mt-[10px] sm:w-[140px] md:w-[140px] lg:w-[140px] cursor-pointer lg:w-[100px] h-[40px]   rounded-md drop-shadow-lg font-semibold flex items-center justify-center`



  return (
      <div id="about" data-aos="zoom-in" data-aos-offset="0" className={mainBox}>
      <div className={headingTitle}>
          <span className={aboutSpan}>ABOUT</span> <span className={usSpan}>US</span>
      </div>
    <div className={contents}>
        <div className={imageBox} style={{ backgroundImage: `url(${img1})`}}>
           
        </div>
        <div  className={textContentBox}>

        <div className={title}  >
                {htitle}
            </div>
            <div className={talk}  >
               {htalk}
            </div>
            <div className={button} onClick={userOrAdminHandler}>
                Learn More
            </div>
        </div>

    </div>
    </div>
  )
}

export default About