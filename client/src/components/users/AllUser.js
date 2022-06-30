import User from './User';

const AllUser = ({ users, updateUser, deleteUser }) => (
  <>
  <h1>All Users</h1>
  {
    users.map( l =>
      <User
      key={l.id}
      {...l}  
      updateUser={updateUser}
      deleteUser={deleteUser}
      />
      )
  }
  </>
)

export default AllUser;