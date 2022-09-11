import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { adminLogin, userLogin } from "../features/coffeeSlice"
import { FaUndoAlt} from 'react-icons/fa'
import Loading from "../components/Loading"
import { toast } from 'react-toastify'
import { cartPost, profilePost } from "../features/panelSlice"
import { loginPageTrigger } from "../features/panelSlice"


const LogIn = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(loginPageTrigger()) 
    
    if( localStorage.getItem('admin')) {
       navigate('/adminPanel')
    }
    if( localStorage.getItem('user')) {
      dispatch(cartPost())
      dispatch(profilePost())
    
       navigate('/userPanel')
       
    }
  })

  const coffeeState = useSelector((state) => state.coffeeState)
  const { nightMode, adminLoginError, userLoginError } = coffeeState

  const [admincLogin, setAdmincLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')







  let mainBox = `container w-[70%] h-[300px] mx-auto mt-[20px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-300'} drop-shadow-md rounded-lg`
  let logForm = `pt-[50px]  flex p-[20px] flex-col mx-auto h-full justify-around`
  let emailInput = `pl-[5px]  md:w-[350px] lg:w-[500px] h-[45px] mx-auto  caret-zinc-600 rounded-lg ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-inner shadow-lg`
  let passwordInput = `pl-[5px]  md:w-[350px] lg:w-[500px] h-[45px] mx-auto  caret-zinc-600 rounded-lg ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-inner shadow-lg`
  let cBox = 'font-bold w-[200px] mx-auto'
  let checkBox = 'mr-[10px] accent-[1px]'
  let subBtn = `w-[100px] h-[40px] ${nightMode ? 'bg-zinc-900' : 'bg-slate-100' } mx-auto rounded-md shadow-md font-semibold`
  let subBtn2 = `ml-[10px] w-[100px] h-[40px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-300' } mx-auto rounded-md shadow-lg font-semibold`
  let regiBox = ' w-[70%] mx-auto text-center mt-[30px] font-semibold'
  let headButtons = ' flex my-[30px]   mx-auto justify-around'
  let homeBackBtn = `w-[100px] h-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center `
  let logOutBtn = `w-[100px] h-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`


  const onSubmit = async (e) => {
   e.preventDefault()
   if(!email || !password ) {
    toast.error('Empty box not allowed', {
     position: toast.POSITION.TOP_CENTER
    })
  } else {

   if  (admincLogin)  {
     dispatch(adminLogin({email:email, password:password}))

    //  if( coffeeState.adminLoginStatus === 'rejected') {
    //   toast.error(adminLoginError, {
    //     position: toast.POSITION.TOP_CENTER
    //   })
    // }
 
  } else {
    dispatch(userLogin({email:email, password:password}))
    
    // if(coffeeState.userLoginStatus === 'rejected'  ) {
    //   toast.error(userLoginError, {
    //     position: toast.POSITION.TOP_CENTER
    //   })
    // }
   
  }

}
  setEmail('')
  setPassword('')
  setAdmincLogin(false)
     
  }

  
  useEffect(() => {
    if( adminLoginError ) {
      toast.error(adminLoginError, {
        position: toast.POSITION.TOP_CENTER
      })
    }
    if( userLoginError ) {
      toast.error(userLoginError, {
        position: toast.POSITION.TOP_CENTER
      })
    }
  
}, [adminLoginError,  userLoginError])

  return (
    <>

    
    
     <div className={headButtons}>

    
       <button onClick={() => navigate('/')} className={homeBackBtn}> <FaUndoAlt/>Home</button>
       <button onClick={() => navigate('/registration')} className={logOutBtn}>Sign Up</button>
     </div>
    <div className={mainBox}>

    {coffeeState.userLoginStatus === "pending" &&  
             <Loading/> }
    {coffeeState.adminLoginStatus === "pending" &&  
             <Loading/> }
   
       <form className={logForm} onSubmit={onSubmit}>
           <input className={emailInput} type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
           <input className={passwordInput} type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
           <div className={cBox}>
              
               <input className={checkBox} type='checkbox' checked={admincLogin} value={admincLogin} onChange={(e) => setAdmincLogin(e.currentTarget.checked)} />
               <label htmlFor="">Admin</label>
           </div>
           <button className={subBtn} type="submit">Sign In</button>
          
       </form>
    </div>

    <div className={regiBox}>
      Don't have any account ? 
      <button onClick={() => navigate('/registration')} className={subBtn2}>Sign Up</button>
    </div>
    </>
  )
}

export default LogIn