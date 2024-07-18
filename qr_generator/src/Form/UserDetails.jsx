import { useState } from "react";



function UserDetails() {
    
    const [user, setUser] = useState({fname: "Ram", lname: "Kumar", age: 25})

    const changeName = (e) => {
       const newStateObject = {...user};
       newStateObject.name = e.target.value;
       setUser(newStateObject);
    }
    
    const changeage = (e) => {
       setUser((oldState) => {
              return {...oldState, age: e.target.value};
       })
    }
    
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }


  return (
    <>
        <form action="post">
        <h2>{user.fname} {user.lname}, {user.age}</h2>
            <input type="text" placeholder="Enter the first name" 
            value={user.fname}
            name="fname"
            onChange={changeHandler} />
            <input type="text" placeholder="Enter the last name" 
            name="lname"
            value={user.lname}
            onChange={changeHandler} />
            <input type="text" placeholder="Enter the age" 
            name="age"
            value={user.age}
            onChange={changeHandler} />
        </form>
    </>
  )
}
export default UserDetails;