import { useState } from "react"

const UserForm = ({addUser}) => {
   const [user, setUser] = useState({})
   const handleChange = (e)=>{
    const{name ,value} = e.target
    setUser({...user, [name]:value})
   }
  const handleOnSubmit = (e)=>{
    e.preventDefault();
    addUser(user)
  }
  return (
    <div className="w-50 m-auto p-5 shadow-lg mt-5 rounded-3 mb-5">
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row g-2">
          <div className="col-md-3">
            <select
              id="inputState"
              className="form-select"
              name="gender"
              required
              onChange={handleChange}
            >
              <option>Gender</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="User name"
              aria-label="User name"
              required
              onChange={handleChange}
            />
          </div>
          <button className="col-md-3 btn btn-primary d-grid">Add User</button>
        </div>
      </form>
    </div>
  )
}
export default UserForm