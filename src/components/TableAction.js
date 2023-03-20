import { click } from "@testing-library/user-event/dist/click";
import React from "react";

const TableAction = ({details}) => {

const {passDetails,student} = details;

const click = (key) => {
    
    console.log(key);
    passDetails.setShowDetails({...passDetails.showDetails, status: !passDetails.showDetails.status, id: key});
        
    }

    return(
    <button type='button' className='btn btn-info myGlow' key={student.id} onClick={() => click(student.id)} > Details </button>
    ) 

}

export default TableAction;