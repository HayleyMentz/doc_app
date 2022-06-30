import { useState } from 'react'
import DoctorForm from './DoctorForm';
import { Link } from 'react-router-dom';

 



const Doctor = ({ id, title, desc, created_at, updateDoctor, deleteDoctor }) => {
  
  const [editing, setEdit] = useState(false)

 
  return (
    <>
     
      {
        editing ?
        <>
          
          <DoctorForm 
            id={id} 
            title={title}
            desc={desc}
            updateDoctor={updateDoctor}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
         
          <div>
            <h3>Title: {title}</h3>
            <h3>Description: {desc}</h3>
            <h5>Created At: {created_at}</h5>
           
            <button onClick={() => setEdit(true)}>Edit</button>
            <button onClick={() => deleteList(id)}>Delete</button>
            <Link to={`/${id}/users`}>
              Users
            </Link>
            <hr />
          </div>
          <br />
        </>
      }
    </>
  )
}

export default Doctor;