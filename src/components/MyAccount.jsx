import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaWrench, FaCog, FaTimes } from 'react-icons/fa'
import { logOut } from "../features/coffeeSlice"
import { getProfileData, profileEdit, profileEditPic } from "../features/panelSlice"
import { toast } from 'react-toastify'
// import path from 'path'


import AOS from 'aos'
import 'aos/dist/aos.css'
import Loading from "./Loading"


// import { fileURLToPath } from 'url'
// import { dirname } from 'path'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)
// console.log(__filename);
// console.log(__dirname);



const MyAccount = () => {

  const [ sName, setSName ] = useState('')
  const [ sNumber, setSNumber ] = useState('')
  const [ sAddress, setSAddress ] = useState('')

  const [ nameChangeBtn, setNameChangeBtn ] = useState(false)
  const [ numberChangeBtn, setNumberChangeBtn ] = useState(false)
  const [ addressChangeBtn, setAddressChangeBtn ] = useState(false)
  const [ imageChangeBtn, setImageChangeBtn ] = useState(false)
  const [fileUpload, setFileUpload] = useState('')


  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease'
    });
  },[])


 

  useEffect(() => {
    dispatch(getProfileData());
    
  }, [dispatch])


  const coffeeState = useSelector((state) => state.coffeeState)
  const { nightMode } = coffeeState

  const panelState = useSelector((state) => state.panelState)
  const { profileData } = panelState



  const mainUser = JSON.parse(localStorage.getItem('user'))
  const hname = mainUser.name
  const hnumber = profileData.number
  const haddress = profileData.address

  const hpicture = profileData.picture

  console.log(hpicture)





