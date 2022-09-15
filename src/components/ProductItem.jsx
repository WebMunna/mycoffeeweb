import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { cartPost, cartEdit, cartAdd, getCartData } from "../features/panelSlice"
import { useNavigate } from "react-router-dom"

import Fade from 'react-reveal/Fade';


import { useCart } from "react-use-cart";



import AOS from 'aos'
import 'aos/dist/aos.css'


const ProductItem = ({data}) => {

  const navigate = useNavigate()

   const { addItem } = useCart();

    const dispatch = useDispatch()


    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode } = coffeeState

    
  const panelState = useSelector((state) => state.panelState)
  const { cartData } = panelState



    useEffect(() => {

      dispatch(getCartData())
   
      AOS.init({
        offset: 100,
        duration: 1000,
        easing: 'ease'
      });
    },[])


    


 

    // const cartAddHandler = () => {
    //   dispatch(cartPost({picture: data.picture, name: data.name, price: data.price}))
    //   toast.success('Product added to your cart')
    //   addItem({id: data._id, picture: data.picture, name: data.name, price: data.price, pprice: data.pprice})
    // }


const mainUser = JSON.parse(localStorage.getItem('user'))
// const id = mainUser._id
// const customerCartData = cartData.filter(e => e.userId === id)
// const customerCartDatas = cartData.map((data) => data.items)





const checkoutItems =  JSON.parse(localStorage.getItem('react-use-cart'))
//  console.log(checkoutItems)



    const cartAddHandler = async () => {

     
      //  const mainUser = JSON.parse(localStorage.getItem('user'))
      //  const eid = mainUser._id  

      //  const customerCartData =  cartData.map(e => e.userId === eid)

      if( localStorage.getItem('user')) {
       
        addItem({id: data._id, picture: data.picture, name: data.name, price: data.price})
        dispatch(cartAdd({_id: data._id, picture: data.picture, name: data.name, price: data.price}))
       dispatch(cartEdit())
       dispatch(cartEdit())
       dispatch(cartEdit())

       
      toast.success('Product added to your cart', {
        position: toast.POSITION.TOP_CENTER
    });
        navigate('/cart')
       
     } else {

      toast.error('Please LogIn as user for Cart !', {
        position: toast.POSITION.TOP_CENTER
    });

      navigate('/login')
      
     }

       
     

      // addItem({data})
      
    }


    // const cartAddHandler2 = async () => {

    //    addItem({id: data._id, picture: data.picture, name: data.name, price: data.price})

    //   //  const mainUser = JSON.parse(localStorage.getItem('user'))
    //   //  const eid = mainUser._id  

    //   //  const customerCartData =  cartData.map(e => e.userId === eid)

    //   dispatch(cartPost(checkoutItems))
      
    //   toast.success('Product added to your cart')
    //   // addItem({data})
      
    // }



    const pic = data.picture.toString().replace('\\', '/')
    // const img1 = `http://localhost:5000/${pic}`
    const img1 = `https://coffeewebapi.herokuapp.com/${pic}`

    let mainBox = `h-[400px] p-[5px] rounded-md flex flex-col items-center justify-around ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} drop-shadow-md`

    let itemPic = 'w-[150px] h-[200px] rounded-md'
    let itemPicIn = 'rounded-md w-[150px] h-[200px]'
    let itemName = 'font-bold text-[25px]'
    let itemPrices = 'font-bold text-[20px]'
    let prvprice = 'font-semibold text-[15px]'
    let cartButton = ` bg-amber-600 text-slate-200 mt-[10px] sm:w-[140px] md:w-[140px] lg:w-[140px] cursor-pointer lg:w-[100px] h-[40px]   rounded-md drop-shadow-lg font-semibold flex items-center justify-center `

  return (
    <Fade bottom>
    <div 
    className={mainBox}>
        <div className={itemPic}>
            <img className={itemPicIn} src={img1} alt="item photo" />
        </div>
        <div  
         className={itemName}>
             {data.name}
        </div>
        <div 
         className={itemPrices}>
          {data.price}$     <del className={prvprice}>{data.pprice}$</del>
        </div>
     
        <button  onClick={cartAddHandler} className={cartButton}>Add To Cart</button>
      
    </div>
    </Fade>
  )
}

export default ProductItem