import { useState, useEffect } from 'react';

const DoctorForm = ({ addDoctor, id, title, desc, updateDoctor, setEdit}) => {
const [doctor, setDoctor] = useState({ title: '', desc: '', })

const handleSubmit = (e) => {
e.preventDefault() 
if (id) {
  updateDoctor(id, doctor)

  setEdit(false)
} else {

add(doctor)
}
setDoctor({title: '', desc: '',})
}

 
  return (

  <>
  <h1>{id ? "Edit" : "Create" } Doctor </h1>
  <form onSubmit={handleSubmit}>
    <labe>Name:</labe>
<input

name='title' 
value={doctor.title} 
onChange={ (e) => setDoctor({...doctor, title: e.target.value})} //how we are storing it

required 
placeholder='title' 
/>
<textarea
name='desc'
value={list.desc}
onChange={ (e) => setDoctor({...doctor, desc: e.target.value})}
></textarea>
<button type='submit'>{id? "Update" : "Submit" }</button>
  </form>
  </>
)

}

export default DoctorForm;