// const mainUser = JSON.parse(localStorage.getItem('user'))
// const id = mainUser._id




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

  const nameChangeBtnClick = () => {
    setNameChangeBtn(true)
  }
  const numberChangeBtnClick = () => {
    setNumberChangeBtn(true)
  }
  const addressChangeBtnClick = () => {
    setAddressChangeBtn(true)
  }

  const nameApplyBtnClick = () => {
    if(!sName){
      toast.error('Write your name or cancel')
    } else {
     dispatch(profileEdit({name:sName}))
     dispatch(getProfileData())
     dispatch(getProfileData())
     dispatch(getProfileData())
     setSName('')
    }
  }

  const numberApplyBtnClick = () => {

    if(!sNumber){
      toast.error('Give your current number')
    } else {
    dispatch(profileEdit({number: sNumber}))
    dispatch(getProfileData())
    dispatch(getProfileData())
    dispatch(getProfileData())
    setSNumber('')
    }
  }


  const addressApplyBtnClick = () => {

    if(!sAddress){
      toast.error('Give your current Address')
    } else {
    dispatch(profileEdit({address: sAddress}))
    dispatch(getProfileData())
    dispatch(getProfileData())
    dispatch(getProfileData())
    setSAddress('')
    }
  }

  const imgChangeBtnClick = () => {
    setImageChangeBtn(true)
  }



  const imgApplyBtnClick = () => {
    const formData = new FormData();
    formData.append('file', fileUpload);
    // console.log(fileUpload)
    // console.log(formData)
    dispatch(profileEditPic(formData))

    dispatch(getProfileData())
    dispatch(getProfileData())
    dispatch(getProfileData())
    setFileUpload('')
    
  }

 

  // const pic = hpicture.toString().replace('\\', '/')
  // const img1 = `http://localhost:5000/${pic}`







  


  let  head = 'relative container w-[80%] font-bold   mx-auto shadow-md'
  

  let profileTitle = 'pb-[20px] text-[30px] flex justify-center items-center'
  let profileSection = `lg:mt-[0px] md:mt-[0px] sm:mt-[0px]  `
  let profile = `pb-[40px]  rounded-lg relative sm:w-full  md:w-full lg:w-full sm:h-[430px] md:h-[450px] lg:h-[500px] lg:flex md:flex sm:flex sm:fex-row items-center ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} shadow-md`
  let profileImageCng = ''
  let contents = '  container mx-auto   flex flex-col justify-between w-[90%]'
  let contentWithButton = ' flex justify-around items-center mt-[5px]'
  let contentWithButton2 = ' flex flex-col justify-center items-center mt-[5px]'
  let name = ` text-scroll h-[50px]   pr-[20px] lg:w-[600px] md:w-[400px] sm:w-[350px] font-bold lg:text-[25px] md:text-[20px] sm:text-[15px`
  let number = ' text-scroll break-normal h-[50px] pr-[20px] lg:w-[600px] md:w-[400px] sm:w-[350px] font-bold lg:text-[25px] md:text-[20px] sm:text-[15px]'
  let nameInput = `mx-[5px] pl-[5px] sm:w-[150px] md:w-[350px] lg:w-[500px] h-[45px]  caret-zinc-600 rounded-lg ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-inner shadow-lg`
  let fileInput = `opacity-[.60] mx-[5px] pl-[5px] sm:w-[150px] md:w-[350px] lg:w-[500px] h-[45px]  caret-zinc-600 rounded-lg ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-inner shadow-lg flex items-center justify-center`
  let button = ''
  let editBtn = `bg-opacity-[.50] sm:w-[70px] md:w-[100px] lg:w-[100px] h-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`
  let cancelBtn = `bg-opacity-[.50] sm:w-[20px] ml-[1px] md:w-[50px] lg:w-[50px] h-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`
  let editBtnBack = `bg-opacity-[.50] lg:relative md:relative sm:relative  lg:w-[300px] md:w-[250px] h-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center mt-[3px]`
  let twoButtons = ' flex'

  let imageBox = ' w-[200px] h-[150px] mt-[5px] '
  let imgBox = 'bg-blue-200 rounded-md'

  let billingAddress = 'text-center mx-auto pt-[10px]'
 

  let loadingBox = 'flex items-center justify-center font-semibold border-top-color:transparent text-[20px]'
  let loadingBar = 'w-[50px] h-[50px] border-[10px] border-blue-500 border-dotted rounded-full animate-spin'
  let loadingBoxEdit = ' flex items-center justify-center font-semibold border-top-color:transparent text-[20px]'
  let loadingBarEdit = 'w-[50px] h-[50px] border-[10px] border-blue-400 border-dotted rounded-full animate-spin'

  let noAccess = 'font-bold text-red-200'

  return (
    <div id="profile">
    <>
    {
      localStorage.getItem('user') ? 
      <>
     
     <div  data-aos='zoom-in' className={head}>
     
     

     <>


     <div className={profileSection}>
     <div className={profileTitle}><FaCog/>My Profile</div>
     <div className={profile} >
    
    
    
     {panelState.profileEditStatus === "pending" &&  
             <Loading/> }

        <div className={contents}>




        <div className={contentWithButton2}>

          <div className={imageBox}>
             {/* <img className={imgBox} src={`http://localhost:5000/${hpicture}`} alt="profile image" /> */}
             <img className={imgBox} src={`/${hpicture}`} alt="profile image" />
          </div>

            {
              imageChangeBtn &&
            <div>
          
                <input  className={fileInput} type="file" onChange={(e) => setFileUpload(e.target.files[0]) }  />
            </div>
            }

            { !imageChangeBtn &&  <button onClick={imgChangeBtnClick} className={editBtnBack}><FaWrench/>Change Profile Image</button>}
            <div className={twoButtons}>
           
            { imageChangeBtn &&<button onClick={imgApplyBtnClick} className={editBtn}><FaWrench/> Apply</button>}
            { imageChangeBtn &&<button onClick={() => setImageChangeBtn(false)} className={cancelBtn}><FaTimes/> </button>}
            </div>
        
        </div>

        <div className={billingAddress}>
          (Default Billing Address)
        </div>


          <div className={contentWithButton}>
            
            {
              
              !nameChangeBtn &&
              
            <div className={name} >
             <> {panelState.getAboutDataStatus === "pending" &&  <Loading/>
            }
            </>
            Name:  {hname}
            </div> }
            
            {
              nameChangeBtn &&
            <div>
                <input  className={nameInput} type="text" value={sName} placeholder={hname} onChange={(e) => setSName(e.target.value)} alt="title" />
            </div>
            }
            { !nameChangeBtn && <button onClick={nameChangeBtnClick} className={editBtn}><FaWrench/> Change</button>}
            <div className={twoButtons}>
            { nameChangeBtn &&<button onClick={nameApplyBtnClick} className={editBtn}><FaWrench/> Apply</button>}
            { nameChangeBtn &&<button onClick={() => setNameChangeBtn(false)} className={cancelBtn}><FaTimes/> </button>}
            </div>
          </div>

          <div className={contentWithButton}>
            {
              
              !numberChangeBtn &&
            <div className={number} >
             <> {panelState.getProfileDataStatus === "pending" &&  <div className={loadingBox}>
                <div className={loadingBar}>
                 </div>
                    Processing...
                    </div> 
            }
            </>
             Number: {hnumber}
            </div> }
            
            {
              numberChangeBtn &&
            <div>
          
                <input  className={nameInput} type="text" value={sNumber} placeholder={hnumber} onChange={(e) => setSNumber(e.target.value)} alt="title" />
            </div>
            }
            { !numberChangeBtn && <button onClick={numberChangeBtnClick} className={editBtn}><FaWrench/> Change</button>}
            <div className={twoButtons}>
            { numberChangeBtn &&<button onClick={numberApplyBtnClick} className={editBtn}><FaWrench/> Apply</button>}
            { numberChangeBtn &&<button onClick={() => setNumberChangeBtn(false)} className={cancelBtn}><FaTimes/> </button>}
            </div>
          </div>


          <div className={contentWithButton}>
            {
              
              !addressChangeBtn &&
            <div className={number} >
             <> {panelState.getProfileDataStatus === "pending" &&  <div className={loadingBox}>
                <div className={loadingBar}>
                 </div>
                    Processing...
                    </div> 
            }
            </>
             Address: {haddress}
            </div> }
            
            {
              addressChangeBtn &&
            <div>
          
                <input  className={nameInput} type="text" value={sAddress} placeholder={haddress} onChange={(e) => setSAddress(e.target.value)} alt="title" />
            </div>
            }
            { !addressChangeBtn && <button onClick={addressChangeBtnClick} className={editBtn}><FaWrench/> Change</button>}
            <div className={twoButtons}>
            { addressChangeBtn &&<button onClick={addressApplyBtnClick} className={editBtn}><FaWrench/> Apply</button>}
            { addressChangeBtn &&<button onClick={() => setAddressChangeBtn(false)} className={cancelBtn}><FaTimes/> </button>}
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
       <h1>You Have no access in the user panel</h1>
       <p>Please Complete your registration</p>
      </div>
      </>
    }

    </>
    </div>
  )
}

export default MyAccount