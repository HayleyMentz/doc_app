import { useState, useEffect} from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import AllUser from './AllUser';



const Users = () => {
  const [lusers, setUsers] = useState([])



useEffect( () => {
  axios.get('/api/users')
  .then(res => { setUsers(res.data)}) 
  .catch( err => console.log(err))
}, [])



const AddUser = (user) => {
  
  axios.post('/api/users', { user })
.then ( res => {
  setUsers([...users, res.data])
})
.catch( err => console.log(err))
}

const updateUser = (id, user ) => {
axios.put(`/api/users/${id}`, {list})
.then( res => {
  let newUpdatedUsers = users.mao( l => {
    if (l.id === id) {
      return res.data
    }
    return l
  })
  setUsers(newUpdatedUsers)
})
.catch(err => console.log(err))
}
const deleteUser = (id) => {
  axios.delete(`/api/users/${id}`)
  .then( res => {
    setUsers( users.filter( l => l.id !==id ))
    alert(res.data.message)
  })
  .catch( err => console.log(err))
}

return (
<>
<UserForm addUser={addUser} />
<AllUser
users={users}
updateUser={updateUser}
deleteUser={deleteUser}
/>

</>
)
}
export default Users;