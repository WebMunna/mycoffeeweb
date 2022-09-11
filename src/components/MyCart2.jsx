import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {  FaCog, FaUndoAlt, FaSignOutAlt } from 'react-icons/fa'
import { logOut } from "../features/coffeeSlice"
import { getCartData, cartEdit  } from "../features/panelSlice"
import { toast } from 'react-toastify'
import { useCart } from "react-use-cart";
import { cartPageTrigger } from "../features/panelSlice"

import axios from "axios"





import AOS from 'aos'
import 'aos/dist/aos.css'
import Cart2 from "./Cart2"
import Loading from "./Loading"



const stripe = window.Stripe('pk_test_51LX6csLlE8LmxDRF2TlC0jkyYLofkuQZppSFKmHap3T5ZVUaH8vrItEvFgneNGvpHdWgJebSdrQSy0P0H4NAsTg3004Y12T6dX');


const MyCart2 = () => {


  const [latestData, setLatestData] = useState('')

  


  const navigate = useNavigate()
  const dispatch = useDispatch()


 

  

  const {
   
    items,
    setItems,
    cartTotal,
    addItem
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
  const { cartData, cartDeleteStatus, paymentData, cartPageLocated, userPanelLocated } = panelState


const mainUser = JSON.parse(localStorage.getItem('user'))
const id = mainUser._id


// const product = cartData.filter(e => e.userId === id)



// const testFunction = () => {
//   if (cartData){

//     const myData = cartData
//   const myItem = myData.map((item) => item.items)
//   const item2 = myItem[0].map((data) =>  addItem({id: data._id, picture: data.picture, name: data.name, price: data.price}))
//  console.log(item2)
//   }
// }





useEffect(() => {
  if(!userPanelLocated){
    dispatch(cartPageTrigger())
    console.log('cart page triggered')
  }

  

 })



// const checkoutItems =  JSON.parse(localStorage.getItem('react-use-cart'))
//   //  console.log(checkoutItems)

//  const myItemsName = checkoutItems.items.map((data) => data.name);
//  const myItemsPrice = checkoutItems.cartTotal;
   
   









  const token = JSON.parse(localStorage.getItem('user'))

  

  useEffect(() => {
     if(!localStorage.getItem('user')){
         navigate('/login')
     }
  })

  // const data = {
  //   name: myItemsName,
  //   price: myItemsPrice
  // }

// console.log(data)



// console.log(latestData)


// useEffect(() => {


  
//  
//   
//   
//   
  
// }, [dispatch,])


const homenButtonFunction = () => {
  navigate('/')
}
const goToUserPanel = () => {
  navigate('/userpanel')
}



  const makePaymnent = async () => {
 
   
   try{
    toast.success('Entering in Stripe payment please wait !', {
      position: toast.POSITION.TOP_CENTER
     })
    const id = JSON.parse(localStorage.getItem('user'))._id
   const session = await axios(
    // `http://localhost:5000/api/payment/paynow/${id}`
    `/api/payment/paynow/${id}`
   )

   
    
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
     
    })
   } catch (error) {
      console.log(error)
   }
  }
  // const makePaymnent = async () => {
 
  //  try{
   
    
  //   await stripe.redirectToCheckout({
  //     sessionId: paymentData.session.id
     
  //   })
  //  } catch (error) {
  //     console.log(error)
  //  }
  // }








 

 

  // const pic = hpicture.toString().replace('\\', '/')
  // const img1 = `http://localhost:5000/${pic}`






  


  let  head = 'relative container w-[80%] font-bold   mx-auto drop-shadow-md'
  

  let cartTitle = 'pb-[20px] text-[30px] flex justify-center items-center'
  let cartSection = `lg:mt-[20px] md:mt-[20px] sm:mt-[20px] `
  let cart = `pt-[30px] shadow-md  rounded-lg relative sm:w-full  md:w-full lg:w-full flex flex-col items-center ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} `

  let contents = ' z-10 container mx-auto   flex flex-col justify-between w-[90%]'
  let orderBox = '  px-[60px] h-[50px] w-full rounded-b-md flex justify-between items-center'
  let orderButton = `mr-[10px] bg-amber-600 text-slate-200  sm:w-[140px] md:w-[140px] lg:w-[140px] cursor-pointer  h-[40px]   rounded-md drop-shadow-lg font-semibold flex items-center justify-center`
  let subTotal = ''

  let headButtons = ` flex relative flex  absolute sticky top-[90px] w-full   z-40    `
    let homeBackBtn = `p-[5px] lg:h-[50px]  md:h-[50px]  sm:h-[45px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center `
    let logOutBtn = `lg:w-[110px] lg:h-[50px] md:w-[110px] md:h-[50px] sm:w-[100px] sm:h-[45px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`
  

  let noAccess = 'font-bold text-red-200'

  return (
    < >
    {
      localStorage.getItem('user') ? 
      <>
     
     <div id="myCart" data-aos='zoom-in' className={head}>

     
     { 
     cartPageLocated &&    <div className={headButtons}>
       <button onClick={homenButtonFunction} className={homeBackBtn}> <FaUndoAlt/>Continue Shoping</button>
       <button onClick={goToUserPanel} className={logOutBtn}><FaSignOutAlt/>User Panel</button>
    </div>

     }
     

     <>

     
     {/* {panelState.paymentPostStatus === "pending" &&  
             <Loading/> } */}


     <div className={cartSection}>
     <div className={cartTitle}><FaCog/>My Cart</div>
     <div className={cart} >
    
    
    
    

        <div className={contents}>

          {
            items.map((data) => (
              <Cart2 key={data.id}  data={data}/>
              
            ))
          }

        </div>

        <div className={orderBox} >
          {/* <StripeCheckout 
          stripeKey={'pk_test_51LQ0CjSEbnTOzNdi39lfeTPAYPpnXEPxBsrqYIff0TeDQKT5qmHQ2xgQGLDgsGwYbEEQTqJGmOCQLDGM2ItsKoA300xVwKlmiy'} 
          label='Pay Now'
          name="Pay with Credit Card"
          // billingAddress
          // shippingAddress
          amount={cartTotal * 100}
          description={`Your total is ${cartTotal}`}
          token={makePaymnent}
          >

          
          <button className={orderButton}>Place Order</button>
          </StripeCheckout>
          <div className={subTotal}>
             SubTotal: {cartTotal} tk
          </div> */}
          
          <div className={subTotal}>
             SubTotal: {cartTotal} $
          </div> 
          <button onClick={makePaymnent} className={orderButton}>Place Order</button>
          {/* <button onClick={testFunction} className={orderButton}>testButton</button> */}
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

export default MyCart2