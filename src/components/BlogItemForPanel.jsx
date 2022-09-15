import { useSelector, useDispatch } from "react-redux"
import { blogEditBtnClick, idForMenuEdit,  } from "../features/panelSlice"
import { getBlogDataSingle, blogDelete, getBlogData } from "../features/panelSlice"
import { FaRegTrashAlt} from 'react-icons/fa'
import moment from 'moment'

const BlogItemForPanel = ({data}) => {


    let nDate = new Date( data.createdAt)

    let date = nDate.toDateString()

    const dispatch = useDispatch()


    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode, blogDeleteStatus } = coffeeState



   
  

    const editHandler = () => {
     
      
      dispatch(blogEditBtnClick())
      localStorage.setItem("editId", data._id)
      dispatch(getBlogDataSingle(localStorage.getItem('editId')))
      
    }


    const deleteHandler = () => {
      dispatch(getBlogData())
      localStorage.setItem("editId", data._id)
      dispatch(blogDelete())
      dispatch(getBlogData())
      if(blogDeleteStatus) {
      dispatch(getBlogData())
      dispatch(getBlogData())
      }
 
    }


    const pic = data.picture.toString().replace('\\', '/')
    const img1 = `https://coffeewebapi.herokuapp.com/${pic}`

    let mainBox = `relative text-scroll relative rounded-md w-full mb-[20px] h-[250px] p-[5px] flex flex-col items-center border-[1px] ${nightMode ? 'border-slate-200' : 'border-zinc-800'} ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} drop-shadow-xl`

    let blogHead = 'flex w-full items-center justify-between'
    let userDetail = ''
    let userPicIn = 'rounded-full w-[60px] h-[60px]'
    let itemPic = 'w-[150px] h-[150px] rounded-md'
    let itemPicIn = 'rounded-md w-[150px] h-[150px]'
    let blogMiddle = ''
    let itemName = 'font-bold text-[20px]'
    let bText = ''
   
    let cartButton = ` bg-amber-600 text-slate-200 mt-[10px] sm:w-[140px] md:w-[140px] lg:w-[140px] cursor-pointer lg:w-[70px] h-[30px]   rounded-md drop-shadow-lg font-semibold flex items-center justify-center`

    let dlete = 'absolute top-[5px] right-[5px] text-red-500'
  
    

  return (
    <div className={mainBox}>

       <button onClick={deleteHandler} className={dlete}> <FaRegTrashAlt size='20px'/></button>
      
      <div className={blogHead}>
        <div className={userDetail}>
            
            <img className={userPicIn} src={img1} alt="user photo" />
            Posted By: {data.person}
           <div>{date}</div> 
           <div> {moment(data.createdAt).fromNow()}</div>
        </div>
        <div className={itemPic}>
            <img className={itemPicIn} src={img1} alt="item photo" />
        </div>
      </div>
      <div className={blogMiddle}>
      <div className={itemName}>
             {data.name}
        </div>
        <div className={bText}>
            {data.blogText}
        </div>
      </div>
       
        <button onClick={editHandler} className={cartButton}>Edit</button>
    </div>
  )
}

export default BlogItemForPanel