import { cartDelete, cartEdit, getCartData, getCartDataSingle } from "../features/panelSlice"
import { useDispatch, useSelector } from "react-redux"
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa'
import { useEffect, useState } from "react"
import { toast } from 'react-toastify'
import { cartIncrease } from "../features/panelSlice"

const Cart = ({data}) => {

  const dispatch = useDispatch()

    
    useEffect(() => {
   
        // AOS.init({
        //   offset: 100,
        //   duration: 1000,
        //   easing: 'ease'
        // });

       dispatch(getCartData())

        if(cartDeleteStatus === 'loading') {
            toast.success('loading')
            }
        
      },[dispatch])

    

    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode } = coffeeState

    const panelState = useSelector((state) => state.panelState)
    const { cartData, cartDataSingle, cartDeleteStatus, cartTotal } = panelState



    console.log(cartDataSingle.total)

    let currentQuantity = Number(data.quantity)
    let currnetPrice = Number(data.price) * currentQuantity

    localStorage.setItem('cartTotal', + Number(currnetPrice) )

    const decreaseHandler = () => {
        localStorage.setItem("editId", data._id)
       dispatch(cartEdit({quantity:  String(currentQuantity - 1), total: String(currnetPrice)}))
       dispatch(getCartDataSingle())
       dispatch(getCartDataSingle())
       dispatch(getCartDataSingle())
       dispatch(getCartDataSingle())
       dispatch(getCartDataSingle())
       
    }
    const increaseHandler = () => {
        localStorage.setItem("editId", data._id)
       dispatch(cartEdit({ quantity:  String(currentQuantity + 1),  total: String(currnetPrice) }))
       dispatch(getCartDataSingle())
       dispatch(getCartData())
       dispatch(getCartData())
       dispatch(getCartData())
       dispatch(getCartData())
    }

    const deleteHandler = () => {
        toast.success('Item deleted successfully')
        dispatch(getCartData())
        localStorage.setItem("editId", data._id)
        dispatch(cartDelete())
        // if(cartDeleteStatus === 'fulfilled') {
        // dispatch(getCartData())
        // dispatch(getCartData())
        // }
        dispatch(getCartData())
        dispatch(getCartData())
        dispatch(getCartData())
        dispatch(getCartData())
   
      }



    let cartBox = 'relative w-[100%] p-[10px] bg-blue-200 h-[100px] flex mb-[5px] mx-auto items-center justify-between rounded-md'
    let cartImage = ''
    let imgBox = 'w-[50px] h-[50px]'
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

    
    let loadingBoxEdit = 'absolute z-11 top-[1px] flex items-center justify-center font-semibold border-top-color:transparent text-[20px]'
    let loadingBarEdit = 'w-[50px] h-[50px] border-[10px] border-blue-400 border-dotted rounded-full animate-spin'
  
  
  return (
    <div>

              {panelState.cartEditStatus === "pending" &&  
              <div className={loadingBoxEdit}>
                <div className={loadingBarEdit}>
                 </div>
                    Processing...
                </div> }
         <div className={cartBox}>
            <div className={deleteCart} onClick={deleteHandler}> <FaTimes/> </div>
            <div className={totalPrice}>Total: {cartDataSingle.total}tk</div>
          <div className={cartImage}>
          <img className={imgBox} src={`http://localhost:5000/${data.picture}`} alt="cartImg" />
          </div>
          <div className={productName}>
              {data.name}
          </div>
          <div className={productPrice}>
              Price: {data.price}tk
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

export default Cart