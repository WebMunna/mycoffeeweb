import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaWrench, FaCog, FaTimes } from 'react-icons/fa'
import { logOut } from "../features/coffeeSlice"
import { blogPost, getBlogData,getBlogDataSingle, blogEdit, blogEditPic } from "../features/panelSlice"
import { blogEditBtnClick, blogEditBtnCancel } from "../features/panelSlice"
import { toast } from 'react-toastify'

import BlogItemForPanel from "./BlogItemForPanel"


import AOS from 'aos'
import 'aos/dist/aos.css'


const BlogField = () => {

  const [ sName, setSName ] = useState('')
  const [ sPerson, setSPerson ] = useState('admin')
  const [ sBText, setSBText ] = useState('')
//   const [lPicture, setLPicture] = useState('')
  const [ eName, setEName ] = useState('')
  const [ ePerson, setEPerson ] = useState('admin')
  const [ eBText, setEBText ] = useState('')
//   const [ nameChangeBtn, setNameChangeBtn ] = useState(false)
//   const [ priceChangeBtn, setPriceChangeBtn ] = useState(false)
//   const [ pPriceChangeBtn, setPPriceChangeBtn ] = useState(false)
//   const [ imageChangeBtn, setImageChangeBtn ] = useState(false)
  const [fileUploadNew, setFileUploadNew] = useState('')
  const [fileUpload, setFileUpload] = useState('')


  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBlogData());
   
    
  
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
  const { blogData, blogEditBtn, blogEditId, blogDataSingle, blogEditStatus } = panelState





  const hpicture = blogData.map((data) => (
    data.picture
  ))

 
  const spicture =  blogDataSingle.picture
 


 
  const hName = blogData.map((data) => (
    data.title
  ))
  const hPrice = blogData.map((data) => (
    data.talk
  ))

  

  useEffect(() => {
     if(!localStorage.getItem('admin')){
         navigate('/login')
     }
  })



  
  


  const onSubmit = (e) => {
   e.preventDefault()

   if(!sName || !sPerson || !sBText || !fileInputNew) {
     toast.error('Empty box not allowed')
   } else {
   const formData = new FormData();
   formData.append('file', fileUploadNew);
   formData.append('name', sName);
   formData.append('person', sPerson);
   formData.append('blogText', sBText)

   dispatch(blogPost(formData))

   setSName('')
   setSPerson('')
   setSBText('')
   setFileUploadNew('')
   }
   dispatch(getBlogData())
   dispatch(getBlogData())
   dispatch(getBlogData())
  }



  const onSubmitEdit = (e) => {
   e.preventDefault()

   const formData = new FormData();
   formData.append('file', fileUpload);
  //  formData.append('name', sName);
  //  formData.append('price', sPrice);
  //  formData.append('pprice', sPPrice)

  // dispatch(blogEdit)

  if(!eName && !ePerson && !eBText && !fileUpload ) {
    toast.error('Please fill atlest one field or cancel')
  } else {
    if(eName) {
    dispatch(blogEdit({  name: eName }))
    dispatch(getBlogDataSingle(localStorage.getItem('editId')))
    dispatch(getBlogDataSingle(localStorage.getItem('editId')))
    if(blogEditStatus) {
    dispatch(getBlogData())
    dispatch(getBlogData())
    dispatch(getBlogData())
    }
    }
    if(ePerson) {
    dispatch(blogEdit({ person: ePerson}))
      dispatch(getBlogDataSingle(localStorage.getItem('editId')))
    dispatch(getBlogDataSingle(localStorage.getItem('editId')))
    dispatch(getBlogData())
    dispatch(getBlogData())
    dispatch(getBlogData())

    }
    if(eBText) {
    dispatch(blogEdit({ blogText: eBText}))
    dispatch(getBlogDataSingle(localStorage.getItem('editId')))
    dispatch(getBlogDataSingle(localStorage.getItem('editId')))
    dispatch(getBlogData())
    dispatch(getBlogData())
    dispatch(getBlogData())
    }
  }

  if(fileUpload) {
    dispatch(blogEditPic(formData))
    dispatch(getBlogDataSingle(localStorage.getItem('editId')))
    dispatch(getBlogDataSingle(localStorage.getItem('editId')))
    dispatch(getBlogData())
    dispatch(getBlogData())
    dispatch(getBlogData())
  
  }

  dispatch(getBlogDataSingle(localStorage.getItem('editId')))
  dispatch(getBlogData())

  setEName('')
  setEPerson('')
  setEBText('')
  setFileUpload('')

  

  // else if(fileUpload){
  //  dispatch(menuEditPic(formData))
  //  dispatch(menuEdit)
  // } else {
  //   dispatch(menuEdit({name: eName, price}))
  // }

  

  }

  

  const pic = hpicture.toString().replace('\\', '/')
  const img1 = `http://localhost:5000/${pic}`

  // const pic2 = spicture.replace('\\', '/')
  const img2 = `http://localhost:5000/${spicture}`






 

  


  let head = 'relative mb-[100px]  container w-[80%] font-bold   mx-auto drop-shadow-md '
  

  let blogTitle = 'pb-[20px] sm:text-[25px] md:text-[30px] lg:text-[30px] flex justify-center items-center'
  let blogSection = `lg:mt-[100px] md:mt-[100px] sm:mt-[50px] `
  let blog = `  rounded-lg relative sm:w-full  md:w-full lg:w-full sm:h-[650px] md:h-[650px] lg:h-[650px] lg:flex md:flex sm:flex sm:fex-row  ${nightMode ? 'bg-zinc-800' : 'bg-slate-200'} drop-shadow-md`



  let formTitle = 'text-center  sm:text-[20px] md:text-[20px]  lg:text-[25px]'
  let formBox = ` sm:h-[200px] md:h-[200px] lg:h-[200px] border-box text-scroll rounded-md border-[1px] ${nightMode ? 'border-slate-300' : 'border-zinc-400'} drop-shadow-md`
  let addBlogForm = ` relative p-[10px] flex flex-col items-center justify-between sm:h-[200px] md:h-[200px] lg:h-[200px] `
  let picUploadBox = ' flex items-center justify-center flex-col'
  let imgInput = ' mb-[5px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] rounded-md'
  let inputWithTitle = 'flex items-center sm:flex-col md:flex-row md:w-[400px] lg:w-[600px] justify-between'
  let upTitle = 'lg:text-[20px]'
  let fileInputNew = ' w-[200px]'
  let subBtn = ` sm:w-[150px] mt-[10px] md:w-[150px] lg:w-[150px] h-[35px] ${nightMode ? 'bg-zinc-900' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`
  let subBtn2 = ` sm:w-[150px] mt-[10px] md:w-[150px] lg:w-[150px] h-[50px] ${nightMode ? 'bg-zinc-900' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`

  let blogNameBox = 'mt-[10px] lg:text-[20px] flex items-center  sm:flex-col md:flex-row md:w-[400px] lg:w-[600px] justify-between'
  let nameInput = ` w-[200px] lg:w-[300px] h-[40px] rounded-md pl-[5px] ${nightMode ? 'bg-neutral-900' : 'bg-slate-100'} p-[7px] rounded-md bg-slate-100 cursor-pointer shadow-md hover:shadow-sm`
  let blogPriceBox = 'mt-[10px] lg:text-[20px] flex items-center  sm:flex-col md:flex-row md:w-[400px] lg:w-[600px] justify-between'
  let PriceInput = `w-[200px] lg:w-[300px] h-[40px] rounded-md pl-[5px] ${nightMode ? 'bg-neutral-900' : 'bg-slate-100'} p-[7px] rounded-md bg-slate-100 cursor-pointer shadow-md hover:shadow-sm`
  let blogPPriceBox = 'mt-[10px] lg:text-[20px] flex items-center  sm:flex-col md:flex-row md:w-[400px] lg:w-[600px] justify-between'
  let pPriceInput = `w-[200px] lg:w-[300px] h-[40px] rounded-md pl-[5px] ${nightMode ? 'bg-neutral-900' : 'bg-slate-100'} p-[7px] rounded-md bg-slate-100 cursor-pointer shadow-md hover:shadow-sm`
 
  let blogItems = ' '
  let noItemsHere = ' text-center'
  let currentBlogBox = ' w-full mx-auto drop-shadow-md'
  let cTitle = 'text-center text-[20px]'
  let cBox = ' sm:h-[380px] md:h-[380px]  lg:h-[380px] box-border text-scroll'
  let cancelBtn = `absolute sm:top-[20px] sm:right-[5px] md:top-[20px] md:right-[70px] lg:top-[30px] lg:right-[100px] sm:w-[60px] ml-[1px] md:w-[80px] lg:w-[80px] h-[30px] ${nightMode ? 'bg-zinc-800' : 'bg-slate-100' } mx-auto rounded-md drop-shadow-lg font-semibold flex items-center justify-center`

  let contents = '  container mx-auto   flex flex-col justify-between w-[90%]'

 


  let loadingBoxEdit = 'absolute  flex items-center justify-center font-semibold border-top-color:transparent text-[20px]'
  let loadingBarEdit = 'w-[50px] h-[50px] border-[10px] border-blue-400 border-dotted rounded-full animate-spin'

  let noAccess = 'font-bold text-red-200'

  return (
    <>
    {
      localStorage.getItem('admin') ? 
      <>
     
     <div id="blogSetting" data-aos='zoom-in' className={head}>
     
     

     <>


     <div className={blogSection}>
     <div className={blogTitle}><FaCog/>OUR BLOG</div>
     <div className={blog} >
    
    
    
     {panelState.blogEditStatus === "pending" &&  
              <div className={loadingBoxEdit}>
                <div className={loadingBarEdit}>
                 </div>
                    Processing...
                </div> }

        <div className={contents}>


    


      { !blogEditBtn ?
        <div>
        <div className={formTitle}>Add Or Update Blog</div>
      <div className={formBox}>
          
      <form onSubmit={onSubmit} className={addBlogForm}>
       
        <div className={picUploadBox}>
             
            <div className={inputWithTitle}>
                 <label className={upTitle}>Upload Photo:</label>
                 <input  className={fileInputNew} type="file" onChange={(e) => setFileUploadNew(e.target.files[0]) }/>
             </div>
         </div>

         <div className={blogNameBox}>
           <label htmlFor="">Blog Name:</label>
           <input value={sName} onChange={(e) => setSName(e.target.value)} className={nameInput} type="text" placeholder="Blog Name" />
         </div>

         <div className={blogPPriceBox}>
           <label htmlFor="">Blog Text:</label>
           <input value={sBText} onChange={(e) => setSBText(e.target.value)} className={pPriceInput} type="text" placeholder="Blog Text" />
         </div>
            <button className={subBtn} type="submit">Add New Blog</button>

      </form>
      </div>
      </div>

      :
      <div className={formBox}>

      <form onSubmit={onSubmitEdit} className={addBlogForm}>
        <button onClick={() => dispatch(blogEditBtnCancel()) } className={cancelBtn}>Cancel</button>
       
      <div className={picUploadBox}>
           <img className={imgInput} src={img2} alt="blog photo"/>
          <div className={inputWithTitle}>
               <label className={upTitle}>Change Photo:</label>
               <input  className={fileInputNew} type="file" onChange={(e) => setFileUpload(e.target.files[0]) }/>
           </div>
       </div>

       <div className={blogNameBox}>
         <label htmlFor="">Change Name:</label>
         <input value={eName} onChange={(e) => setEName(e.target.value)} className={nameInput} type="text" placeholder={blogDataSingle.name} />
       </div>
      
       <div className={blogPPriceBox}>
         <label htmlFor="">Change Text:</label>
         <input value={eBText} onChange={(e) => setEBText(e.target.value)} className={pPriceInput} type="text" placeholder={blogDataSingle.blogText} />
       </div>
          <button className={subBtn2} type="submit">Update Blog</button>

    </form>
    </div>

       }

      <div className={currentBlogBox}>
        <div className={cTitle}>Current Blog</div>
        <div className={cBox}>
        <div className={blogItems}>
        
        {panelState.getBlogDataStatus === "pending" &&  
        <div className={loadingBoxEdit}>
          <div className={loadingBarEdit}>
           </div>
              Processing...
          </div> }
   
    
    {
      blogData.map((data) => (
   
        <BlogItemForPanel key={data._id} data={data}/>
        
        
      ))
    }

    {
      blogData.length === 0 && <p className={noItemsHere}> There is no items. Please add Item from the admin panel</p>
    }


 </div>
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

export default BlogField