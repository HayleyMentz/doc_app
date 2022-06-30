import Doctor from './Doctor';

const AllDoctor = ({ doctors, updateDoctor, deleteDoctor }) => (
  <>
  <h1>All Doctors</h1>
  {
    doctors.map( l =>
      <Doctor
      key={l.id}
      {...l} 
      updateDoctor={updateDoctor}
      deleteDoctor={deleteDoctor}
      />
      )
  }
  </>
)

export default AllDoctor;