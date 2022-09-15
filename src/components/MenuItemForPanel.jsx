import { useSelector, useDispatch } from "react-redux"
import { menuEditBtnClick, idForMenuEdit,  } from "../features/panelSlice"
import { getMenuDataSingle, menuDelete, getMenuData } from "../features/panelSlice"
import { FaRegTrashAlt} from 'react-icons/fa'

const MenuItemForPanel = ({data}) => {




    const dispatch = useDispatch()


    const coffeeState = useSelector((state) => state.coffeeState)
    const { nightMode, menuDeleteStatus } = coffeeState



   
  

    const editHandler = () => {
     
      
      dispatch(menuEditBtnClick())
      localStorage.setItem("editId", data._id)
      dispatch(getMenuDataSingle(localStorage.getItem('editId')))
     
      
    }


    const deleteHandler = () => {
      dispatch(getMenuData())
      localStorage.setItem("editId", data._id)
      dispatch(menuDelete())
      if(menuDeleteStatus) {
      dispatch(getMenuData())
      dispatch(getMenuData())
      }
 
    }


    const pic = data.picture.toString().replace('\\', '/')
    const img1 = `https://coffeewebapi.herokuapp.com/${pic}`

    let mainBox = `z-1 relative text-scroll relative rounded-md w-[180px] h-[180px] p-[5px] flex flex-col items-center border-[1px] ${nightMode ? 'border-slate-200' : 'border-zinc-800'} ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} drop-shadow-xl`

    let itemPic = 'w-[60px] h-[60px] rounded-full'
    let itemPicIn = 'rounded-full w-[60px] h-[60px]'
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
          {data.price}     <del className={prvprice}>{data.pprice}</del>
        </div>
        <button onClick={editHandler} className={cartButton}>Edit</button>
    </div>
  )
}

export default MenuItemForPanel