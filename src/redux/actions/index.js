import axios from "axios"


  export  const FETCH_REQUEST = "FETCH_REQUEST"
    export const FETCH_SUCCESS  = "FETCH_SUCCESS"
    export const FETCH_FAIL ="FETCH_FAIL"
    export const ADD = "ADD"
 
const fetchrequest =() =>{
   return{
    type: FETCH_REQUEST 
   }

}

const fetchsuccess =(user) => {
    return {
        type:  FETCH_SUCCESS,
        data:user
    }
}
const fetchfail = (error) =>{
    return{
        type: FETCH_FAIL,
        data:error
    }
}

export const  adddata = (message) => {

  return{
    type: ADD,
    data: message
  } 
}



 export const fetchuser =() => {
    return function(dispatch){
          dispatch(fetchrequest)
          axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res=> {
            let user = res.data
            dispatch(fetchsuccess(user))
          })
          .catch(error => {
            dispatch(fetchfail(error))
          })

    }
}