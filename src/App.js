import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

const  App=()=> {
  return (
   <div className='container'>
    <h4 className='pt-4 text-center'>User List</h4>
    <hr />
    <UserForm/>
    <UserTable/>
   </div>
  );
}

export default App;
