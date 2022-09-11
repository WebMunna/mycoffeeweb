import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaWrench, FaCog, FaTimes } from 'react-icons/fa'
import { logOut } from "../features/coffeeSlice"
import { contactPost, getContactData,getContactDataSingle, contactEdit, contactEditPic } from "../features/panelSlice"
import { contactEditBtnClick, contactEditBtnCancel } from "../features/panelSlice"
import { toast } from 'react-toastify'

import BlogItemForPanel from "./BlogItemForPanel"
import ContactItemForPanel from "./ContactItemForPanel"


import AOS from 'aos'
import 'aos/dist/aos.css'
import Loading from "./Loading"


const ContactResponse = () => {

  const [ sName, setSName ] = useState('')
  const [ sPerson, setSPerson ] = useState('admin')
  const [ sBText, setSBText ] = useState('')
//   const [lPicture, setLPicture] = useState('')
  const [ eName, setEName ] = useState('')
  const [ ePerson, setEPerson ] = useState('admin')
  const [ eBText, setEBText ] = useState('')
//   const [ nameChangeBtn, setNameChangeBtn ] = useState(false)
//   const [ priceChangeBtn, setPriceChangeBtn ] = useState(false)
//   const [ pPriceChangeBtn, setPPriceChangeBtn ] = useState(false)
//   const [ imageChangeBtn, setImageChangeBtn ] = useState(false)
  const [fileUploadNew, setFileUploadNew] = useState('')
  const [fileUpload, setFileUpload] = useState('')


  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContactData());
    
   
    
  
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
  const { contactData, contactEditBtn, contactEditId, contactDataSingle, contactEditStatus } = panelState



  






 

  


  let head = 'relative  container w-[80%] font-bold   mx-auto drop-shadow-md '
  

  let contactTitle = 'pb-[20px] sm:text-[25px] md:text-[30px] lg:text-[30px] flex justify-center items-center'
  let contactSection = `lg:mt-[100px] md:mt-[100px] sm:mt-[50px] `
  let contact = `  rounded-lg relative sm:w-full  md:w-full lg:w-full sm:h-[650px] md:h-[650px] lg:h-[650px]   ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} drop-shadow-md`



  let formTitle = 'text-center  sm:text-[20px] md:text-[20px]  lg:text-[25px]'
 
  let contactItems = ' '
  let noItemsHere = ' text-center'
  let currentContactBox = ' w-full mx-auto drop-shadow-md'
  let cTitle = 'text-center text-[20px]'
  let cBox = ' sm:h-[600px] md:h-[600px]  lg:h-[600px] box-border text-scroll'
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
     
     <div id="contactSetting" data-aos='zoom-in' className={head}>
     
     

     <>


     <div className={contactSection}>
     <div className={contactTitle}><FaCog/>Contact Response</div>
     <div className={contact} >
    
    
    
     {panelState.contactEditStatus === "pending" &&  
              <Loading/> }

        <div className={contents}>


    


      { !contactEditBtn ?
        <div>
       
      <div >
          
  
      </div>
      </div>

      :
      <div>

     
    </div>

       }

      <div className={currentContactBox}>
        <div className={cTitle}>Current Contact</div>
        <div className={cBox}>
        <div className={contactItems}>
        
        {panelState.getcontactDataStatus === "pending" &&  
       <Loading/> }
   
    
    {
      contactData.map((data) => (
   
        <ContactItemForPanel key={data._id} data={data}/>
      
        
        
      ))
    }

    {
      contactData.length === 0 && <p className={noItemsHere}> There is no items. Please add Item from the admin panel</p>
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

export default ContactResponse