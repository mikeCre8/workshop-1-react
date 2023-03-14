import React, { useState } from 'react';

const DataTable = () => {
    
    const [studentList, setStudentList] = useState([
        {id: 1, firstName: 'John', lastName: 'Smith', age: 30, birthdate: '1993-01-01', country: 'Sweden', city: 'Stockholm'},
        {id: 2, firstName: 'Mary', lastName: 'Poppins', age: 40, birthdate: '1983-01-01', country: 'Sweden', city: 'Stockholm'}
    ])



    return(
        <div className='container'>
            <h1>Student List</h1>
            <table className='table table-dark table-striped table-hover'>
                <TableHeader />
                <TableRow studentList={studentList} />
            </table>
        </div>
    )
}

const TableHeader = () => {

    return(
        <thead >
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

const TableAction = (props) => {
    
    return <button type='button' className='btn btn-primary'>Details</button>  

    // props.studentList.map(student => {

    //     return(
    //           <button type='button' className='btn btn-primary'>Details</button>  
    // )})
    
   
}

const TableRow = (props) => {

    return(

    props.studentList.map(student => {

        return(
            <tbody>
                <tr>
                    <td key={student.id}>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.age}</td>
                    <td><TableAction /></td>
                </tr>
            </tbody>
        )
    })
    )
}

export default DataTable;