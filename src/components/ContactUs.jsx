import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getContactData } from "../features/panelSlice"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"



import Contact from "./Contact"
import Loading from "./Loading"

const ContactUs = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()



    useEffect(() => {
        dispatch(getContactData());
       
      
      }, [dispatch])

    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode } = coffeeState
    

    const panelState = useSelector((state) => state.panelState)
  const { contactData } = panelState


  const hpicture = contactData.map((data) => (
    data.title
  ))
  const hname = contactData.map((data) => (
    data.talk
  ))

  const hprice = contactData.map((data) => (
    data.picture
  ))

  const hpprice = contactData.map((data) => (
    data.picture
  ))

    const userOrAdminHandler = () => {
      if(localStorage.getItem('admin')) {
          toast.error('Please logout for access User Panel')
          navigate('/login')
      } else {
        navigate('/login')
      }
    }
  
  
    const pic = hpicture.toString().replace('\\', '/')
    const img1 = `http://localhost:5000/${pic}`


  
    let mainBox = 'pt-[70px] container w-[90%] mx-auto mt-[50px]'
    let headingTitle = 'mb-[20px] sm:text-[40px] md:text-[50px] lg:text-[50px] font-bold text-center'
    let aboutSpan = 'text-amber-500'
    let usSpan = ''
    let contents = ''
    let menuItems = ' '
    let noItemsHere = ''

    
    let loadingBoxEdit = ' flex items-center justify-center font-semibold border-top-color:transparent text-[20px]'
    let loadingBarEdit = 'w-[50px] h-[50px] border-[10px] border-blue-400 border-dotted rounded-full animate-spin'

  return (
    <div id="contact" className={mainBox}>
    <div className={headingTitle}>
        <span className={aboutSpan}>CONTACT</span> <span className={usSpan}>US</span>
    </div>
    <div className={contents}>
      <div className={menuItems}>
        
             {panelState.getContactDataStatus === "pending" &&  
             <Loading/> }
        
         
    
            
             <Contact  />
             
             
    

         {
           contactData.length === 0 && <p className={noItemsHere}> There is no items. Please add Item from the admin panel</p>
         }


      </div>
    </div>
    </div>
 
  )
}

export default ContactUs