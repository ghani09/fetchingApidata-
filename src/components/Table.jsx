import React, { useEffect  } from "react";
import { useSelector , useDispatch} from "react-redux"
import { connect } from "react-redux/es/exports";
import { fetchuser } from "../redux/actions";





const Table =(props) => {

    const user = useSelector((state) =>state.deta.user)
 
   
     let dispatch = useDispatch();

     useEffect(()=>{
        dispatch(fetchuser())

     },[])

    return(

        <div className="section">
        <table>
        <thead>
        <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>USERNAME</th>
        <th>EMAIL</th>
        <th>ADDRESS</th>
        </tr> 
        </thead>
        <tbody>
        
         {user.map((data)=> 
        
            <tr> 
           <td>{data.id}</td>
           <td>{data.name}</td>
           <td>{data.username}</td>
           <td>{data.email}</td>
           <td>{data.address.street}</td>
    
           </tr>
            )} 
        </tbody>
        </table>
        </div>
    )
}
 


export default  connect(null,null) (Table) ;