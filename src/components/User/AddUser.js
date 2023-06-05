import React , {useState , useRef} from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

import classes from './AddUser.module.css'

const AddUser = (props) => {
  const userName = useRef()
  const userAge = useRef()

  // const [addUser , setAddUser] = useState('')
  // const [addAge , setAddAge] = useState('')
  const [error , setError] = useState()
  const newUserHandler = (e) =>{
    e.preventDefault()
    const enterName = userName.current.value
    const enterAge = userAge.current.value
    if ( enterName.trim().length === 0 || enterAge.trim().length === 0 ) {
      setError({
        title: 'Invalid input',
        msg: 'Please enter a valid name and age'
      })
      return 
    }
    if (userAge < 1) {
      setError({
        title: 'Invalid ade',
        msg: 'Please enter a valid age (> 0)'
      })
      return
    }
    props.onAddUser(enterName , enterAge)

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
          <input id='name' type="text" ref={userName}/>
          <label htmlFor="age">User Age (Year)</label>
          <input id='age' type="text" ref={userAge}/>
          <Button type='submit'>New User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
