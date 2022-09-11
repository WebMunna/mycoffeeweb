import { FaUndoAlt, FaSignOutAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logOut } from "../features/coffeeSlice"
import { cartDelete } from '../features/panelSlice'
import { useCart } from 'react-use-cart'




const HeadButtons = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { emptyCart } = useCart();
  
  
    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode } = coffeeState
  
   

    
    
    
  const onLogout = async () => {
    emptyCart()
    dispatch(cartDelete())

    dispatch(logOut())
    navigate('/login')
  }

  const homenButtonFunction = () => {
     navigate('/')
     

  }


    let headButtons = ` flex relative flex  absolute sticky top-[90px] w-full   z-40    `
    let homeBackBtn = ` lg:w-[110px] lg:h-[50px] md:w-[110px] md:h-[50px] sm:w-[100px] sm:h-[45px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center `
    let logOutBtn = `lg:w-[110px] lg:h-[50px] md:w-[110px] md:h-[50px] sm:w-[100px] sm:h-[45px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`
  return (
  
    <div className={headButtons}>
       <button onClick={homenButtonFunction} className={homeBackBtn}> <FaUndoAlt/>Home</button>
       <button onClick={onLogout} className={logOutBtn}><FaSignOutAlt/>LogOut</button>
    </div>
    
  )
}

export default HeadButtons