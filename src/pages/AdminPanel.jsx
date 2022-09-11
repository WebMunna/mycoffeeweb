import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logOut } from "../features/coffeeSlice"

import ShowcaseSetting from "../components/ShowcaseSetting"
import AboutSetting from "../components/AboutSetting"
import  OurMenuSetting  from "../components/OurMenuSetting"
import HeadButtons from "../components/HeadButtons"
import OurProductSetting from "../components/OurProductSetting"
import ReviewSetting from "../components/ReviewSetting"
import BlogField from "../components/BlogField"
import ContactResponse from "../components/ContactResponse"
import { adminPanelPageTrigger } from "../features/panelSlice"

import { useEffect } from "react"


const AdminPanel = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  


  useEffect(() => {
   dispatch(adminPanelPageTrigger())
   console.log('admin panel page triggered')
  })


  const coffeeState = useSelector((state) => state.coffeeState)
  const { nightMode } = coffeeState





  const onLogout = () => {
    dispatch(logOut())
    navigate('/login')
  }

  const admin = JSON.parse(localStorage.getItem('admin'))
  const adminName = admin.name
  


  let head = 'relative container w-[80%] font-bold   mx-auto '
 
  let welcomneText = ' text-center sm:text-[50px] md:text-[55px] lg:text-[60px]'
  let nameOfAdmin = 'lg:text-[50px]'
  let toPanelText = 'text-[30px]'
  

  
  return (
    <>
  <HeadButtons/>
<div className={head}>
   
    <div className={welcomneText}>Welcome <span className={nameOfAdmin}>{adminName}</span> <br/> <span className={toPanelText}>To Admin Panel</span> </div>
</div>
     <ShowcaseSetting/>
     <AboutSetting/>
     <OurMenuSetting/>
     <OurProductSetting/>
     <ReviewSetting/>
     <ContactResponse/>
     <BlogField/>
    </>
  )
}

export default AdminPanel