

import axios from "axios"

export const ADMIN_LOGIN_FAILURE = "ADMIN_LOGIN_FAILURE"
export const ADMIN_LOGIN_SUCCESS = "ADMIN_LOGIN_SUCCESS"
export const ADMIN_LOGIN_REQUEST = "ADMIN_LOGIN_REQUEST"


export const loginFailure = payload=>({
  type: ADMIN_LOGIN_FAILURE,
  payload:payload
})
export const loginSuccess = (payload,callback)=>({
  type: ADMIN_LOGIN_SUCCESS,
  payload:payload,
})
export const loginRequest = payload=>({
  type: ADMIN_LOGIN_REQUEST,
  payload:payload
})
// export const signupFailure = payload=>({
//   type: ADMIN_SIGNUP_FAILURE,
//   payload:payload
// })
// export const signupSuccess = (payload,callback)=>({
//   type: ADMIN_SIGNUP_SUCCESS,
//   payload:payload,
// })
// export const signupRequest = (payload,callback)=>({
//   type: ADMIN_SIGNUP_REQUEST,
//   payload:payload,
// })

export const validAdminLogin = (payload)=>dispatch=>{
  dispatch(loginRequest())
return axios.get("https://api.github.com/search/users?q=data&&page=2")
.then(data=>dispatch(loginSuccess(data)))
.catch(error=>dispatch(loginFailure(error)))
}


// export const validAdminSignup = (payload)=>dispatch=>{
// dispatch(signupRequest())
// return axios.post("http://localhost:8080/auth/register",{
//   ...payload
// })
// .then(data=>dispatch(signupSuccess(data)))
// .catch(error=>dispatch(signupFailure(error)))

// }