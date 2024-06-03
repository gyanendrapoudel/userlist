import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

const  App=()=> {
  const [userList, setUserList] = useState([])
  const addUser = (user)=>{
    console.log(user)
    setUserList([...userList, user])
    console.log(userList)
  }
  return (
   <div className='container'>
    <h4 className='pt-4 text-center'>User List</h4>
    <hr />
    <UserForm addUser={addUser}/>
    <UserTable/>
   </div>
  );
}

export default App;
