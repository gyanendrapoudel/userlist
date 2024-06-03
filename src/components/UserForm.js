const UserForm = () => {
   
  return (
    <div className="w-50 m-auto p-5 shadow-lg mt-5 rounded-3 mb-5">
      <form action="" >
        <div className="row g-2">
          <div className="col-md-3">
            <select id="inputState" className="form-select" name="gender" required>
              <option >Gender</option>
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
         
            />
          </div>
          <button className="col-md-3 btn btn-primary d-grid">Add User</button>
        </div>
      </form>
    </div>
  )
}
export default UserForm