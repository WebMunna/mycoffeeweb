import { cartDelete, cartEdit, getCartData, getCartDataSingle, cartRemove, cartAdd, cartRemoveFull } from "../features/panelSlice"
import { useDispatch, useSelector } from "react-redux"
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa'
import { useEffect, useState } from "react"
import { toast } from 'react-toastify'



import { cartIncrease } from "../features/panelSlice"
import { useCart } from 'react-use-cart'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Loading from "./Loading"

const Cart2 = ({data}) => {

  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    updateCartMetadata,
    removeItem,
    emptyCart,
    items
  } = useCart()

 const totalWithQuantity = 
  Number(data.price) * Number(data.quantity)

  const dispatch = useDispatch()

    
    useEffect(() => {
   
        AOS.init({
          offset: 0,
          duration: 1000,
          easing: 'ease'
        });

       dispatch(getCartData())
       dispatch(cartEdit())

        if(cartDeleteStatus === 'loading') {
            toast.success('loading')
            }
        
      },[dispatch])

    

    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode } = coffeeState

    const panelState = useSelector((state) => state.panelState)
    const { cartData, cartDataSingle, cartDeleteStatus } = panelState



   


    let currentQuantity = Number(data.quantity)
    let currnetPrice = Number(data.price) * currentQuantity

    const checkoutItems =  JSON.parse(localStorage.getItem('react-use-cart'))
    //  console.log(checkoutItems)
  
  //  const myItemsName = checkoutItems.items.map((data) => data.name);
  //  const myItemsPrice = checkoutItems.cartTotal;


  //   const datas = {
  //     name: myItemsName,
  //     price: myItemsPrice
  //   }
  

  
  // useEffect(() => {
    
  //   ;
  //   ;
  //   ;
  //   ;
    
  // }, [dispatch])
  
  

  

 



    const decreaseHandler = () => {

     

      updateItemQuantity(data.id, data.quantity -1)

      dispatch(cartRemove({_id: data.id}))

      dispatch(cartEdit())
      dispatch(cartEdit())
      dispatch(cartEdit())

    
    
    
    
       
    }
    const increaseHandler = () => {

     
      dispatch(cartAdd({_id: data.id, picture: data.picture, name: data.name, price: data.price}))
      dispatch(cartEdit())
      dispatch(cartEdit())
      dispatch(cartEdit())


       dispatch(getCartData())
       dispatch(getCartData())
       dispatch(getCartData())
       dispatch(getCartData())

      updateItemQuantity(data.id, data.quantity + 1)

      
      
      
      
    }

    const deleteHandler = () => {

   
        removeItem(data.id)
        dispatch(cartRemoveFull({_id: data.id}))

        
        
        
        
   
      }



    let cartBox = `relative  w-[100%] p-[10px]  h-[100px] flex mb-[15px] mx-auto items-center justify-between rounded-md ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-md`
    let cartImage = ''
    let imgBox = 'w-[70px] h-[70px] pr-[2px]'
    let productName = ''
    let productPrice = ''
    let productPriceQuantity = ''
    let quantityVolume = ' w-[60px] flex items-center justify-between'
    let decreacer = ''
    let quantity = ''
    let increacer = ''
    let priceWithVolume = ''

    let deleteCart = 'absolute top-[1px] right-[1px] text-red-500'
    let totalPrice = 'absolute bottom-[1px] right-[10px]'

    
    let loadingBoxEdit = 'absolute z-101 top-[20%] left-[45%] flex items-center justify-center font-semibold border-top-color:transparent text-[20px]'
    let loadingBarEdit = 'mx:w-[100px] mx:h-[100px] md:w-[70px] md:h-[70px] sm:w-[50px] sm:h-[50px] mx:border-[18px] md:border-[15px] sm:border-[10px] border-blue-400 border-dotted rounded-full animate-spin'
  
  
  return (
    <div>

              {panelState.cartEditStatus === "pending" &&  
             <Loading/> }
          

        {isEmpty && 
         <div>
            There is no item in your cart. Add item from our product.
         </div>
        }      


         <div data-aos='fade-up'   
           
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
               className={cartBox}>
            <div className={deleteCart} onClick={deleteHandler}> <FaTimes/> </div>
            <div className={totalPrice}>Total: {totalWithQuantity}$</div>
          <div className={cartImage}>
          <img className={imgBox} src={`http://localhost:5000/${data.picture}`} alt="cartImg" />
          </div>
          <div className={productName}>
              {data.name}
          </div>
          <div className={productPrice}>
              Price: {data.price}$
          </div>
          <div className={productPriceQuantity}>
              
             <div className={quantityVolume}>
                <span onClick={decreaseHandler} className={decreacer}>
                      <FaMinus/>
                </span>
                <span className={quantity}>
                    {data.quantity}
                </span>
                <span onClick={increaseHandler} className={increacer}>
                      <FaPlus/>
                </span>
             </div>
             <div className={priceWithVolume}>
               
             </div>
          </div>
        </div>
   
    </div>
  )
}

export default Cart2