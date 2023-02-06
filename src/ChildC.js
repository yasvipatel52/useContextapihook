


import { useContext } from "react";
import { data,data1 } from "./App";



// function ChildC(){
//     return(
//         <data.Consumer>{
//           (name)=>{
//             return(
//                 <data1.Consumer>{
//                     (gender)=>{
//                         return (
//                             <h1>My name is {name} and my gender is {gender}</h1>
//                         )
//                     }
                    
                    
//                 }

//                 </data1.Consumer>
//             )
//           }

//         }
//         </data.Consumer>
//     )
// }

function ChildC(){
    const name=useContext(data);
    const gender=useContext(data1);
    return(
        <h1>My name is {name} and my gender is {gender}</h1>
    )
}


export default ChildC;