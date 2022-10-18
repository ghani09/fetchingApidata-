 import { ADD } from "../actions";

const initialState = {
 
    id:[],
    fname:[],
    uname:[],
    email:[],
    address:[],

}

const dataReducer = (state=initialState, action) =>{
   switch(action.type){
    case ADD :
        return {...state , state:action.data}
        default:
            return state;
   }

}


export default dataReducer;