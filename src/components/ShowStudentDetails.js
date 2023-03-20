import React from "react";

const ShowStudentDetails = ({studentData, details})=> {

    const {showDetails, setShowDetails} = details;

      
    return( 
        studentData.map(student => {
            return(        
        <>
        {student.id === showDetails.id && (
            <div key={student.id} className='container-fluid flex'>
                <div className='card bg-dark width30rem myShadow transparent'>
                    <div className='card-header card-title bg-info'>Student Information</div>
                    <div className='card-body text-white'>
                        
                            <div key={student.id}>
                            <h3>{student.city}, {student.country}</h3>
                            <p>Id: {student.id}</p>
                            <p>Name: {student.firstName} {student.lastName}</p>
                            <p>BirthDate: {student.birthdate}</p>
                            </div>
                            
                    </div>
                    <div className='card-footer'>
                        <button type='button' className='btn btn-outline-info myGlow' onClick={() => setShowDetails({...showDetails, status: false})}>Hide</button>
                    </div>
                </div>
            </div>)}
        </>
        )
        })
    ) 
        
       
}

export default ShowStudentDetails;