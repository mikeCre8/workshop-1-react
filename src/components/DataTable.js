import { React,useState } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import ShowStudentDetails from './ShowStudentDetails';

const DataTable = () => {
    
    const [studentList, setStudentList] = useState([
        {id: 1, firstName: 'John', lastName: 'Smith', age: 30, birthdate: '1993-01-01', country: 'Sweden', city: 'Stockholm'},
        {id: 2, firstName: 'Mary', lastName: 'Poppins', age: 40, birthdate: '1983-01-01', country: 'Sweden', city: 'Stockholm'}
    ])
    
    const [showDetails, setShowDetails] = useState({status: false, id: 0});

    return(
        <div className='container'>
            <h1 className='tShadow'>Student List</h1>
            <table className='table table-dark table-striped table-hover myShadow'>
                <TableHeader />
                <TableRow studentList={studentList} details={{showDetails, setShowDetails}} />
            </table><br/>
            {showDetails.status && 
            <ShowStudentDetails details={{showDetails, setShowDetails}} studentData={studentList} />
            }
        </div>
    )
}
export default DataTable;