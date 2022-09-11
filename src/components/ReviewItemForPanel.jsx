import { useSelector, useDispatch } from "react-redux"
import { reviewEditBtnClick, idForMenuEdit,  } from "../features/panelSlice"
import { getReviewDataSingle, reviewDelete, getReviewData } from "../features/panelSlice"
import { FaRegTrashAlt} from 'react-icons/fa'

const ReviewItemForPanel = ({data}) => {




    const dispatch = useDispatch()


    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode, reviewDeleteStatus } = coffeeState



   
  

    const editHandler = () => {
     
      
      dispatch(reviewEditBtnClick())
      localStorage.setItem("editId", data._id)
      dispatch(getReviewDataSingle(localStorage.getItem('editId')))
      
    }


    const deleteHandler = () => {
      dispatch(getReviewData())
      localStorage.setItem("editId", data._id)
      dispatch(reviewDelete())
      if(reviewDeleteStatus) {
      dispatch(getReviewData())
      dispatch(getReviewData())
      }
 
    }


    const pic = data.picture.toString().replace('\\', '/')
    const img1 = `http://localhost:5000/${pic}`

    let mainBox = `relative text-scroll relative rounded-md w-[180px] h-[200px] p-[5px] flex flex-col items-center justify-between border-[1px] ${nightMode ? 'border-slate-200' : 'border-zinc-800'} ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} drop-shadow-xl`

    let itemPic = 'w-[60px] h-[60px] rounded-md'
    let itemPicIn = 'rounded-md w-[60px] h-[60px]'
    let itemName = 'font-bold text-[20px]'
    let itemPrices = 'font-bold text-[15px]'
    let prvprice = 'font-semibold text-[10px]'
    let cartButton = ` bg-amber-600 text-slate-200 mt-[10px] sm:w-[140px] md:w-[140px] lg:w-[140px] cursor-pointer lg:w-[70px] h-[30px]   rounded-md drop-shadow-lg font-semibold flex items-center justify-center`

    let dlete = 'absolute top-[5px] right-[5px] text-red-500'
  
    

  return (
    <div className={mainBox}>

       <button onClick={deleteHandler} className={dlete}> <FaRegTrashAlt size='20px'/></button>
      
        <div className={itemPic}>
            <img className={itemPicIn} src={img1} alt="item photo" />
        </div>
        <div className={itemName}>
             {data.name}
        </div>
        <div className={itemPrices}>
          {data.reviewText}    
        </div>
        <button onClick={editHandler} className={cartButton}>Edit</button>
    </div>
  )
}

export default ReviewItemForPanel