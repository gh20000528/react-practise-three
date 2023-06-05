import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList'
import {useState} from 'react'
import './App.css';

function App() {
  const[user , setUser] = useState([])

  const addUserHandler = (uName , uAge) =>{
    setUser( (prevUser) => {
      return [...prevUser , {name: uName , age: uAge , id: Math.random().toString()}]
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList items={ user }></UserList>
    </div>
  );
}

export default App;
