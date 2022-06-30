import { useState, useEffect } from 'react';

const UserForm = ({ addUser, id, name, updateUser, setEdit}) => {
const [user, setUser] = useState({ title: '', desc: '', })

const handleSubmit = (e) => {
e.preventDefault() // stop from reloading and losing data and stop putting the input into url
if (id) {
  updateUser(id, user)

  setEdit(false)
} else {

addUser(user)
}
setUser({name: ''})
}


  return (

  <>
  <h1>{id ? "Edit" : "Create" } User </h1>
  <form onSubmit={handleSubmit}>
    <labe>Name:</labe>
<input
//need these 3 things
name='title' //what is input for
value={user.title} //where we are ftoring it
onChange={ (e) => setUser({...user, title: e.target.value})} //how we are storing it
// e is event of typing in the input
required //make sure something to submit
placeholder='name' // text within the input box
/>
<textarea
name='desc'
value={list.desc}
onChange={ (e) => setUser({...user, desc: e.target.value})}
></textarea>
<button type='submit'>{id? "Update" : "Submit" }</button>
  </form>
  </>
)

}

export default UserForm;
