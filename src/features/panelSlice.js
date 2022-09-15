import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



// const baseURL = "http://localhost:5000/api/adminpanel/"
// const baseURL2 = "http://localhost:5000/api/userpanel/"
// const baseURL3 = "http://localhost:5000/api/payment/"
const baseURL = "https://coffeewebapi.herokuapp.com/api/adminpanel/"
const baseURL2 = "https://coffeewebapi.herokuapp.com/api/userpanel/"
const baseURL3 = "https://coffeewebapi.herokuapp.com/api/payment/"

const initialState = {

    cartPageLocated: false,
    homePageLocated: false,
    userPanelLocated: false,
    adminPanelLocated : false,
    loginPageLocated: false,
    regiPageLocated: false,

    clickFunctionRunning: false,
    userButtonClicked: false,
    homeButtonClicked: false,
   

    heroData : [],
    aboutData: [],
    menuData: [],
    productData: [],
    reviewData: [],
    contactData: [],
    blogData: [],
    profileData: [],
    cartData: [],

    paymentData: [],


    menuDataSingle: [],
    productDataSingle: [],
    reviewDataSingle: [],
    blogDataSingle: [],
    contactDataSingle: [],
    profielDataSingle: [],
    cartDataSingle: [],



    menuEditBtn: false,
    menuEditId:"",
    productEditBtn: false,
    productEditId:"",
    reviewEditBtn: false,
    reviewEditId:"",
    blogEditBtn: false,
    profileEditBtn: false,
    cartEditBtn: false,
    blogEditId:"",

    heroEditStatus: "",
    heroEditError: "",
    heroEditPicStatus: "",
    heroEditPicError: "",
    getHeroDataStatus: "",
    getHeroDataError:"",


    aboutEditStatus: "",
    aboutEditError: "",
    aboutEditPicStatus: "",
    aboutEditPicError: "",
    getAboutDataStatus: "",
    getAboutDataError: "",


    menuPostStatus: "",
    menuPostError: "",
    menuEditStatus: "",
    menuEditError: "",
    menuEditPicStatus: "",
    menuEditPicError: "",
    menuDeleteStatus: "",
    menuDeleteError: "",
    getMenuDataStatus: "",
    getMenuDataError: "",
    getMenuDataSingleStatus: "",
    getMenuDataSingleError: "",


    productPostStatus: "",
    productPostError: "",
    productEditStatus: "",
    productEditError: "",
    productEditPicStatus: "",
    productEditPicError: "",
    productDeleteStatus: "",
    productDeleteError: "",
    getProductDataStatus: "",
    getProductDataError: "",
    getProductDataSingleStatus: "",
    getProductDataSingleError: "",


    reviewPostStatus: "",
    reviewPostError: "",
    reviewEditStatus: "",
    reviewEditError: "",
    reviewEditPicStatus: "",
    reviewEditPicError: "",
    reviewDeleteStatus: "",
    reviewDeleteError: "",
    getReviewDataStatus: "",
    getReviewDataError: "",
    getReviewDataSingleStatus: "",
    getReviewDataSingleError: "",


    contactPostStatus: "",
    contactPostError: "",
    contactDeleteStatus: "",
    contactDeleteError: "",
    getContactDataStatus: "",
    getContactDataError: "",
   

    blogPostStatus: "",
    blogPostError: "",
    blogEditStatus: "",
    blogEditError: "",
    blogEditPicStatus: "",
    blogEditPicError: "",
    blogDeleteStatus: "",
    blogDeleteError: "",
    getBlogDataStatus: "",
    getBlogDataError: "",
    getBlogDataSingleStatus: "",
    getBlogDataSingleError: "",


    profilePostStatus: "",
    profilePostError: "",
    profileEditStatus: "",
    profileEditError: "",
    profileEditPicStatus: "",
    profileEditPicError: "",
    profileDeleteStatus: "",
    profileDeleteError: "",
    getProfileDataStatus: "",
    getProfileDataError: "",
    getProfileDataSingleStatus: "",
    getProfileDataSingleError: "",

    cartTotal: 0,
    cartPostStatus: "",
    cartPostError: "",
    cartEditStatus: "",
    cartEditError: "",
    cartEditPicStatus: "",
    cartEditPicError: "",
    cartDeleteStatus: "",
    cartDeleteError: "",
    getCartDataStatus: "",
    getCartDataError: "",
    getCartDataSingleStatus: "",
    getCartDataSingleError: "",


    cartAddStatus: "",
    cartAddError: "",
    cartRemoveStatus: "",
    cartRemoveError: "",
    cartGetStatus: "",
    cartGetError: "",
    




    paymentPostStatus: "",
    paymentPostError: "",


 
}


