import { useState } from 'react';
import AppointmentForm from './AppointmentForm';

const Appointment = ({ id, subject, body, updateAppointment, deleteAppointment }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ?
        <>
          <AppointmentForm
            id={id}
            subject={subject}
            body={body}
            updateAppointment={updateAppointment}
            setEdit={setEdit}
          />
          <button
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
        </>
        :
        <>
          <h2>{subject}</h2>
          <p>{body}</p>
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button
            onClick={() => deleteAppointment(id)}
          >
            Delete
          </button>          
        </>
      }   
    </>
  )
}

export default Appointment;