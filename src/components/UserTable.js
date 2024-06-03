import { useState } from "react"

const UserTable = ({userList}) => {
    
  return (
    <div className="container shadow-lg mt-3 rounded-2 p-3">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Gender</th>

          </tr>
        </thead>
        
        <tbody>
            { userList.map((user, index)=>{
                return (
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.gender==="m"?"Male":"Female"}</td>
                  </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}
export default UserTable