export const menuPost = createAsyncThunk(
    "panel/menuPost",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
            
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            console.log(data)
            // const {formData, name, price, pprice } = data;
            
            const response = await axios.post(baseURL + "menu/", data, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);
export const productPost = createAsyncThunk(
    "panel/productPost",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            console.log(data)
            // const {formData, name, price, pprice } = data;
            
            const response = await axios.post(baseURL + "product/", data, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const reviewPost = createAsyncThunk(
    "panel/reviewPost",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            console.log(data)
            // const {formData, name, price, pprice } = data;
            
            const response = await axios.post(baseURL + "review/", data, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const contactPost = createAsyncThunk(
    "panel/contactPost",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            console.log(data)
            // const {formData, name, price, pprice } = data;
            
            const response = await axios.post(baseURL + "contact/", data, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const blogPost = createAsyncThunk(
    "panel/blogPost",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            console.log(data)
            // const {formData, name, price, pprice } = data;
            
            const response = await axios.post(baseURL + "blog/", data, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const profilePost = createAsyncThunk(
    "panel/profilePost",
    async (data , thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            console.log(data)
            // const {formData, name, price, pprice } = data;
            
            const response = await axios.post(baseURL2 + "profile/", data, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const cartPost = createAsyncThunk(
    "panel/cartPost",
    async (thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token
         
            console.log(token)
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            // console.log(config)
            // console.log(data)
            // const {formData, name, price, pprice } = data;
            
            const response = await axios.get(baseURL2 + "cart2/", config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const paymentPost = createAsyncThunk(
    "panel/paymentPost",
    async (data , thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    
                }
            }
            // console.log(data)
            // const {formData, name, price, pprice } = data;
            
            const response = await axios.post(baseURL3 + "paynow/", data, config);
           
            return response.data;
            console.log(response.data)
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const heroEdit = createAsyncThunk(
    "panel/heroEdit",
    async (tas , thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('admin'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const {title, talk, color} = tas;
            
            const response = await axios.put(baseURL + "hero/" , {
                title,
                talk,
                color
                
                
            }, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const aboutEdit = createAsyncThunk(
    "panel/aboutEdit",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const {title, talk } = data;
            
            const response = await axios.put(baseURL + "about/" , {
                title,
                talk,
                
            }, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const menuEdit = createAsyncThunk(
    "panel/menuEdit",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const { name, price, pprice } = data;
            const id = localStorage.getItem('editId')
            
            const response = await axios.put(baseURL + "menu/" +id , {
               
               name,
               price,
               pprice
                
            }, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);
export const productEdit = createAsyncThunk(
    "panel/productEdit",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const { name, price, pprice } = data;
            const id = localStorage.getItem('editId')
            
            const response = await axios.put(baseURL + "product/" +id , {
               
               name,
               price,
               pprice
                
            }, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

export const reviewEdit = createAsyncThunk(
    "panel/productEdit",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const { reviewText, name,  } = data;
            const id = localStorage.getItem('editId')
            
            const response = await axios.put(baseURL + "review/" +id , {
               
                reviewText,
                name,
               
                
            }, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const contactEdit = createAsyncThunk(
    "panel/contactEdit",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const { response } = data;
            const id = localStorage.getItem('editId')
            
            const Bresponse = await axios.put(baseURL + "contact/" +id , {
               
               response
               
                
            }, config);
           
            return Bresponse.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

export const blogEdit = createAsyncThunk(
    "panel/blogEdit",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const { name, person, blogText  } = data;
            const id = localStorage.getItem('editId')
            
            const response = await axios.put(baseURL + "blog/" +id , {
               
                
                name,
                person,
                blogText
               
                
            }, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const profileEdit = createAsyncThunk(
    "panel/profileEdit",
    async (data , thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const { name, number, address  } = data;
            const mainUser = JSON.parse(localStorage.getItem('user'))
            const id = mainUser._id
            const response = await axios.put(baseURL2 + "profile/" +id , {
               
                
                name,
                number,
                address
               
                
            }, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


// export const cartEdit = createAsyncThunk(
//     "panel/cartEdit",
//     async (data , thunkAPI) => {
//         try {
//             const user = JSON.parse(localStorage.getItem('user'))
//             const token = user.token
         
//             const config = {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             }
//             const { items, isEmpty, totalItems, totalUniqueItems, cartTotal, price  } = data;
//             // const id = localStorage.getItem('editId')
//             const mainUser = JSON.parse(localStorage.getItem('user'))
//              const id = mainUser._id
            
//             const response = await axios.put(baseURL2 + "cart/" +id , {
               
                
//                 items,
//                 isEmpty,
//                 // totalItems,
//                 totalUniqueItems,
//                 cartTotal,
//                 price
                
//             }, config);
           
//             return response.data;
//         } catch (error) {
//             console.log(error);
//             return thunkAPI.rejectWithValue(error.response?.data)
//         }
//     }
// );
export const cartEdit = createAsyncThunk(
    "panel/cartEdit",
    async ( thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
           
        
          
            
            const response = await axios.put(baseURL2 + "cart/", {
               
              
                
            }, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const cartAdd = createAsyncThunk(
    "panel/cartAdd",
    async (data , thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const {_id, name, picture, price  } = data;
            // const id = localStorage.getItem('editId')
            const mainUser = JSON.parse(localStorage.getItem('user'))
             const id = mainUser._id
            
            const response = await axios.put(baseURL2 + "cart/add/"  , {
               
                _id,
                name,
                picture,
                price
                
            }, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const cartRemoveFull = createAsyncThunk(
    "panel/cartRemoveFull",
    async (data , thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const { _id } = data;
         
           
             
            
            const response = await axios.put(baseURL2 + "cart/removefull/"  ,data, config);

            console.log(response)
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

export const cartRemove = createAsyncThunk(
    "panel/cartRemove",
    async (data , thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const { _id } = data;
         
           
             
            
            const response = await axios.put(baseURL2 + "cart/remove/"  ,data, config);

            console.log(response)
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const cartGet = createAsyncThunk(
    "panel/cartGet",
    async (data , thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const { id } = data;
         
            
             
            
            const response = await axios.put(baseURL2 + "cart/get/" +id , config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const menuDelete = createAsyncThunk(
    "panel/menuDelete",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            
            const id = localStorage.getItem('editId')
            
            const response = await axios.delete(baseURL + "menu/" +id , config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const productDelete = createAsyncThunk(
    "panel/productDelete",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            
            const id = localStorage.getItem('editId')
            
            const response = await axios.delete(baseURL + "product/" +id , config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const reviewDelete = createAsyncThunk(
    "panel/reviewDelete",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token

         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            
            const id = localStorage.getItem('editId')
            
            const response = await axios.delete(baseURL + "review/" +id , config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const contactDelete = createAsyncThunk(
    "panel/contactDelete",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            
            const id = localStorage.getItem('editId')
            
            const response = await axios.delete(baseURL + "contact/" +id , config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const blogDelete = createAsyncThunk(
    "panel/blogDelete",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            
            const id = localStorage.getItem('editId')
            
            const response = await axios.delete(baseURL + "blog/" +id , config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

export const profileDelete = createAsyncThunk(
    "panel/profileDelete",
    async (data , thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            
            const id = localStorage.getItem('editId')
            
            const response = await axios.delete(baseURL2 + "profile/" +id , config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

export const cartDelete = createAsyncThunk(
    "panel/cartDelete",
    async (data , thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            
            // const id = localStorage.getItem('editId')
            const id = user._id
            
            const response = await axios.delete(baseURL2 + "cart/" +id , config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const heroEditPic = createAsyncThunk(
    "panel/heroEditPic",
    async (data , thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('admin'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            
            
            const response = await axios.put(baseURL + "heropic/" , data, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

export const aboutEditPic = createAsyncThunk(
    "panel/aboutEditPic",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            
            
            const response = await axios.put(baseURL + "aboutpic/" , data, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

export const menuEditPic = createAsyncThunk(
    "panel/menuEditPic",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const id = localStorage.getItem('editId')
            
            
            const response = await axios.put(baseURL + "menupic/" +id, data, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);
export const productEditPic = createAsyncThunk(
    "panel/productEditPic",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const id = localStorage.getItem('editId')
            
            
            const response = await axios.put(baseURL + "productpic/" +id, data, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const reviewEditPic = createAsyncThunk(
    "panel/reviewEditPic",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const id = localStorage.getItem('editId')
            
            
            const response = await axios.put(baseURL + "reviewpic/" +id, data, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

export const blogEditPic = createAsyncThunk(
    "panel/blogEditPic",
    async (data , thunkAPI) => {
        try {
            const admin = JSON.parse(localStorage.getItem('admin'))
            const token = admin.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const id = localStorage.getItem('editId')
            
            
            const response = await axios.put(baseURL + "blogpic/" +id, data, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const profileEditPic = createAsyncThunk(
    "panel/profileEditPic",
    async (data , thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const mainUser = JSON.parse(localStorage.getItem('user'))
            const id = mainUser._id
            
            
            const response = await axios.put(baseURL2 + "profilepic/" +id, data, config);
           
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


export const getHeroData = createAsyncThunk(
    "panel/getHeroData",
    async (id = null, { rejectWithValue }) => {

        try {
            // const user = JSON.parse(localStorage.getItem('admin'))
            // const token = user.token
         
            // const config = {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // }
            const response = await axios.get(baseURL + "hero/");
           
            
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);


export const getAboutData = createAsyncThunk(
    "panel/getAboutData",
    async (id = null, { rejectWithValue }) => {

        try {
            // const admin = JSON.parse(localStorage.getItem('admin'))
            // const token = admin.token
         
            // const config = {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // }
            const response = await axios.get(baseURL + "about/");
           
           
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);

export const getMenuData = createAsyncThunk(
    "panel/getMenuData",
    async (id = null, { rejectWithValue }) => {

        try {
            // const admin = JSON.parse(localStorage.getItem('admin'))
            // const token = admin.token
         
            // const config = {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // }
            const response = await axios.get(baseURL + "menu/");
           
           
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);

export const getProductData = createAsyncThunk(
    "panel/getProductData",
    async (id = null, { rejectWithValue }) => {

        try {
            // const admin = JSON.parse(localStorage.getItem('admin'))
            // const token = admin.token
         
            // const config = {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // }
            const response = await axios.get(baseURL + "product/");
           
           
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);


export const getReviewData = createAsyncThunk(
    "panel/getReviewData",
    async (id = null, { rejectWithValue }) => {

        try {
            // const admin = JSON.parse(localStorage.getItem('admin'))
            // const token = admin.token
         
            // const config = {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // }
            const response = await axios.get(baseURL + "review/");
           
           
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);

export const getContactData = createAsyncThunk(
    "panel/getContactData",
    async (id = null, { rejectWithValue }) => {

        try {
            // const admin = JSON.parse(localStorage.getItem('admin'))
            // const token = admin.token
         
            // const config = {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // }
            const response = await axios.get(baseURL + "contact/");
           
           
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);


export const getBlogData = createAsyncThunk(
    "panel/getBlogData",
    async (id = null, { rejectWithValue }) => {

        try {
            // const admin = JSON.parse(localStorage.getItem('admin'))
            // const token = admin.token
         
            // const config = {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // }
            const response = await axios.get(baseURL + "blog/");
           
           
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);
export const getProfileData = createAsyncThunk(
    "panel/getProfileData",
    async (id = null, { rejectWithValue }) => {

        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }


            const response = await axios.get(baseURL2 + "profile/", config);
           
           
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);
export const getCartData = createAsyncThunk(
    "panel/getCartData",
    async (id = null, { rejectWithValue }) => {

        try {
            const user = JSON.parse(localStorage.getItem('user'))

            let token
            if (user){
                 token = user.token

                 const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
                const response = await axios.get(baseURL2 + "cart/", config);
               
               
                return response.data;
            }

           
           
         
         

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);




export const getMenuDataSingle = createAsyncThunk(
    "panel/getMenuDataSingle",
    async (id, { rejectWithValue }) => {

        try {
            
            const response = await axios.get(baseURL + "menu/" +id);
           
           
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);

export const getProductDataSingle = createAsyncThunk(
    "panel/getProductDataSingle",
    async (id, { rejectWithValue }) => {

        try {
            
            const response = await axios.get(baseURL + "product/" +id);
           
           
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);


export const getReviewDataSingle = createAsyncThunk(
    "panel/getReviewDataSingle",
    async (id, { rejectWithValue }) => {

        try {
            
            const response = await axios.get(baseURL + "review/" +id);
           
           
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);


export const getContactDataSingle = createAsyncThunk(
    "panel/getContactDataSingle",
    async (id, { rejectWithValue }) => {

        try {
            
            const response = await axios.get(baseURL + "contact/" +id);
           
           
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);


export const getBlogDataSingle = createAsyncThunk(
    "panel/getBlogDataSingle",
    async (id, { rejectWithValue }) => {

        try {
            
            const response = await axios.get(baseURL + "blog/" +id);
           
           
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);

export const getProfileDataSingle = createAsyncThunk(
    "panel/getProfileDataSingle",
    async (id, { rejectWithValue }) => {

        try {

            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token
         
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            
            const response = await axios.get(baseURL2 + "profile/" +id, config);
           
           
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);

export const getCartDataSingle = createAsyncThunk(
    "panel/getCartDataSingle",
    async (id, { rejectWithValue }) => {

        const user = JSON.parse(localStorage.getItem('user'))
        const token = user.token
     
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {

            const id = localStorage.getItem('editId')
            
            const response = await axios.get(baseURL2 + "cart/" +id, config);
           
           
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data)
        }
    }
);



export const adminPanelSlice = createSlice({
    name: 'panel',
    initialState,
    reducers: {

         
            menuEditBtnClick: (state, action) => { 
                state.menuEditBtn = true
                
            },
            menuEditBtnCancel: (state, action) => { 
                state.menuEditBtn = false
               
            },
            productEditBtnClick: (state, action) => { 
                state.productEditBtn = true
                
            },
            productEditBtnCancel: (state, action) => { 
                state.productEditBtn = false
               
            },
            reviewEditBtnClick: (state, action) => { 
                state.reviewEditBtn = true
                
            },
            reviewEditBtnCancel: (state, action) => { 
                state.reviewEditBtn = false
               
            },
            contactEditBtnClick: (state, action) => { 
                state.contactEditBtn = true
                
            },
            contactEditBtnCancel: (state, action) => { 
                state.contactEditBtn = false
               
            },
            blogEditBtnClick: (state, action) => { 
                state.blogEditBtn = true
                
            },
            blogEditBtnCancel: (state, action) => { 
                state.blogEditBtn = false
               
            },
            profileEditBtnClick: (state, action) => { 
                state.profileEditBtn = true
                
            },
            profileEditBtnCancel: (state, action) => { 
                state.profileEditBtn = false
               
            },
            cartEditBtnClick: (state, action) => { 
                state.cartEditBtn = true
                
            },
            cartEditBtnCancel: (state, action) => { 
                state.cartEditBtn = false
               
            },
            idForMenuEdit: (state, action) => {
                state.menuEditId = action.payload;
            },

            cartIncrease: (state, action) => {
                state.cartTotal  += action.payload
            },


            homePageTrigger: (state, action) => {
                state.homePageLocated = true

                state.adminPanelLocated = false
                state.userPanelLocated = false
            },
            userPanelPageTrigger: (state, action) => {
                state.homePageLocated = false
                state.cartPageLocated = false
                state.adminPanelLocated = false
                state.userPanelLocated = true
            },
            adminPanelPageTrigger: (state, action) => {
                state.homePageLocated = false
                state.cartPageLocated = false
                state.adminPanelLocated = true
                state.userPanelLocated = false
            },
            
            cartPageTrigger: (state, action) => {
                state.homePageLocated = false
                state.cartPageLocated = true
                state.adminPanelLocated = false
                state.userPanelLocated = false
            },
            
            loginPageTrigger: (state, action) => {
                state.homePageLocated = false
                state.cartPageLocated = false
                state.adminPanelLocated = false
                state.userPanelLocated = false
                state.loginPageLocated = true
            },
            
            regiPageTrigger: (state, action) => {
                state.homePageLocated = false
                state.cartPageLocated = false
                state.adminPanelLocated = false
                state.userPanelLocated = false
                state.regiPageLocated = true
            },
            

        
       
    },
    extraReducers: {


        [getHeroData.pending]: (state, action) => {
            return {
                ...state,
                getHeroDataStatus: "pending",
                getHeroDataError: ""
            }
        },
        [getHeroData.fulfilled]: (state, action) => {
            return {
                ...state,
                heroData: action.payload,
                getHeroDataStatus: "success",
                getHeroDataError: ""
            }
        },
        [getHeroData.rejected]: (state, action) => {
            return {
                ...state,
                getHeroDataStatus: "rejected",
                getHeroDataError: action.payload
                
            }
        },
        [heroEdit.pending]: (state, action) => {
            return {
                ...state,
                heroEditStatus: "pending",
                heroEditError: "",
            }
        },
        [heroEdit.fulfilled]: (state, action) => {
            return {
                ...state,
               
                heroEditStatus: "success",
                heroEditError: "",
            }
        },
        [heroEdit.rejected]: (state, action) => {
            return {
                ...state,
                heroEditStatus: "rejected",
                heroEditError: action.payload,     
            }
        },
        [heroEditPic.pending]: (state, action) => {
            return {
                ...state,
                heroEditPicStatus: "pending",
                heroEditPicError: "",
            }
        },
        [heroEditPic.fulfilled]: (state, action) => {
            return {
                ...state,
                heroEditPicStatus: "success",
                heroEditPicError: "",
            }
        },
        [heroEditPic.rejected]: (state, action) => {
            return {
                ...state,
                heroEditPicStatus: "rejected",
                heroEditPicError: action.payload,           
            }
        },
        [getAboutData.pending]: (state, action) => {
            return {
                ...state,
                getAboutDataStatus: "pending",
                getAboutDataError: ""
            }
        },
        [getAboutData.fulfilled]: (state, action) => {
            return {
                ...state,
                aboutData: action.payload,
                getAboutDataStatus: "success",
                getAboutDataError: ""
            }
        },
        [getAboutData.rejected]: (state, action) => {
            return {
                ...state,
                getAboutDataStatus: "rejected",
                getAboutDataError: action.payload
                
            }
        },
        [aboutEdit.pending]: (state, action) => {
            return {
                ...state,
                aboutEditStatus: "pending",
                aboutEditError: "",
            }
        },
        [aboutEdit.fulfilled]: (state, action) => {
            return {
                ...state,
               
                aboutEditStatus: "success",
                aboutEditError: "",
            }
        },
        [aboutEdit.rejected]: (state, action) => {
            return {
                ...state,
                aboutEditStatus: "rejected",
                aboutEditError: action.payload,
            }
        },
        [aboutEditPic.pending]: (state, action) => {
            return {
                ...state,
                aboutEditPicStatus: "pending",
                aboutEditPicError: "",
            }
        },
        [aboutEditPic.fulfilled]: (state, action) => {
            return {
                ...state,    
                aboutEditPicStatus: "success",
                aboutEditPicError: "",
            }
        },
        [aboutEditPic.rejected]: (state, action) => {
            return {
                ...state,
                aboutEditPicStatus: "rejected",
                aboutEditPicError: action.payload,
            }
        },
        [menuPost.pending]: (state, action) => {
          return {
            ...state,
            menuPostStatus: "pending",
            menuPostError: ""
          }
        },
        [menuPost.fulfilled]: (state, action) => {
          return {
            ...state,
            menuPostStatus: "success",
            menuPostError: ""
          }
        },
        [menuPost.rejected]: (state, action) => {
          return {
            ...state,
            menuPostStatus: "rejected",
            menuPostError: action.payload
          }
        },
        [getMenuData.pending]: (state, action) => {
            return {
                ...state,
                getMenuDataStatus: "pending",
                getMenuDataError: ""
            }
        },
        [getMenuData.fulfilled]: (state, action) => {
            return {
                ...state,    
                menuData: action.payload,
                getMenuDataStatus: "fulfilled",
                getMenuDataError: ""
            }
        },
        [getMenuData.rejected]: (state, action) => {
            return {
                ...state,
                getMenuDataStatus: "rejected",
                getMenuDataError: action.payload
            }
        },
        [getMenuDataSingle.pending]: (state, action) => {
            return {
                ...state,
                getMenuDataSingleStatus: "pending",
                getMenuDataSingleError: ""
            }
        },
        [getMenuDataSingle.fulfilled]: (state, action) => {
            return {
                ...state,    
                menuDataSingle: action.payload,
                getMenuDataSingleStatus: "fulfilled",
                getMenuDataSingleError: ""
            }
        },
        [getMenuDataSingle.rejected]: (state, action) => {
            return {
                ...state,
                getMenuDataSingleStatus: "rejected",
                getMenuDataSingleError: action.payload
            }
        },
        [menuEdit.pending]: (state, action) => {
            return {
                ...state,
                menuEditStatus: "pending",
                menuEditError: "",
            }
        },
        [menuEdit.fulfilled]: (state, action) => {
            return {
                ...state,
               
                menuEditStatus: "success",
                menuEditError: "",
            }
        },
        [menuEdit.rejected]: (state, action) => {
            return {
                ...state,
                menuEditStatus: "rejected",
                menuEditError: action.payload,     
            }
        },
        [menuDelete.pending]: (state, action) => {
            return {
                ...state,
                menuDeleteStatus: "pending",
                menuDeleteError: "",
            }
        },
        [menuDelete.fulfilled]: (state, action) => {
            return {
                ...state,
               
                menuDeleteStatus: "success",
                menuDeleteError: "",
            }
        },
        [menuDelete.rejected]: (state, action) => {
            return {
                ...state,
                menuDeleteStatus: "rejected",
                menuDeleteError: action.payload,     
            }
        },
        [menuEditPic.pending]: (state, action) => {
            return {
                ...state,
                menuEditPicStatus: "pending",
                menuEditPicError: "",
            }
        },
        [menuEditPic.fulfilled]: (state, action) => {
            return {
                ...state,
                menuEditPicStatus: "success",
                menuEditPicError: "",
            }
        },
        [menuEditPic.rejected]: (state, action) => {
            return {
                ...state,
                menuEditPicStatus: "rejected",
                menuEditPicError: action.payload,           
            }
        },
        [productPost.pending]: (state, action) => {
            return {
              ...state,
              productPostStatus: "pending",
              productPostError: ""
            }
          },
          [productPost.fulfilled]: (state, action) => {
            return {
              ...state,
              productPostStatus: "success",
              productPostError: ""
            }
          },
          [productPost.rejected]: (state, action) => {
            return {
              ...state,
              productPostStatus: "rejected",
              productPostError: action.payload
            }
          },
        [getProductData.pending]: (state, action) => {
            return {
                ...state,
                getProductDataStatus: "pending",
                getProductDataError: ""
            }
        },
        [getProductData.fulfilled]: (state, action) => {
            return {
                ...state,    
                productData: action.payload,
                getProductDataStatus: "fulfilled",
                getProductDataError: ""
            }
        },
        [getProductData.rejected]: (state, action) => {
            return {
                ...state,
                getProductDataStatus: "rejected",
                getProductDataError: action.payload
            }
        },
        [getProductDataSingle.pending]: (state, action) => {
            return {
                ...state,
                getProductDataSingleStatus: "pending",
                getProductDataSingleError: ""
            }
        },
        [getProductDataSingle.fulfilled]: (state, action) => {
            return {
                ...state,    
                productDataSingle: action.payload,
                getProductDataSingleStatus: "fulfilled",
                getProductDataSingleError: ""
            }
        },
        [getProductDataSingle.rejected]: (state, action) => {
            return {
                ...state,
                getProductDataSingleStatus: "rejected",
                getProductDataSingleError: action.payload
            }
        },
        [productEdit.pending]: (state, action) => {
            return {
                ...state,
                productEditStatus: "pending",
                productEditError: "",
            }
        },
        [productEdit.fulfilled]: (state, action) => {
            return {
                ...state,
               
                productEditStatus: "success",
                productEditError: "",
            }
        },
        [productEdit.rejected]: (state, action) => {
            return {
                ...state,
                productEditStatus: "rejected",
                productEditError: action.payload,     
            }
        },
        [productDelete.pending]: (state, action) => {
            return {
                ...state,
                productDeleteStatus: "pending",
                productDeleteError: "",
            }
        },
        [productDelete.fulfilled]: (state, action) => {
            return {
                ...state,
               
                productDeleteStatus: "success",
                productDeleteError: "",
            }
        },
        [productDelete.rejected]: (state, action) => {
            return {
                ...state,
                productDeleteStatus: "rejected",
                productDeleteError: action.payload,     
            }
        },
        [productEditPic.pending]: (state, action) => {
            return {
                ...state,
                producEditPicStatus: "pending",
                producEditPicError: "",
            }
        },
        [productEditPic.fulfilled]: (state, action) => {
            return {
                ...state,
                productEditPicStatus: "success",
                productEditPicError: "",
            }
        },
        [productEditPic.rejected]: (state, action) => {
            return {
                ...state,
                productEditPicStatus: "rejected",
                productEditPicError: action.payload,           
            }
        },
        [reviewPost.pending]: (state, action) => {
            return {
              ...state,
              reviewPostStatus: "pending",
              reviewPostError: ""
            }
          },
          [reviewPost.fulfilled]: (state, action) => {
            return {
              ...state,
              reviewPostStatus: "success",
              reviewPostError: ""
            }
          },
          [reviewPost.rejected]: (state, action) => {
            return {
              ...state,
              reviewPostStatus: "rejected",
              reviewPostError: action.payload
            }
          },
        [getReviewData.pending]: (state, action) => {
            return {
                ...state,
                getReviewDataStatus: "pending",
                getReviewDataError: ""
            }
        },
        [getReviewData.fulfilled]: (state, action) => {
            return {
                ...state,    
                reviewData: action.payload,
                getReviewDataStatus: "fulfilled",
                getReviewDataError: ""
            }
        },
        [getReviewData.rejected]: (state, action) => {
            return {
                ...state,
                getReviewDataStatus: "rejected",
                getReviewDataError: action.payload
            }
        },
        [getReviewDataSingle.pending]: (state, action) => {
            return {
                ...state,
                getReviewDataSingleStatus: "pending",
                getReviewDataSingleError: ""
            }
        },
        [getReviewDataSingle.fulfilled]: (state, action) => {
            return {
                ...state,    
                reviewDataSingle: action.payload,
                getReviewDataSingleStatus: "fulfilled",
                getReviewDataSingleError: ""
            }
        },
        [getReviewDataSingle.rejected]: (state, action) => {
            return {
                ...state,
                getReviewDataSingleStatus: "rejected",
                getReviewDataSingleError: action.payload
            }
        },
        [reviewEdit.pending]: (state, action) => {
            return {
                ...state,
                reviewEditStatus: "pending",
                reviewEditError: "",
            }
        },
        [reviewEdit.fulfilled]: (state, action) => {
            return {
                ...state,
               
                reviewEditStatus: "success",
                reviewEditError: "",
            }
        },
        [reviewEdit.rejected]: (state, action) => {
            return {
                ...state,
                reviewEditStatus: "rejected",
                reviewEditError: action.payload,     
            }
        },
        [reviewDelete.pending]: (state, action) => {
            return {
                ...state,
                reviewDeleteStatus: "pending",
                reviewDeleteError: "",
            }
        },
        [reviewDelete.fulfilled]: (state, action) => {
            return {
                ...state,
               
                reviewDeleteStatus: "success",
                reviewDeleteError: "",
            }
        },
        [reviewDelete.rejected]: (state, action) => {
            return {
                ...state,
                reviewDeleteStatus: "rejected",
                reviewDeleteError: action.payload,     
            }
        },
        [reviewEditPic.pending]: (state, action) => {
            return {
                ...state,
                reviewEditPicStatus: "pending",
                reviewEditPicError: "",
            }
        },
        [reviewEditPic.fulfilled]: (state, action) => {
            return {
                ...state,
                reviewEditPicStatus: "success",
                reviewEditPicError: "",
            }
        },
        [reviewEditPic.rejected]: (state, action) => {
            return {
                ...state,
                reviewEditPicStatus: "rejected",
                reviewEditPicError: action.payload,           
            }
        },
        [contactPost.pending]: (state, action) => {
            return {
              ...state,
              contactPostStatus: "pending",
              contactPostError: ""
            }
          },
          [contactPost.fulfilled]: (state, action) => {
            return {
              ...state,
              contactPostStatus: "success",
              contactPostError: ""
            }
          },
          [contactPost.rejected]: (state, action) => {
            return {
              ...state,
              contactPostStatus: "rejected",
              contactPostError: action.payload
            }
          },
        [getContactData.pending]: (state, action) => {
            return {
                ...state,
                getContactDataStatus: "pending",
                getContactDataError: ""
            }
        },
        [getContactData.fulfilled]: (state, action) => {
            return {
                ...state,    
                contactData: action.payload,
                getContactDataStatus: "fulfilled",
                getContactDataError: ""
            }
        },
        [getContactData.rejected]: (state, action) => {
            return {
                ...state,
                getContactDataStatus: "rejected",
                getContactDataError: action.payload
            }
        },
        [getContactDataSingle.pending]: (state, action) => {
            return {
                ...state,
                getContactDataSingleStatus: "pending",
                getContactDataSingleError: ""
            }
        },
        [getContactDataSingle.fulfilled]: (state, action) => {
            return {
                ...state,    
                contactDataSingle: action.payload,
                getContactDataSingleStatus: "fulfilled",
                getContactDataSingleError: ""
            }
        },
        [getContactDataSingle.rejected]: (state, action) => {
            return {
                ...state,
                getContactDataSingleStatus: "rejected",
                getContactDataSingleError: action.payload
            }
        },
     
        [contactDelete.pending]: (state, action) => {
            return {
                ...state,
                contactDeleteStatus: "pending",
                contactDeleteError: "",
            }
        },
        [contactDelete.fulfilled]: (state, action) => {
            return {
                ...state,
               
                contactDeleteStatus: "success",
                contactDeleteError: "",
            }
        },
        [contactDelete.rejected]: (state, action) => {
            return {
                ...state,
                contactDeleteStatus: "rejected",
                contactDeleteError: action.payload,     
            }
        },
        [blogPost.pending]: (state, action) => {
            return {
              ...state,
              blogPostStatus: "pending",
              blogPostError: ""
            }
          },
          [blogPost.fulfilled]: (state, action) => {
            return {
              ...state,
              blogPostStatus: "success",
              blogPostError: ""
            }
          },
          [blogPost.rejected]: (state, action) => {
            return {
              ...state,
              blogPostStatus: "rejected",
              blogPostError: action.payload
            }
          },
        [getBlogData.pending]: (state, action) => {
            return {
                ...state,
                getBlogDataStatus: "pending",
                getBlogDataError: ""
            }
        },
        [getBlogData.fulfilled]: (state, action) => {
            return {
                ...state,    
                blogData: action.payload,
                getBlogDataStatus: "fulfilled",
                getBlogDataError: ""
            }
        },
        [getBlogData.rejected]: (state, action) => {
            return {
                ...state,
                getBlogDataStatus: "rejected",
                getBlogDataError: action.payload
            }
        },
        [getBlogDataSingle.pending]: (state, action) => {
            return {
                ...state,
                getBlogDataSingleStatus: "pending",
                getBlogDataSingleError: ""
            }
        },
        [getBlogDataSingle.fulfilled]: (state, action) => {
            return {
                ...state,    
                blogDataSingle: action.payload,
                getBlogDataSingleStatus: "fulfilled",
                getBlogDataSingleError: ""
            }
        },
        [getBlogDataSingle.rejected]: (state, action) => {
            return {
                ...state,
                getBlogDataSingleStatus: "rejected",
                getBlogDataSingleError: action.payload
            }
        },
        [blogEdit.pending]: (state, action) => {
            return {
                ...state,
                blogEditStatus: "pending",
                blogEditError: "",
            }
        },
        [blogEdit.fulfilled]: (state, action) => {
            return {
                ...state,
               
                blogEditStatus: "success",
                blogEditError: "",
            }
        },
        [blogEdit.rejected]: (state, action) => {
            return {
                ...state,
                blogEditStatus: "rejected",
                blogEditError: action.payload,     
            }
        },
        [blogDelete.pending]: (state, action) => {
            return {
                ...state,
                blogDeleteStatus: "pending",
                blogDeleteError: "",
            }
        },
        [blogDelete.fulfilled]: (state, action) => {
            return {
                ...state,
               
                blogDeleteStatus: "success",
                blogDeleteError: "",
            }
        },
        [blogDelete.rejected]: (state, action) => {
            return {
                ...state,
                blogDeleteStatus: "rejected",
                blogDeleteError: action.payload,     
            }
        },
        [blogEditPic.pending]: (state, action) => {
            return {
                ...state,
                blogEditPicStatus: "pending",
                blogEditPicError: "",
            }
        },
        [blogEditPic.fulfilled]: (state, action) => {
            return {
                ...state,
                blogEditPicStatus: "success",
                blogEditPicError: "",
            }
        },
        [blogEditPic.rejected]: (state, action) => {
            return {
                ...state,
                blogEditPicStatus: "rejected",
                blogEditPicError: action.payload,           
            }
        },


        [profilePost.pending]: (state, action) => {
            return {
              ...state,
              profilePostStatus: "pending",
              profilePostError: ""
            }
          },
          [profilePost.fulfilled]: (state, action) => {
            return {
              ...state,
              profilePostStatus: "success",
              profilePostError: ""
            }
          },
          [profilePost.rejected]: (state, action) => {
            return {
              ...state,
              profilePostStatus: "rejected",
              profilePostError: action.payload
            }
          },
        [getProfileData.pending]: (state, action) => {
            return {
                ...state,
                getProfileDataStatus: "pending",
                getProfileDataError: ""
            }
        },
        [getProfileData.fulfilled]: (state, action) => {
            return {
                ...state,    
                profileData: action.payload,
                getProfileDataStatus: "fulfilled",
                getProfileDataError: ""
            }
        },
        [getProfileData.rejected]: (state, action) => {
            return {
                ...state,
                getProfileDataStatus: "rejected",
                getProfileDataError: action.payload
            }
        },
        [getProfileDataSingle.pending]: (state, action) => {
            return {
                ...state,
                getProfileDataSingleStatus: "pending",
                getProfileDataSingleError: ""
            }
        },
        [getProfileDataSingle.fulfilled]: (state, action) => {
            return {
                ...state,    
                profileDataSingle: action.payload,
                getProfileDataSingleStatus: "fulfilled",
                getProfileDataSingleError: ""
            }
        },
        [getProfileDataSingle.rejected]: (state, action) => {
            return {
                ...state,
                getProfileDataSingleStatus: "rejected",
                getProfileDataSingleError: action.payload
            }
        },
        [profileEdit.pending]: (state, action) => {
            return {
                ...state,
                profileEditStatus: "pending",
                profileEditError: "",
            }
        },
        [profileEdit.fulfilled]: (state, action) => {
            return {
                ...state,
               
                profileEditStatus: "success",
                profileEditError: "",
            }
        },
        [profileEdit.rejected]: (state, action) => {
            return {
                ...state,
                profileEditStatus: "rejected",
                profileEditError: action.payload,     
            }
        },
        [profileDelete.pending]: (state, action) => {
            return {
                ...state,
                profileDeleteStatus: "pending",
                profileDeleteError: "",
            }
        },
        [profileDelete.fulfilled]: (state, action) => {
            return {
                ...state,
               
                profileDeleteStatus: "success",
                profileDeleteError: "",
            }
        },
        [profileDelete.rejected]: (state, action) => {
            return {
                ...state,
                profileDeleteStatus: "rejected",
                profileDeleteError: action.payload,     
            }
        },
        [profileEditPic.pending]: (state, action) => {
            return {
                ...state,
                profileEditPicStatus: "pending",
                profileEditPicError: "",
            }
        },
        [profileEditPic.fulfilled]: (state, action) => {
            return {
                ...state,
                profileEditPicStatus: "success",
                profileEditPicError: "",
            }
        },
        [profileEditPic.rejected]: (state, action) => {
            return {
                ...state,
                profileEditPicStatus: "rejected",
                profileEditPicError: action.payload,           
            }
        },



        [cartPost.pending]: (state, action) => {
            return {
              ...state,
              cartPostStatus: "pending",
              cartPostError: ""
            }
          },
          [cartPost.fulfilled]: (state, action) => {
            return {
              ...state,
              cartPostStatus: "success",
              cartPostError: ""
            }
          },
          [cartPost.rejected]: (state, action) => {
            return {
              ...state,
              cartPostStatus: "rejected",
              cartPostError: action.payload
            }
          },
        [getCartData.pending]: (state, action) => {
            return {
                ...state,
                getCartDataStatus: "pending",
                getCartDataError: ""
            }
        },
        [getCartData.fulfilled]: (state, action) => {
            return {
                ...state,    
                cartData: action.payload,
                getCartDataStatus: "fulfilled",
                getCartDataError: ""
            }
        },
        [getCartData.rejected]: (state, action) => {
            return {
                ...state,
                getCartDataStatus: "rejected",
                getCartDataError: action.payload
            }
        },
        [getCartDataSingle.pending]: (state, action) => {
            return {
                ...state,
                getCartDataSingleStatus: "pending",
                getCartDataSingleError: ""
            }
        },
        [getCartDataSingle.fulfilled]: (state, action) => {
            return {
                ...state,    
                cartDataSingle: action.payload,
                getCartDataSingleStatus: "fulfilled",
                getCartDataSingleError: ""
            }
        },
        [getCartDataSingle.rejected]: (state, action) => {
            return {
                ...state,
                getCartDataSingleStatus: "rejected",
                getCartDataSingleError: action.payload
            }
        },
        [cartEdit.pending]: (state, action) => {
            return {
                ...state,
                cartEditStatus: "pending",
                cartEditError: "",
            }
        },
        [cartEdit.fulfilled]: (state, action) => {
            return {
                ...state,
               
                cartEditStatus: "success",
                cartEditError: "",
            }
        },
        [cartEdit.rejected]: (state, action) => {
            return {
                ...state,
                cartEditStatus: "rejected",
                cartEditError: action.payload,     
            }
        },
        [cartDelete.pending]: (state, action) => {
            return {
                ...state,
                cartDeleteStatus: "pending",
                cartDeleteError: "",
            }
        },
        [cartDelete.fulfilled]: (state, action) => {
            return {
                ...state,
               
                cartDeleteStatus: "success",
                cartDeleteError: "",
            }
        },
        [cartDelete.rejected]: (state, action) => {
            return {
                ...state,
                cartDeleteStatus: "rejected",
                cartDeleteError: action.payload,     
            }
        },




        

        [cartAdd.pending]: (state, action) => {
            return {
              ...state,
              cartAddStatus: "pending",
              cartAddError: ""
            }
          },
          [cartAdd.fulfilled]: (state, action) => {
            return {
              ...state,
              cartAddStatus: "success",
              cartAddError: ""
            }
          },
          [cartAdd.rejected]: (state, action) => {
            return {
              ...state,
              cartAddStatus: "rejected",
              cartAddError: action.payload
            }
          },
        [cartGet.pending]: (state, action) => {
            return {
                ...state,
                CartGetStatus: "pending",
                CartGetError: ""
            }
        },
        [cartGet.fulfilled]: (state, action) => {
            return {
                ...state,    
                cartData: action.payload,
                CartGetStatus: "fulfilled",
                CartGetError: ""
            }
        },
        [cartGet.rejected]: (state, action) => {
            return {
                ...state,
                CartGetStatus: "rejected",
                CartGetError: action.payload
            }
        },
        // [getCartDataSingle.pending]: (state, action) => {
        //     return {
        //         ...state,
        //         getCartDataSingleStatus: "pending",
        //         getCartDataSingleError: ""
        //     }
        // },
        // [getCartDataSingle.fulfilled]: (state, action) => {
        //     return {
        //         ...state,    
        //         cartDataSingle: action.payload,
        //         getCartDataSingleStatus: "fulfilled",
        //         getCartDataSingleError: ""
        //     }
        // },
        // [getCartDataSingle.rejected]: (state, action) => {
        //     return {
        //         ...state,
        //         getCartDataSingleStatus: "rejected",
        //         getCartDataSingleError: action.payload
        //     }
        // },
        [cartRemove.pending]: (state, action) => {
            return {
                ...state,
               cartRemoveStatus: "pending",
                cartRemoveError: "",
            }
        },
        [cartRemove.fulfilled]: (state, action) => {
            return {
                ...state,
               
               cartRemoveStatus: "success",
                cartRemoveError: "",
            }
        },
        [cartRemove.rejected]: (state, action) => {
            return {
                ...state,
               cartRemoveStatus: "rejected",
                cartRemoveError: action.payload,     
            }
        },
        // [cartDelete.pending]: (state, action) => {
        //     return {
        //         ...state,
        //         cartDeleteStatus: "pending",
        //         cartDeleteError: "",
        //     }
        // },
        // [cartDelete.fulfilled]: (state, action) => {
        //     return {
        //         ...state,
               
        //         cartDeleteStatus: "success",
        //         cartDeleteError: "",
        //     }
        // },
        // [cartDelete.rejected]: (state, action) => {
        //     return {
        //         ...state,
        //         cartDeleteStatus: "rejected",
        //         cartDeleteError: action.payload,     
        //     }
        // },

        [paymentPost.pending]: (state, action) => {
            return {
              ...state,
              paymentPostStatus: "pending",
              paymentPostError: ""
            }
          },
          [paymentPost.fulfilled]: (state, action) => {
            return {
              ...state,
              paymentData: action.payload,
              paymentPostStatus: "success",
              paymentPostError: ""
            }
          },
          [paymentPost.rejected]: (state, action) => {
            return {
              ...state,
              paymentPostStatus: "rejected",
              paymentPostError: action.payload
            }
          },
        // [cartEditPic.pending]: (state, action) => {
        //     return {
        //         ...state,
        //         cartEditPicStatus: "pending",
        //         cartEditPicError: "",
        //     }
        // },
        // [cartEditPic.fulfilled]: (state, action) => {
        //     return {
        //         ...state,
        //         cartEditPicStatus: "success",
        //         cartEditPicError: "",
        //     }
        // },
        // [cartEditPic.rejected]: (state, action) => {
        //     return {
        //         ...state,
        //         cartEditPicStatus: "rejected",
        //         cartEditPicError: action.payload,           
        //     }
        // },
       
    }

})

export const { menuEditBtnClick, menuEditBtnCancel, idForMenuEdit,
               productEditBtnClick, productEditBtnCancel,
               reviewEditBtnClick, reviewEditBtnCancel,
               blogEditBtnClick, blogEditBtnCancel, 
               contactEditBtnClick, contactEditBtnCancel,
               profileEditBtnClick, profileEditBtnCancel,
               cartEditBtnClick, cartEditBtnCancel, 
               cartIncrease,
               homePageTrigger, userPanelPageTrigger, adminPanelPageTrigger,
               cartPageTrigger,
               loginPageTrigger, regiPageTrigger } = adminPanelSlice.actions;
export default adminPanelSlice.reducer
