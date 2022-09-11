import HeadButtons from "../components/HeadButtons"
import MyAccount from "../components/MyAccount"
import MyCart from "../components/MyCart"
import MyCart2 from "../components/MyCart2"
import { userPanelPageTrigger } from "../features/panelSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"




const UserPanel = () => {

 

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(userPanelPageTrigger())
   
   console.log('user panel page triggered')
  })

  
  return (
    <div>
      <HeadButtons/>
      <MyAccount/>
      <MyCart2/>
    </div>
  )
}

export default UserPanel