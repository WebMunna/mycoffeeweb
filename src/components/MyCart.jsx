import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaWrench, FaCog, FaTimes } from 'react-icons/fa'
import { logOut } from "../features/coffeeSlice"
import { getCartData, cartEdit  } from "../features/panelSlice"
import { toast } from 'react-toastify'
import { useCart } from "react-use-cart";


import AOS from 'aos'
import 'aos/dist/aos.css'
import Cart from "./Cart"


const MyCart = () => {

  


  const navigate = useNavigate()
  const dispatch = useDispatch()



  

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();


  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease'
    });
  },[])


 

  useEffect(() => {
    dispatch(getCartData())
  
    
  }, [dispatch])


  const coffeeState = useSelector((state) => state.coffeeState)
  const { nightMode } = coffeeState

  const panelState = useSelector((state) => state.panelState)
  const { cartData, cartDeleteStatus, cartTotal } = panelState


const mainUser = JSON.parse(localStorage.getItem('user'))
const id = mainUser._id


  const myCartData = cartData.filter(e => e.userId === id)
  console.log(myCartData)

  // useEffect(() => {
  //   dispatch(getCartData())
  //   if(cartDeleteStatus === 'fulfilled') {
    
  //     dispatch(getCartData())
  //     dispatch(getCartData())
  //     }
    
  // }, [dispatch])

  // const myCartData2 = [
  //   ...new Map(cartData.map((item) => [item[item.userId === id], item])).values(),
  // ]

  // console.log(myCartData2)

  // const mainUser = JSON.parse(localStorage.getItem('user'))
  // const hname = mainUser.name
  // const hnumber = cartData.number
  // const haddress = cartData.address

  // const hpicture = cartData.picture









  const user = JSON.parse(localStorage.getItem('user'))
  const userName = user.name
  

  useEffect(() => {
     if(!localStorage.getItem('user')){
         navigate('/login')
     }
  })

  const onLogout = () => {
    dispatch(logOut())
    navigate('/login')
  }



 
  const currentCartTotal = cartTotal/2
  console.log(currentCartTotal)




 

 

  // const pic = hpicture.toString().replace('\\', '/')
  // const img1 = `http://localhost:5000/${pic}`






  


  let  head = 'relative container w-[80%] font-bold   mx-auto drop-shadow-md'
  

  let cartTitle = 'pb-[20px] text-[30px] flex justify-center items-center'
  let cartSection = `lg:mt-[100px] md:mt-[100px] sm:mt-[50px] `
  let cart = `pt-[30px]  rounded-lg relative sm:w-full  md:w-full lg:w-full flex flex-col items-center ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} `

  let contents = '  container mx-auto   flex flex-col justify-between w-[90%]'
  let orderBox = '  px-[60px] h-[50px] w-full rounded-b-md flex justify-between items-center'
  let orderButton = ` bg-amber-600 text-slate-200  sm:w-[140px] md:w-[140px] lg:w-[140px] cursor-pointer  h-[40px]   rounded-md drop-shadow-lg font-semibold flex items-center justify-center`
  let subTotal = ''
  

  let noAccess = 'font-bold text-red-200'

  return (
    <>
    {
      localStorage.getItem('user') ? 
      <>
     
     <div data-aos='zoom-in' className={head}>
     
     

     <>


     <div className={cartSection}>
     <div className={cartTitle}><FaCog/>My Cart</div>
     <div className={cart} >
    
    
    
    

        <div className={contents}>

          {
            myCartData.map((data) => (
              <Cart key={data._id}  data={data}/>
            ))
          }

        </div>

        <div className={orderBox}>
          <button className={orderButton}>Place Order</button>
          <div className={subTotal}>
             SubTotal: {currentCartTotal} tk
          </div>
        </div>

    </div>
     </div>
     </>
     </div>
      </>
      : 
      <>
      <div className={noAccess}>
       <h1>You Have no access in the user panel</h1>
       <p>Please Complete your registration</p>
      </div>
      </>
    }

    </>
  )
}

export default MyCart