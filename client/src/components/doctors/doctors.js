import { useState, useEffect} from 'react';
import axios from 'axios';
import DoctorForm from './DoctorForm';
import AllDoctor from './AllDoctor';



const Doctors = () => {
  const [doctors, setDoctors] = useState([])


useEffect( () => {
  axios.get('/api/doctors')
  .then(res => { setDoctors(res.data)}) 
  .catch( err => console.log(err))
}, [])


const AddDoctor = (ldoctor) => {
 
  axios.post('/api/doctors', { doctor })
.then ( res => {
  setDoctors([...doctors, res.data])
})
.catch( err => console.log(err))
}

const updateDoctor = (id, doctor) => {
axios.put(`/api/doctors/${id}`, {doctor})
.then( res => {
  let newUpdatedDoctors = doctors.mao( l => {
    if (l.id === id) {
      return res.data
    }
    return l
  })
  setDoctors(newUpdatedDoctors)
})
.catch(err => console.log(err))
}
const deleteDoctor = (id) => {
  axios.delete(`/api/doctors/${id}`)
  .then( res => {
    setDoctors( doctors.filter( l => l.id !==id ))
    alert(res.data.message)
  })
  .catch( err => console.log(err))
}

return (
<>
<DoctorForm addDoctor={addDoctor} />
<AllDoctor
doctors={doctors}
updateDoctor={updateDoctor}
deleteDoctor={deleteDoctor}
/>

</>
)
}