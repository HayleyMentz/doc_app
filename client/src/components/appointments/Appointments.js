import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';

const Appointments = () => {
  const [appointments, setAppointments] = useState([])

  
  const { userId } = useParams();
  
  useEffect( () => {
    axios.get(`/api/users/${userId}/appointments`)
      .then( res => setAppointments(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addAppointment = (appointment) => {
    axios.post(`/api/users/${userId}/appointments`, { appointment })
      .then( res => setAppointments([...appointments, res.data]) )
      .catch( err => console.log(err) )
  }
  
  const updateAppointment = (id, appointment) => {
    axios.put(`/api/users/${userId}/appointments/${id}`, { appointment })
      .then( res => {
        const newUpdateAppointments = appointments.map(n => {
          if (n.id === id) {
            return res.data
          }
          return n
        })
        setAppointments(newUpdateAppointments)
      })
      .catch( err => console.log(err) )
  }

  const deleteAppointment = (id) => {
    axios.delete(`/api/users/${userId}/appointments/${id}`)
      .then( res => setAppointments(appointments.filter( n => n.id !== id)))
      .catch( err => console.log(err) )
  }

  return (
    <>
      <AppointmentForm addAppointment={addAppointment}/>
      <AppointmentList
        appointments={appointments}
        updateAppointment={updateAppointment}
        deleteAppointment={deleteAppointment}
      />
    </>
  )
}

export default Appointments;