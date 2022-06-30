import { useState, useEffect } from 'react';

const AppointmentForm = ({ addAppointment, id, subject, body, setEdit, updateAppointment }) => {
  const [appointment, setAppointment] = useState({ subject: '', body: '' })

  useEffect( () => {
    if (id) {
      setAppointment({ subject, body})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateAppointment(id, appointment)
      setEdit(false)
    } else {
      addAppointment(appointment)
    }
    setAppointment({ subject: '', body: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Appointment</label>
        <input
          name='subject'
          value={note.subject}
          onChange={(e) => setAppointment({ ...appointment, subject: e.target.value }) }
          required
        />
        <label>Body</label>
        <textarea
          name='body'
          value={appointment.body}
          onChange={(e) => setAppointment({ ...appointment, body: e.target.value }) }
          required
        >
        </textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default AppointmentForm;