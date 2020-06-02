

import {ADMIN_SIGNUP_FAILURE,ADMIN_SIGNUP_REQUEST,ADMIN_SIGNUP_SUCCESS,ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAILURE,}  from "./actions"

export const initState = {
  isLogin:false,
  loginData:[],
  isLoading:false,
}

export default (state=initState, {type,payload})=>{

  switch(type){
      case ADMIN_LOGIN_REQUEST:
        return{
          ...state,
        isLoading:true,
        isError:false,
        isLogin:false
      }
      case ADMIN_LOGIN_SUCCESS:
        return{
          ...state,
          isLoading:false,
          loginData:payload.data.items,
          isLogin:true

        }
        
      case ADMIN_LOGIN_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError: true,
          loginData:payload,
          isLogin:false
    }

    case ADMIN_SIGNUP_FAILURE:
      return{
        ...state,
        loginData:payload
  }


    case ADMIN_SIGNUP_SUCCESS:
      return{
        ...state,
        loginData:payload,
  }
    case ADMIN_SIGNUP_REQUEST:
      return{
        ...state,
        isLoading:true
  }

    default:
      return state
  }

}