import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


// const baseURL = "http://localhost:5000/api/"
const baseURL = "/api/"

const initialState = {
    // user : localStorage.getItem('user') ? localStorage.getItem('user') : null,
    // admin: localStorage.getItem('admin') ? localStorage.getItem('admin') : null,
    nightMode : false,
    userButton : false,
    menuButton : false,

    adminRegistrationStatus: "",
    adminRegistrationError: "",
    adminLoginStatus: "",
    adminLoginError: "",

    userRegistrationStatus: "",
    userRegistrationError: "",
    userLoginStatus: "",
    userLoginError: ""
}


//Admin Registration
export const adminRegistration = createAsyncThunk('auth/adminregistration', async(admin, {rejectWithValue}) => {
    try {
        const response = await axios.post(baseURL + "admin", admin)

        if(response.data) {
            localStorage.setItem('admin', JSON.stringify(response.data))
        }

    } catch (error) {
          console.log(error);
          toast.error(error, {
            position: toast.POSITION.TOP_CENTER
          })
          return rejectWithValue(error.response?.data)
    }
})


//Admin Login
export const adminLogin = createAsyncThunk('auth/adminlogin', async(admin, { rejectWithValue }) => {
    try {
        const response = await axios.post(baseURL + "admin/login", admin)
        if(response.data) {
            localStorage.setItem('admin', JSON.stringify(response.data))
        }
    } catch (error) {
        console.log(error);
       
      
        return rejectWithValue(error.response?.data)
    }
})
//User Registration
export const userRegistration = createAsyncThunk('auth/userregistration', async(user, {rejectWithValue}) => {
    try {
        const response = await axios.post(baseURL + "user", user)

        if(response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }

    } catch (error) {
          console.log(error);
          return rejectWithValue(error.response?.data)
    }
})


//user Login
export const userLogin = createAsyncThunk('auth/userlogin', async(user, { rejectWithValue }) => {
    try {
        const response = await axios.post(baseURL + "user/login", user)
        if(response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response?.data)
    }
})

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        menuButtonClick: (state, action) => {
           
            if(state.userButton) {
                state.userButton = !state.userButton
                state.menuButton = true
            } else {
                state.menuButton = !state.menuButton
            }
        },


        userButtonClick: (state, action) => {
          
            if(state.menuButton) {
                state.menuButton = !state.menuButton
                state.userButton = true
            } else {
                state.userButton = !state.userButton
            }
        },

        nightModeButtonClick: (state, action) => {
            
            state.nightMode = !state.nightMode
        },

        logOut: (state, action) => {
            localStorage.clear()
           }
    },

    extraReducers: {
        [adminRegistration.pending]: (state, action) => {
            return {
                ...state,
               

                adminRegistrationStatus: "pending",
                adminRegistrationError: "",
                adminLoginStatus: "",
                adminLoginError: ""
            }
        },
        [adminRegistration.fulfilled]: (state, action) => {
            return {
                ...state,
               

                adminRegistrationStatus: "success",
                adminRegistrationError: "",
                adminLoginStatus: "",
                adminLoginError: ""
            }
        },
        [adminRegistration.rejected]: (state, action) => {
            return {
                ...state,
               

                adminRegistrationStatus: "rejected",
                adminRegistrationError: action.payload,
                adminLoginStatus: "",
                adminLoginError: ""
            }
        },
        [adminLogin.pending]: (state, action) => {
            return {
                ...state,
               

                adminRegistrationStatus: "",
                adminRegistrationError: "",
                adminLoginStatus: "pending",
                adminLoginError: ""
            }
        },
        [adminLogin.fulfilled]: (state, action) => {
            return {
                ...state,
               

                adminRegistrationStatus: "",
                adminRegistrationError: "",
                adminLoginStatus: "success",
                adminLoginError: ""
            }
        },
        [adminLogin.rejected]: (state, action) => {
            return {
                ...state,
               

                adminRegistrationStatus: "",
                adminRegistrationError: "",
                adminLoginStatus: "rejected",
                adminLoginError: action.payload
            }
        },
        [userRegistration.pending]: (state, action) => {
            return {
                ...state,
               

                adminRegistrationStatus: "",
                adminRegistrationError: "",
                adminLoginStatus: "",
                adminLoginError: "",

                userRegistrationStatus: "pending",
                userRegistrationError: "",
                userLoginStatus: "",
                userLoginError: ""
            }
        },
        [userRegistration.fulfilled]: (state, action) => {
            return {
                ...state,
               

                adminRegistrationStatus: "",
                adminRegistrationError: "",
                adminLoginStatus: "",
                adminLoginError: "",

                userRegistrationStatus: "success",
                userRegistrationError: "",
                userLoginStatus: "",
                userLoginError: ""
            }
        },
        [userRegistration.rejected]: (state, action) => {
            return {
                ...state,
               

                adminRegistrationStatus: "",
                adminRegistrationError: "",
                adminLoginStatus: "",
                adminLoginError: "",

                userRegistrationStatus: "rejected",
                userRegistrationError: action.payload,
                userLoginStatus: "",
                userLoginError: ""
            }
        },
        [userLogin.pending]: (state, action) => {
            return {
                ...state,
               

                adminRegistrationStatus: "",
                adminRegistrationError: "",
                adminLoginStatus: "",
                adminLoginError: "",

                userRegistrationStatus: "",
                userRegistrationError: "",
                userLoginStatus: "pending",
                userLoginError: ""
            }
        },
        [userLogin.fulfilled]: (state, action) => {
            return {
                ...state,
               

                adminRegistrationStatus: "",
                adminRegistrationError: "",
                adminLoginStatus: "",
                adminLoginError: "",

                userRegistrationStatus: "",
                userRegistrationError: "",
                userLoginStatus: "success",
                userLoginError: ""
            }
        },
        [userLogin.rejected]: (state, action) => {
            return {
                ...state,
               

                adminRegistrationStatus: "",
                adminRegistrationError: "",
                adminLoginStatus: "",
                adminLoginError: "",

                userRegistrationStatus: "",
                userRegistrationError: "",
                userLoginStatus: "rejected",
                userLoginError: action.payload
            }
        }
    }
})

export const { menuButtonClick, userButtonClick, nightModeButtonClick, logOut } = taskSlice.actions;
export default taskSlice.reducer