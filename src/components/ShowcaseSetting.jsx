import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaUndoAlt, FaSignOutAlt,  FaWrench, FaCog, FaTimes } from 'react-icons/fa'
import { logOut } from "../features/coffeeSlice"
import { getHeroData, heroEdit, heroEditPic } from "../features/panelSlice"
import { toast } from 'react-toastify'


import AOS from 'aos'
import 'aos/dist/aos.css'
import Loading from "./Loading"



const ShowcaseSetting = () => {

  const [ sTitle, setSTitle ] = useState('')
  const [ sTalk, setSTalk ] = useState('')
  const [ titleChangeBtn, setTitleChangeBtn ] = useState(false)
  const [ talkChangeBtn, setTalkChangeBtn ] = useState(false)
  const [ backgroundChangeBtn, setBackgroundChangeBtn ] = useState(false)
  const [fileUpload, setFileUpload] = useState('')


  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHeroData());
   
  
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
  const { heroData } = panelState


  const htitle = heroData.map((data) => (
    data.title
  ))
  const htalk = heroData.map((data) => (
    data.talk
  ))

  const hpicture = heroData.map((data) => (
    data.picture
  ))
  const hcolor = heroData.map((data) => (
    data.color
  ))





  const admin = JSON.parse(localStorage.getItem('admin'))
  const adminName = admin.name
  

  useEffect(() => {
     if(!localStorage.getItem('admin')){
         navigate('/login')
     }
  })



  // const toastFunction = () => {
  //   if(panelState.getHeroEditPicStatus === "success"){
     
      
  //     toast.success('Showcase Setting Applied Successfully', {
  //       position: toast.POSITION.TOP_CENTER
  //   });
  //    }
  // }

  // toastFunction()

  // const onLogout = () => {
  //   dispatch(logOut())
  //   navigate('/login')
  // }

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
     dispatch(heroEdit({talk:sTalk}))
     dispatch(getHeroData())
     dispatch(getHeroData())
     dispatch(getHeroData())
     setSTalk('')
    }
  }

  const titleApplyBtnClick = () => {

    if(!sTitle){
      toast.error('Please write a title for your product')
    } else {
    dispatch(heroEdit({title: sTitle}))
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
    setSTitle('')
    }
  }

  const bgChangeBtnClick = () => {
    setBackgroundChangeBtn(true)
  }



  const bgApplyBtnClick = () => {
    const formData = new FormData();
    formData.append('file', fileUpload);
    // console.log(fileUpload)
    // console.log(formData)
    dispatch(heroEditPic(formData))
   

    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
    // dispatch(getHeroData())
    // dispatch(getHeroData())
    setFileUpload('')
    
  }

  const c1ColorApply = () => {
    dispatch(heroEdit({color: "#f1f5f9"}))
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
  }
  const c2ColorApply = () => {
    dispatch(heroEdit({color: "#94a3b8"}))
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
  }
  const c3ColorApply = () => {
    dispatch(heroEdit({color: "#1e293b"}))
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
    dispatch(getHeroData())
  }

  const pic = hpicture.toString().replace('\\', '/')
  const img1 = `http://localhost:5000/${pic}`

  console.log(pic)
  console.log(img1)


 

  const col = hcolor.toString()


  let head = 'relative container w-[80%] font-bold   mx-auto drop-shadow-md'
 

  let heroTitle = 'pb-[20px] sm:text-[30px] md:text-[40px] lg:text-[40px] text-center flex justify-center items-center'
  let heroSection = `lg:mt-[100px] md:mt-[100px] sm:mt-[50px] `
  let hero = ' bg-cover rounded-lg relative sm:w-full  md:w-full lg:w-full sm:h-[330px] md:h-[350px] lg:h-[450px] lg:flex md:flex sm:flex sm:fex-row items-center '
  let contents = '  container mx-auto  lg:h-[200px] flex flex-col justify-between w-[90%]'
  let contentWithButton = 'flex justify-around items-center mt-[20px]'
  let title = `text-scroll h-[50px]   pr-[20px] lg:w-[600px] md:w-[400px] sm:w-[350px] font-bold lg:text-[35px] md:text-[30px] sm:text-[20px]`
  let talk = 'text-scroll break-normal h-[100px] pr-[20px] lg:w-[600px] md:w-[400px] sm:w-[350px] font-bold lg:text-[25px] md:text-[20px] sm:text-[15px]'
  let titleInput = `mx-[5px] pl-[5px] sm:w-[150px] md:w-[350px] lg:w-[500px] h-[45px]  caret-zinc-600 rounded-lg ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-inner shadow-lg`
  let fileInput = `opacity-[.60] mx-[5px] pl-[5px] sm:w-[150px] md:w-[350px] lg:w-[500px] h-[45px]  caret-zinc-600 rounded-lg ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-inner shadow-lg flex items-center justify-center`

  let editBtn = `px-[3px] bg-opacity-[1] sm:w-[70px] md:w-[100px] lg:w-[100px] h-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`
  let cancelBtn = `px-[3px] bg-opacity-[1] sm:w-[20px] ml-[1px] md:w-[50px] lg:w-[50px] h-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`
  let editBtnBack = `px-[3px] bg-opacity-[1] lg:absolute md:absolute sm:relative bottom-[10px] lg:right-[100px] md:right-[30px] sm:right-[10px] lg:w-[300px] md:w-[250px] h-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center mt-[30px]`
  let twoButtons = ' flex'
  let colorOption = 'mt-[20px] opacity-[100] flex justify-between w-[250px] mt-[10px] text-blue-500'
  let colorOptionBox1 = ' w-[30px] h-[30px]  bg-slate-100 rounded-full'
  let colorOptionBox2 = 'w-[30px] h-[30px]  bg-slate-400 rounded-full'
  let colorOptionBox3 = 'w-[30px] h-[30px]  bg-slate-800 rounded-full'

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
     
     <div id="heroSetting" className={head}>
     {/* <div className={headButtons}>
       <button onClick={() => navigate('/')} className={homeBackBtn}> <FaUndoAlt/>Home</button>
       <button onClick={onLogout} className={logOutBtn}><FaSignOutAlt/>LogOut</button>
     </div>
     <div className={welcomneText}>Welcome <span className={nameOfAdmin}>{adminName}</span> <br/> <span className={toPanelText}>To Admin Panel</span> </div> */}
     

     <>


     <div data-aos="zoom-in" className={heroSection}>
     <div className={heroTitle}><FaCog/>Showcase Setting</div>
     <div className={hero} style={{backgroundImage: `url(${img1})`}}>
    

     {panelState.heroEditStatus === "pending" &&  
              <Loading/> }
     

        <div className={contents}>
          <div className={contentWithButton}>
            
            {
              
              !titleChangeBtn &&
            <div data-aos="fase-up" className={title} style={{color: `${col}`}}>
             <> {panelState.getHeroDataStatus === "pending" &&  <Loading/>
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
          <div data-aos="fase-up" className={contentWithButton}>
            
       

            {
              
              !talkChangeBtn &&
            <div data-aos="fase-up" className={talk} style={{color: `${col}`}}>
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
          <div className={colorOption}>
            <FaWrench/> Change Text Color:
            <button onClick={c1ColorApply} className={colorOptionBox1}></button>
            <button onClick={c2ColorApply} className={colorOptionBox2}></button>
            <button onClick={c3ColorApply} className={colorOptionBox3}></button>
          </div>
        <div className={contentWithButton}>
        {
              backgroundChangeBtn &&
            <div>
          
                <input  className={fileInput} type="file" onChange={(e) => setFileUpload(e.target.files[0]) }  />
            </div>
            }
             { !backgroundChangeBtn &&  <button onClick={bgChangeBtnClick} className={editBtnBack}><FaWrench/>Change Background Image</button>}
            <div className={twoButtons}>
           
            { backgroundChangeBtn &&<button onClick={bgApplyBtnClick} className={editBtn}><FaWrench/> Apply</button>}
            { backgroundChangeBtn &&<button onClick={() => setBackgroundChangeBtn(false)} className={cancelBtn}><FaTimes/> </button>}
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

export default ShowcaseSetting