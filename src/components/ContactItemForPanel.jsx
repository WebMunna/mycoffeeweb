import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { contactEditBtnClick, idForMenuEdit,  } from "../features/panelSlice"
import { getContactDataSingle,contactEdit, contactDelete, getContactData } from "../features/panelSlice"
import { FaRegTrashAlt} from 'react-icons/fa'
import moment from 'moment'

const ContactItemForPanel = ({data}) => {


    let nDate = new Date( data.createdAt)

    let date = nDate.toDateString()

    const dispatch = useDispatch()


    const [ reminder, setReminder ] = useState(false)

    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode, contactDeleteStatus, contactDataSingle } = coffeeState


   
  

  

    const editHandler = (e) => {
      
      
      
      dispatch(contactEdit({response: !data.response}))
     
      dispatch(contactEditBtnClick())
      localStorage.setItem("editId", data._id)
      dispatch(getContactDataSingle(localStorage.getItem('editId')))
      dispatch(getContactDataSingle(localStorage.getItem('editId')))
      dispatch(getContactDataSingle(localStorage.getItem('editId')))
      dispatch(getContactDataSingle(localStorage.getItem('editId')))
      dispatch(getContactDataSingle(localStorage.getItem('editId')))
      dispatch(getContactDataSingle(localStorage.getItem('editId')))
      dispatch(getContactDataSingle(localStorage.getItem('editId')))
      
     
    }
 
  
    const editHandler2 = () => {

    }


    const deleteHandler = () => {
      dispatch(getContactData())
      localStorage.setItem("editId", data._id)
      dispatch(contactDelete())
      dispatch(getContactData())
      
      dispatch(getContactData())
      dispatch(getContactData())
     
      dispatch(getContactData())
      
      dispatch(getContactData())
      dispatch(getContactData())
     
 
    }

   




    let mainBox = `relative text-scroll relative rounded-md w-full mb-[20px] h-[250px] p-[5px] flex flex-col items-center border-[1px] ${nightMode ? 'border-slate-200' : 'border-zinc-800'} ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} drop-shadow-xl`

    let contactHead = 'flex w-full items-center justify-between'
    let userDetail = ''
    let userPicIn = 'rounded-full w-[60px] h-[60px]'
    let itemPic = ' w-[150px] rounded-md'
    let bReminder = 'ml-[5px]'
    let itemPicIn = 'rounded-md w-[150px] h-[150px]'
    let contactMiddle = ' h-[300px] '
    let itemName = 'font-bold text-[20px] mt-[5px]'
    let bText = 'font-bold text-[20px] mt-[5px]'
    let bText2 = 'font-bold text-[20px] mt-[5px]'
    let cNameInput = 'cursor-copy h-[40px] rounded-md pl-[5px]'
    let cEmailInput = 'cursor-copy h-[40px] rounded-md pl-[5px]'
    let cNumberInput = 'cursor-copy h-[40px] rounded-md pl-[5px]'
    let checkBox = ''
   
    let cartButton = ` bg-amber-600 text-slate-200 mt-[10px] sm:w-[140px] md:w-[140px] lg:w-[140px] cursor-pointer lg:w-[70px] h-[30px]   rounded-md drop-shadow-lg font-semibold flex items-center justify-center`

    let dlete = 'absolute top-[5px] right-[5px] text-red-500'
  
    

  return (
    <div className={mainBox}>

       <button onClick={deleteHandler} className={dlete}> <FaRegTrashAlt size='20px'/></button>
      
      <div className={contactHead}>
        <div className={userDetail}>
            
          
            Posted By: {data.person}
           <div>{date}</div> 
           <div> {moment(data.createdAt).fromNow()}</div>
        </div>
        
        <div className={itemPic}>
          <label htmlFor="">Responsed</label>
        

          <input onClick={editHandler} type="checkbox" checked={data.response} value={data.response} onChange={(e) => setReminder('true')}/>
        </div>
      </div>
      <div className={contactMiddle}>
      <div className={itemName}>
      <label htmlFor="">Client Name: </label>
          <input className={cNameInput} type="text" value={data.name} />
          
        </div>
        <div className={bText}>
          <label htmlFor="">Client Email: </label>
          <input className={cEmailInput} type="text" value={data.email} />
        </div>
        <div className={bText2}>
        <label htmlFor="">Client Number: </label>
          <input className={cNumberInput} type="text" value={data.number} />
        </div>
      </div>
       
      
    </div>
  )
}

export default ContactItemForPanel