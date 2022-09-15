import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaWrench, FaCog, FaTimes } from 'react-icons/fa'
import { logOut } from "../features/coffeeSlice"
import { getAboutData, aboutEdit, aboutEditPic } from "../features/panelSlice"
import { toast } from 'react-toastify'


import AOS from 'aos'
import 'aos/dist/aos.css'
import Loading from "./Loading"


const AboutSetting = () => {

  const [ sTitle, setSTitle ] = useState('')
  const [ sTalk, setSTalk ] = useState('')
  const [ titleChangeBtn, setTitleChangeBtn ] = useState(false)
  const [ talkChangeBtn, setTalkChangeBtn ] = useState(false)
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
    dispatch(getAboutData());
   
  
  }, [dispatch])


  


  const coffeeState = useSelector((state) => state.coffeeState)
  const { nightMode } = coffeeState

  const panelState = useSelector((state) => state.panelState)
  const { aboutData } = panelState


  const htitle = aboutData.map((data) => (
    data.title
  ))
  const htalk = aboutData.map((data) => (
    data.talk
  ))

  const hpicture = aboutData.map((data) => (
    data.picture
  ))





  const admin = JSON.parse(localStorage.getItem('admin'))
  const adminName = admin.name
  

  useEffect(() => {
     if(!localStorage.getItem('admin')){
         navigate('/login')
     }
  })

  const onLogout = () => {
    dispatch(logOut())
    navigate('/login')
  }

  const titleChangeBtnClick = () => {
    setTitleChangeBtn(true)
  }
  const talkChangeBtnClick = () => {
    setTalkChangeBtn(true)
  }

  const talkApplyBtnClick = () => {
    if(!sTalk){
      toast.error('Please write something about your product')
    } else {
     dispatch(aboutEdit({talk:sTalk}))
     dispatch(getAboutData())
     dispatch(getAboutData())
     dispatch(getAboutData())
     dispatch(getAboutData())
     dispatch(getAboutData())
     dispatch(getAboutData())
     setSTalk('')
    }
  }

  const titleApplyBtnClick = () => {

    if(!sTitle){
      toast.error('Please write a title for your product')
    } else {
    dispatch(aboutEdit({title: sTitle}))
    dispatch(getAboutData())
    dispatch(getAboutData())
    dispatch(getAboutData())
    dispatch(getAboutData())
    dispatch(getAboutData())
    dispatch(getAboutData())
    setSTitle('')
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
    dispatch(aboutEditPic(formData))

    dispatch(getAboutData())
    dispatch(getAboutData())
    dispatch(getAboutData())
    dispatch(getAboutData())
    dispatch(getAboutData())
    dispatch(getAboutData())
    setFileUpload('')
    
  }

 

  const pic = hpicture.toString().replace('\\', '/')
  const img1 = `https://coffeewebapi.herokuapp.com/${pic}`




 

  


  let  head = 'relative container w-[80%] font-bold   mx-auto drop-shadow-md'
  

  let aboutTitle = 'pb-[20px] text-[30px] flex justify-center items-center'
  let aboutSection = `lg:mt-[100px] md:mt-[100px] sm:mt-[50px] `
  let about = `  rounded-lg relative sm:w-full  md:w-full lg:w-full sm:h-[430px] md:h-[450px] lg:h-[500px] lg:flex md:flex sm:flex sm:fex-row items-center ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} `
  let aboutImageCng = ''
  let contents = '  container mx-auto   flex flex-col justify-between w-[90%]'
  let contentWithButton = ' flex justify-around items-center mt-[20px]'
  let contentWithButton2 = ' flex flex-col justify-around items-center mt-[20px]'
  let title = `text-scroll h-[50px]   pr-[20px] lg:w-[600px] md:w-[400px] sm:w-[350px] font-bold lg:text-[35px] md:text-[30px] sm:text-[20px]`
  let talk = 'text-scroll break-normal h-[100px] pr-[20px] lg:w-[600px] md:w-[400px] sm:w-[350px] font-bold lg:text-[25px] md:text-[20px] sm:text-[15px]'
  let titleInput = `mx-[5px] pl-[5px] sm:w-[150px] md:w-[350px] lg:w-[500px] h-[45px]  caret-zinc-600 rounded-lg ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-inner shadow-lg`
  let fileInput = `opacity-[.60] mx-[5px] pl-[5px] sm:w-[150px] md:w-[350px] lg:w-[500px] h-[45px]  caret-zinc-600 rounded-lg ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-inner shadow-lg flex items-center justify-center`
  let button = ''
  let editBtn = `bg-opacity-[.50] sm:w-[70px] md:w-[100px] lg:w-[100px] h-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`
  let cancelBtn = `bg-opacity-[.50] sm:w-[20px] ml-[1px] md:w-[50px] lg:w-[50px] h-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`
  let editBtnBack = `bg-opacity-[.50] lg:relative md:relative sm:relative  lg:w-[300px] md:w-[250px] h-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center mt-[3px]`
  let twoButtons = ' flex'

  let imageBox = ' w-[200px] h-[150px] mt-[5px]'
 

  let loadingBox = 'flex items-center justify-center font-semibold border-top-color:transparent text-[20px]'
  let loadingBar = 'w-[50px] h-[50px] border-[10px] border-blue-500 border-dotted rounded-full animate-spin'
  let loadingBoxEdit = ' flex items-center justify-center font-semibold border-top-color:transparent text-[20px]'
  let loadingBarEdit = 'w-[50px] h-[50px] border-[10px] border-blue-400 border-dotted rounded-full animate-spin'

  let noAccess = 'font-bold text-red-200'

  return (
    <>
    {
      localStorage.getItem('admin') ? 
      <>
     
     <div id="aboutSetting" data-aos='zoom-in' className={head}>
     
     

     <>


     <div className={aboutSection}>
     <div className={aboutTitle}><FaCog/>About Setting</div>
     <div className={about} >
    
    
    
     {panelState.aboutEditStatus === "pending" &&  
             <Loading/> }

        <div className={contents}>




        <div className={contentWithButton2}>

          <div className={imageBox}>
             <img src={img1} alt="about image" />
          </div>

            {
              imageChangeBtn &&
            <div>
          
                <input  className={fileInput} type="file" onChange={(e) => setFileUpload(e.target.files[0]) }  />
            </div>
            }

            { !imageChangeBtn &&  <button onClick={imgChangeBtnClick} className={editBtnBack}><FaWrench/>Change About Image</button>}
            <div className={twoButtons}>
           
            { imageChangeBtn &&<button onClick={imgApplyBtnClick} className={editBtn}><FaWrench/> Apply</button>}
            { imageChangeBtn &&<button onClick={() => setImageChangeBtn(false)} className={cancelBtn}><FaTimes/> </button>}
            </div>
        
        </div>


          <div className={contentWithButton}>
            
            {
              
              !titleChangeBtn &&
              
            <div className={title} >
             <> {panelState.getAboutDataStatus === "pending" &&  <Loading/>
            }
            </>
            {htitle}
            </div> }
            
            {
              titleChangeBtn &&
            <div>
                <input  className={titleInput} type="text" value={sTitle} placeholder={htitle} onChange={(e) => setSTitle(e.target.value)} alt="title" />
            </div>
            }
            { !titleChangeBtn && <button onClick={titleChangeBtnClick} className={editBtn}><FaWrench/> Change</button>}
            <div className={twoButtons}>
            { titleChangeBtn &&<button onClick={titleApplyBtnClick} className={editBtn}><FaWrench/> Apply</button>}
            { titleChangeBtn &&<button onClick={() => setTitleChangeBtn(false)} className={cancelBtn}><FaTimes/> </button>}
            </div>
          </div>
          <div className={contentWithButton}>
            
       

            {
              
              !talkChangeBtn &&
            <div className={talk} >
             <> {panelState.getHeroDataStatus === "pending" &&  <div className={loadingBox}>
                <div className={loadingBar}>
                 </div>
                    Processing...
                    </div> 
            }
            </>
            {htalk}
            </div> }
            
            {
              talkChangeBtn &&
            <div>
          
                <input  className={titleInput} type="text" value={sTalk} placeholder={htalk} onChange={(e) => setSTalk(e.target.value)} alt="title" />
            </div>
            }
            { !talkChangeBtn && <button onClick={talkChangeBtnClick} className={editBtn}><FaWrench/> Change</button>}
            <div className={twoButtons}>
            { talkChangeBtn &&<button onClick={talkApplyBtnClick} className={editBtn}><FaWrench/> Apply</button>}
            { talkChangeBtn &&<button onClick={() => setTalkChangeBtn(false)} className={cancelBtn}><FaTimes/> </button>}
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

export default AboutSetting