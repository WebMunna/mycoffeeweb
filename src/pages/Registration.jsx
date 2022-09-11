
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { adminRegistration } from "../features/coffeeSlice"
import { userRegistration } from "../features/coffeeSlice"
import { useEffect } from "react"
import { FaUndoAlt} from 'react-icons/fa'
import { cartPost, profilePost } from "../features/panelSlice"
import { toast } from "react-toastify"
import Loading from "../components/Loading"
import { regiPageTrigger } from "../features/panelSlice"

const Registration = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(regiPageTrigger())
    if( localStorage.getItem('admin')) {
       navigate('/adminPanel')
      
    }
    if( localStorage.getItem('user')) {
       navigate('/userPanel')
       dispatch(cartPost())
       dispatch(profilePost())
    }
  })

  const coffeeState = useSelector((state) => state.coffeeState)
  const { nightMode, adminRegistrationError, userRegistrationError } = coffeeState

  const [name, setName] =useState('')
  const [adminLogin, setAdminLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const onSubmit = (e) => {
  e.preventDefault()
  if(!name ||!email || !password ) {
    toast.error('Empty box not allowed', {
     position: toast.POSITION.TOP_CENTER
    })
  } else {
  if( password === password2 && adminLogin) {
    dispatch(adminRegistration({name:name, email:email, password:password}))
  
  } else if (password === password2 && !adminLogin) {
    dispatch(userRegistration({name:name, email:email, password:password}))
   
  } else if(password !== password2) {
    alert('password not match')
  }

  

}

  setName('')
  setEmail('')
  setPassword('')
  setPassword2('')
  setAdminLogin(false)
     
  } 

  useEffect(() => {
    if( adminRegistrationError ) {
      toast.error(adminRegistrationError, {
        position: toast.POSITION.TOP_CENTER
      })
    }
    if( userRegistrationError ) {
      toast.error(userRegistrationError, {
        position: toast.POSITION.TOP_CENTER
      })
    }
  
}, [userRegistrationError,  adminRegistrationError])

 

  let mainBox = `container w-[70%] h-[450px] mx-auto mt-[20px] mb-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-300'} drop-shadow-xl rounded-lg`
  let logForm = `pt-[50px]  flex p-[20px] pt-[80px] flex-col mx-auto h-full justify-around`
  let emailInput = `mb-[15px] pl-[5px]  md:w-[350px] lg:w-[500px] h-[45px] mx-auto  caret-zinc-600 rounded-lg ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-inner shadow-lg`
  let passwordInput = `mb-[15px] pl-[5px]  md:w-[350px] lg:w-[500px] h-[45px] mx-auto  caret-zinc-600 rounded-lg ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-inner shadow-lg`
  let passwordInput2 = `mb-[15px] pl-[5px] text-slate-700 md:w-[350px] lg:w-[500px] h-[45px] mx-auto  caret-zinc-600 rounded-lg ${nightMode ? 'bg-zinc-900' : 'bg-slate-100'} shadow-inner shadow-lg`
  let cBox = 'mb-[15px] font-bold w-[200px] mx-auto'
  let checkBox = 'mr-[10px] accent-[1px]'
  let subBtn = `w-[100px] h-[40px] ${nightMode ? 'bg-zinc-900' : 'bg-slate-100' } mx-auto rounded-md shadow-md font-semibold`
  let headButtons = 'flex my-[30px]   mx-auto'
  let homeBackBtn = `w-[100px] h-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center `
  let logOutBtn = `w-[100px] h-[50px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`




  return (
    <>
     <div className={headButtons}>
       <button onClick={() => navigate('/')} className={homeBackBtn}> <FaUndoAlt/>Home</button>
       <button onClick={() => navigate('/login')} className={logOutBtn}>Sign In</button>
     </div>
    <div className={mainBox}>
    {coffeeState.adminRegistrationStatus === "pending" &&  
             <Loading/> }
    {coffeeState.userRegistrationStatus === "pending" &&  
             <Loading/> }
       <form className={logForm} onSubmit={onSubmit}>
           <input className={emailInput} type='text' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
           <input className={emailInput} type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
           <input className={passwordInput} type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
           <input className={passwordInput2} type='password' placeholder="Re-Enter Password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
           <div className={cBox}>
              
               <input className={checkBox} type='checkbox' checked={adminLogin} value={adminLogin} onChange={(e) => setAdminLogin(e.currentTarget.checked)} />
               <label htmlFor="">Admin</label>
           </div>
           <button className={subBtn} type="submit">Sign Up</button>
          
       </form>
    </div>

   
    </>
  )
}

export default Registration