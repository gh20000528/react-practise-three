import React , {useState} from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

import classes from './AddUser.module.css'

const AddUser = (props) => {
  const [addUser , setAddUser] = useState('')
  const [addAge , setAddAge] = useState('')
  const [error , setError] = useState()
  const newUserHandler = (e) =>{
    e.preventDefault()
    if ( addUser.trim().length === 0 || addAge.trim().length === 0 ) {
      setError({
        title: 'Invalid input',
        msg: 'Please enter a valid name and age'
      })
      return 
    }
    if (addAge < 1) {
      setError({
        title: 'Invalid ade',
        msg: 'Please enter a valid age (> 0)'
      })
      return
    }
    props.onAddUser(addUser , addAge)
    setAddUser('')
    setAddAge('')
  }
  const usernameChangHandler = (e) => {
    setAddUser(e.target.value)
  }
  const userageChangHandler = (e) => {
    setAddAge(e.target.value)
  }
  const closeErrorHandler = () =>{
    setError(null)
  }
  return (
    <div>
      {error && <ErrorModal onClose={closeErrorHandler} title={ error.title } message={ error.msg }></ErrorModal>}
      <Card className={classes.input}>  
        <form onSubmit={newUserHandler}>
          <label htmlFor="name">User Name</label>
          <input id='name' type="text" value={addUser} onChange={usernameChangHandler}/>
          <label htmlFor="age">User Age (Year)</label>
          <input id='age' type="text" value={addAge} onChange={userageChangHandler} />
          <Button type='submit'>New User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
