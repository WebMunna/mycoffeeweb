
import { FaUserAlt, FaBars, FaMoon, FaSun} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


import MenuBox from "./MenuBox"
import logoI from '../img/default/logo.png'
import { menuButtonClick,  nightModeButtonClick  } from "../features/coffeeSlice"

import MenuBox2 from "./MenuBox2"
import MenuBox3 from "./MenuBox3"



const Header = () => {

  const coffeeState = useSelector((state) => state.coffeeState)

  
  const panelState = useSelector((state) => state.panelState)
  const { nightMode, menuButton  } = coffeeState
  const {  homePageLocated, userPanelLocated, adminPanelLocated } = panelState

 
 
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const menuButtonFunction = () => {
    dispatch(menuButtonClick())
    console.log('menu button function clicked')
  }

  const userButtonFunction = () => {
   navigate('/login')
  
  }




  let mainBox = `relative flex shadow-md ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} absolute sticky top-0 w-full   z-40   h-20 `
  let contents = 'container w-full  mx-auto flex justify-between items-center sm:w-[90%] md:w-[90%] lg:w-[90%]'
  let buttons = ' w-[200px] sm:flex md:flex lg:flex justify-between'
  let logo = `w-[60px] `


  let nightButton = `${nightMode ? 'bg-neutral-900' : 'bg-slate-100'} p-[7px] rounded-md bg-slate-100 cursor-pointer shadow-md hover:shadow-sm`
  let menuButtons = `${nightMode ? 'bg-neutral-900' : 'bg-slate-100'} p-[7px] rounded-md bg-slate-100 cursor-pointer shadow-md hover:shadow-sm`
  let userButtons = `${nightMode ? 'bg-neutral-900' : 'bg-slate-100'} p-[7px] rounded-md bg-slate-100 cursor-pointer shadow-md hover:shadow-sm`
 
  let menuBox = `z-200 rounded-md sm:pt-[50px] md:pt-[0px] lg:pt-[0px]  ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} absolute top-[82px]    sm:right-[1px] md:right-[1px] lg:right-[1px] ${!menuButton ? 'sm:hidden md:hidden' : 'sm:flex md:flex'} drop-shadow-md`



  if( nightMode ){
    document.querySelector('body').style.backgroundColor = '#18181b';
    document.querySelector('body').style.color = '#e2e8f0';   
} else {
    document.querySelector('body').style.backgroundColor = '#f1f5f9 ';
    document.querySelector('body').style.color = '#1e293b';
}

  return (
  
    <div className={mainBox}>

      <div className={contents}>

       <div className={logo}>
              <img src={logoI} alt='logo'/>
       </div>

 
{/* MENU BOX FOR MENU BUTTON */}

       <div className={menuBox}>
        { homePageLocated &&
         <MenuBox/>
         }
        
         {
            userPanelLocated &&
            <MenuBox2/> 
          
         
         }

         {
          adminPanelLocated &&
          <MenuBox3/>
         }
        
      
       </div>

{/* BUTTONS FOR MD AND SM SCREEN */}
     <div className={buttons}>
       <div className={nightButton} onClick={() => dispatch(nightModeButtonClick())} >
          
           {nightMode ? <FaSun size='25px'/>: <FaMoon size='25px'/>} 
       </div>
     
       <div className={userButtons} onClick={userButtonFunction} >
          
            <FaUserAlt size='25px'/>
       </div>

       <div className={menuButtons} onClick={menuButtonFunction} >
          
          <FaBars size='25px'/>
     </div>
       </div>

       </div>
       
    </div>
    
    
  )
}

export default Header