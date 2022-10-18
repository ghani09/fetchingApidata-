import React,  {useState} from "react";
import { useSelector , useDispatch} from "react-redux"
import { adddata } from "../redux/actions";
import { connect } from "react-redux";

const Input = () =>{
   /*taking  state from redux store*/
    const user = useSelector((state) =>state.deta.user)


    const [inputdata , setInputData]  = useState(user)

    
            /*const [userData,setUserData]=useState(...user)*/
    

        const handleEvent =(e) =>{
            let fieldName = e.target.getAttribute("name");
            let fieldValue = e.target.value

            const  newInputData ={...inputdata }
                    newInputData[ fieldName] = fieldValue
                 setInputData(newInputData);
                
        } 

         const submitData = (event)=>{
            event.preventDefaultValue()
         let importData= {...userData, userData:submitNewData.message}

              setUserData(importData)
                 setInputData({inputdata:""})
               

         }



return (



    <div className="form_section">
        <form>
        <input type="number" placeholder="enter Id " name="id"    onChange={handleEvent}   required/>
            <input type="text" placeholder="enter name" name="fname"   onChange={handleEvent}  required/>
            <input type="text" placeholder="enter usernname" name="uname"  onChange={handleEvent}  required/>
            <input type="email" placeholder="enter mail" name="email"    onChange={handleEvent} required/>
            <input type="text" placeholder="enter address" name="address"   onChange={handleEvent}  required/>
            <button onClick={submitData}>Add</button>
        </form>
    </div>
)

}
export default connect (null,null)(Input);