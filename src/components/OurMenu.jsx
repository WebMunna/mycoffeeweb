import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMenuData } from "../features/panelSlice"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import MenuItem from "./MenuItem"
import Loading from "./Loading"

const OurMenu = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()



    useEffect(() => {
        dispatch(getMenuData());
       
      
      }, [dispatch])

    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode } = coffeeState
    

    const panelState = useSelector((state) => state.panelState)
  const { menuData } = panelState


  const hpicture = menuData.map((data) => (
    data.title
  ))
  const hname = menuData.map((data) => (
    data.talk
  ))

  const hprice = menuData.map((data) => (
    data.picture
  ))

  const hpprice = menuData.map((data) => (
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
    let menuItems = ' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'
    let noItemsHere = ''

    
    let loadingBoxEdit = ' flex items-center justify-center font-semibold border-top-color:transparent text-[20px]'
    let loadingBarEdit = 'w-[50px] h-[50px] border-[10px] border-blue-400 border-dotted rounded-full animate-spin'

  return (
    <div id="menu" className={mainBox}>
    <div className={headingTitle}>
        <span className={aboutSpan}>OUR</span> <span className={usSpan}>MENU</span>
    </div>
    <div className={contents}>
      <div className={menuItems}>
        
             {panelState.getMenuDataStatus === "pending" &&  
            <Loading/> }
        
         
         {
           menuData.map((data) => (
             <MenuItem key={data._id} data={data} />
           ))
         }

         {
           menuData.length === 0 && <p className={noItemsHere}> There is no items. Please add Item from the admin panel</p>
         }


      </div>
    </div>
    </div>
 
  )
}

export default OurMenu