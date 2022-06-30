import { useState } from 'react'
import UserForm from './UserForm';
import { Link } from 'react-router-dom';

 



const User = ({ id, name, desc, created_at, updateList, deleteList }) => {
  
  const [editing, setEdit] = useState(false)

 
  return (
    <>
     
      {
        editing ?
        <>
          
          <UserForm 
            id={id} 
            title={title}
            desc={desc}
            updateList={updateList}
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
            <Link to={`/${id}/todos`}>
              Todos
            </Link>
            <hr />
          </div>
          <br />
        </>
      }
    </>
  )
}

export default User;