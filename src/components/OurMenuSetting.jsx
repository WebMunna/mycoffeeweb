import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaWrench, FaCog, FaTimes } from 'react-icons/fa'
import { logOut } from "../features/coffeeSlice"
import { menuPost, getMenuData,getMenuDataSingle, menuEdit, menuEditPic } from "../features/panelSlice"
import { menuEditBtnClick, menuEditBtnCancel } from "../features/panelSlice"
import { toast } from 'react-toastify'

import MenuItemForPanel from "./MenuItemForPanel"


import AOS from 'aos'
import 'aos/dist/aos.css'
import Loading from "./Loading"


const OurMenuSetting = () => {

  const [ sName, setSName ] = useState('')
  const [ sPrice, setSPrice ] = useState('')
  const [ sPPrice, setSPPrice ] = useState('')
  const [lPicture, setLPicture] = useState('')
  const [ eName, setEName ] = useState('')
  const [ ePrice, setEPrice ] = useState('')
  const [ ePPrice, setEPPrice ] = useState('')
  const [ nameChangeBtn, setNameChangeBtn ] = useState(false)
  const [ priceChangeBtn, setPriceChangeBtn ] = useState(false)
  const [ pPriceChangeBtn, setPPriceChangeBtn ] = useState(false)
  const [ imageChangeBtn, setImageChangeBtn ] = useState(false)
  const [fileUploadNew, setFileUploadNew] = useState('')
  const [fileUpload, setFileUpload] = useState('')


  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMenuData());
   
    
  
  }, [dispatch])

  useEffect(() => {
   
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease'
    });
  },[])

  const coffeeState = useSelector((state) => state.coffeeState)
  const { nightMode } = coffeeState

  const panelState = useSelector((state) => state.panelState)
  const { menuData, menuEditBtn, menuEditId, menuDataSingle, menuEditStatus } = panelState





  const hpicture = menuData.map((data) => (
    data.picture
  ))

 
  const spicture =  menuDataSingle.picture
 


 
  const hName = menuData.map((data) => (
    data.title
  ))
  const hPrice = menuData.map((data) => (
    data.talk
  ))

  

  useEffect(() => {
     if(!localStorage.getItem('admin')){
         navigate('/login')
     }
  })



  
  


  const onSubmit = (e) => {
   e.preventDefault()

   if(!sName || !sPrice || !sPPrice || !fileInputNew) {
     toast.error('Empty box not allowed', {
      position: toast.POSITION.TOP_CENTER
     })
   } else {
   const formData = new FormData();
   formData.append('file', fileUploadNew);
   formData.append('name', sName);
   formData.append('price', sPrice);
   formData.append('pprice', sPPrice)

   dispatch(menuPost(formData))

   setSName('')
   setSPPrice('')
   setSPPrice('')
   setFileUploadNew('')
   }
   dispatch(getMenuData())
   dispatch(getMenuData())
   dispatch(getMenuData())
  }



  const onSubmitEdit = (e) => {
   e.preventDefault()

   const formData = new FormData();
   formData.append('file', fileUpload);
  //  formData.append('name', sName);
  //  formData.append('price', sPrice);
  //  formData.append('pprice', sPPrice)

  // dispatch(menuEdit)

  if(!eName && !ePrice && !ePPrice && !fileUpload ) {
    toast.error('Please fill atlest one field or cancel', {
      position: toast.POSITION.TOP_CENTER
    })
  } else {
    if(eName) {
    dispatch(menuEdit({  name: eName }))
    dispatch(getMenuDataSingle(localStorage.getItem('editId')))
    dispatch(getMenuDataSingle(localStorage.getItem('editId')))
   
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
    
    }
    if(ePrice) {
    dispatch(menuEdit({ price: ePrice}))
      dispatch(getMenuDataSingle(localStorage.getItem('editId')))
    dispatch(getMenuDataSingle(localStorage.getItem('editId')))
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())

    }
    if(ePPrice) {
    dispatch(menuEdit({ pprice: ePPrice}))
    dispatch(getMenuDataSingle(localStorage.getItem('editId')))
    dispatch(getMenuDataSingle(localStorage.getItem('editId')))
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
    }
  }

  if(fileUpload) {
    dispatch(menuEditPic(formData))
    dispatch(getMenuDataSingle(localStorage.getItem('editId')))
    dispatch(getMenuDataSingle(localStorage.getItem('editId')))
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
    dispatch(getMenuData())
  
  }

  dispatch(getMenuDataSingle(localStorage.getItem('editId')))
  dispatch(getMenuData())

  setEName('')
  setEPrice('')
  setEPPrice('')
  setFileUpload('')

  

  // else if(fileUpload){
  //  dispatch(menuEditPic(formData))
  //  dispatch(menuEdit)
  // } else {
  //   dispatch(menuEdit({name: eName, price}))
  // }

  

  }

  

  const pic = hpicture.toString().replace('\\', '/')
  const img1 = `http://localhost:5000/${pic}`

  // const pic2 = spicture.replace('\\', '/')
  const img2 = `http://localhost:5000/${spicture}`

 




 

  


  let head = 'relative container w-[80%] font-bold   mx-auto drop-shadow-md '
  

  let menuTitle = 'pb-[20px] sm:text-[25px] md:text-[30px] lg:text-[30px] flex justify-center items-center'
  let menuSection = `lg:mt-[100px] md:mt-[100px] sm:mt-[50px] `
  let menu = `  rounded-lg relative sm:w-full  md:w-full lg:w-full sm:h-[650px] md:h-[650px] lg:h-[650px] lg:flex md:flex sm:flex sm:fex-row items-center ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} drop-shadow-md`



  let formTitle = 'text-center  sm:text-[20px] md:text-[20px]  lg:text-[25px]'
  let formBox = ` sm:h-[370px] md:h-[370px] border-box text-scroll rounded-md border-[1px] ${nightMode ? 'border-slate-300' : 'border-zinc-400'} drop-shadow-md`
  let addProductForm = `relative p-[10px] flex flex-col items-center justify-between md:h-[300px] lg:h-[300px] `
  let picUploadBox = ' flex items-center justify-center flex-col'
  let imgInput = 'bg-green-200 mb-[5px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] rounded-md'
  let inputWithTitle = 'flex items-center sm:flex-col md:flex-row md:w-[400px] lg:w-[600px] justify-between'
  let upTitle = 'lg:text-[20px]'
  let fileInputNew = ' w-[200px]'
  let subBtn = ` sm:w-[150px] mt-[10px] md:w-[150px] lg:w-[150px] h-[35px] ${nightMode ? 'bg-zinc-900' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`
  let subBtn2 = ` sm:w-[130px] mt-[10px] md:w-[130px] lg:w-[130px] h-[40px] ${nightMode ? 'bg-zinc-900' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`

  let productNameBox = 'mt-[10px] lg:text-[20px] flex items-center  sm:flex-col md:flex-row md:w-[400px] lg:w-[600px] justify-between'
  let nameInput = ` w-[200px] lg:w-[300px] h-[40px] rounded-md pl-[5px] ${nightMode ? 'bg-neutral-900' : 'bg-slate-100'} p-[7px] rounded-md bg-slate-100 cursor-pointer shadow-md hover:shadow-sm`
  let productPriceBox = 'mt-[10px] lg:text-[20px] flex items-center  sm:flex-col md:flex-row md:w-[400px] lg:w-[600px] justify-between'
  let PriceInput = `w-[200px] lg:w-[300px] h-[40px] rounded-md pl-[5px] ${nightMode ? 'bg-neutral-900' : 'bg-slate-100'} p-[7px] rounded-md bg-slate-100 cursor-pointer shadow-md hover:shadow-sm`
  let productPPriceBox = 'mt-[10px] lg:text-[20px] flex items-center  sm:flex-col md:flex-row md:w-[400px] lg:w-[600px] justify-between'
  let pPriceInput = `w-[200px] lg:w-[300px] h-[40px] rounded-md pl-[5px] ${nightMode ? 'bg-neutral-900' : 'bg-slate-100'} p-[7px] rounded-md bg-slate-100 cursor-pointer shadow-md hover:shadow-sm`
 
  let menuItems = ' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5px]'
  let noItemsHere = 'bg-blue-200 text-center'
  let currentProductBox = 'mx-auto drop-shadow-md'
  let cTitle = 'text-center text-[20px]'
  let cBox = 'sm:h-[200px] md:h-[200px]  lg:h-[200px] box-border text-scroll'
  let cancelBtn = `absolute sm:top-[20px] sm:right-[5px] md:top-[20px] md:right-[70px] lg:top-[30px] lg:right-[100px] sm:w-[60px] ml-[1px] md:w-[80px] lg:w-[80px] h-[30px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`

  let contents = '  container mx-auto   flex flex-col justify-between w-[90%]'

 


  let loadingBoxEdit = 'absolute  flex items-center justify-center font-semibold border-top-color:transparent text-[20px]'
  let loadingBarEdit = 'w-[50px] h-[50px] border-[10px] border-blue-400 border-dotted rounded-full animate-spin'

  let noAccess = 'font-bold text-red-200'

  return (
    <>
    {
      localStorage.getItem('admin') ? 
      <>
     
     <div id="menuSetting" data-aos='zoom-in' className={head}>
     
     

     <>


     <div className={menuSection}>
     <div className={menuTitle}><FaCog/>OUR MENU SETTING</div>
     <div className={menu} >
    
    
    
     {panelState.menuEditStatus === "pending" &&  
             <Loading/> }

        <div className={contents}>


      <div className={formTitle}>Add Or Update Product</div>


      { !menuEditBtn ?

      <div className={formBox}>
      <form onSubmit={onSubmit} className={addProductForm}>
       
        <div className={picUploadBox}>
             
            <div className={inputWithTitle}>
                 <label className={upTitle}>Upload Photo:</label>
                 <input  className={fileInputNew} type="file" onChange={(e) => setFileUploadNew(e.target.files[0]) }/>
             </div>
         </div>

         <div className={productNameBox}>
           <label htmlFor="">Menu Name:</label>
           <input value={sName} onChange={(e) => setSName(e.target.value)} className={nameInput} type="text" placeholder="Menu Name" />
         </div>
         <div className={productPriceBox}>
           <label htmlFor="">Menu Price:</label>
           <input value={sPrice} onChange={(e) => setSPrice(e.target.value)} className={PriceInput} type="text" placeholder="Menu Price" />
         </div>
         <div className={productPPriceBox}>
           <label htmlFor="">Previous Price:</label>
           <input value={sPPrice} onChange={(e) => setSPPrice(e.target.value)} className={pPriceInput} type="text" placeholder="Previous Price" />
         </div>
         <div>
            <button className={subBtn} type="submit">Add New Menu</button>
         </div>

      </form>
      </div>

      :
      <div className={formBox}>

      <form onSubmit={onSubmitEdit} className={addProductForm}>
        <button onClick={() => dispatch(menuEditBtnCancel()) } className={cancelBtn}>Cancel</button>
       
      <div className={picUploadBox}>
           <img className={imgInput} src={img2} alt="product photo"/>
          <div className={inputWithTitle}>
               <label className={upTitle}>Change Photo:</label>
               <input  className={fileInputNew} type="file" onChange={(e) => setFileUpload(e.target.files[0]) }/>
           </div>
       </div>

       <div className={productNameBox}>
         <label htmlFor="">Change Name:</label>
         <input value={eName} onChange={(e) => setEName(e.target.value)} className={nameInput} type="text" placeholder={menuDataSingle.name} />
       </div>
       <div className={productPriceBox}>
         <label htmlFor="">Change Price:</label>
         <input value={ePrice} onChange={(e) => setEPrice(e.target.value)} className={PriceInput} type="text" placeholder={menuDataSingle.price}/>
       </div>
       <div className={productPPriceBox}>
         <label htmlFor="">Previous Price:</label>
         <input value={ePPrice} onChange={(e) => setEPPrice(e.target.value)} className={pPriceInput} type="text" placeholder={menuDataSingle.pprice} />
       </div>
       <div>
          <button className={subBtn2} type="submit">Update Product</button>
       </div>

    </form>
    </div>

       }

      <div className={currentProductBox}>
        <div className={cTitle}>Current Product</div>
        <div className={cBox}>
        <div className={menuItems}>
        
        {panelState.getMenuDataStatus === "pending" &&  
       <Loading/> }
   
    
    {
      menuData.map((data) => (
   
        <MenuItemForPanel key={data._id} data={data}/>
        
      ))
    }

    {
      menuData.length === 0 && <p className={noItemsHere}> There is no items. Please add Item from the admin panel</p>
    }


 </div>
        </div>
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
       <h1>You Have no access in the admin panel</h1>
       <p>Please Complete your registration</p>
      </div>
      </>
    }

    </>
  )
}

export default OurMenuSetting