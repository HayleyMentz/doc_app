import Appointment from './Appointment';

const AppointmentList = ({ appointments, updateAppointment, deleteAppointment }) => (
  <>
    <h1>All Appointments</h1>
    {
      appointments.map( n => 
        <Appointment
          key={n.id}
          {...n}
          updateAppointment={updateAppointment}
          deleteAppointment={deleteAppointment}
        />
      )
    }
  </>
)
export default AppointmentList;