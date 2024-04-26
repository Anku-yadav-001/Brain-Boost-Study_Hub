import { useReducer, useState } from "react";
import "./App.css";
import {UserRow} from "./Component/UserRow"

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the action types as "name", "gender", "role", "maritalStatus"(for updating "name", "gender", "role", "maritalStatus" ) and "reset" along with the default cases
// the reset action type should show reset the state to initial state
// the default case should throw an Error with message `invalid action type`.
const reducer = (state, action) => {
     switch (action.type)
     {
      case "name":
        return {
          ...state,
          name:action.payload
        }
      case "gender":
        return {
          ...state,
          gender:action.payload
        }
      case "role":
        return {
          ...state,
          role:action.payload
        }
      case "maritalStatus":
        return {
          ...state,
          maritalStatus:action.payload
        }
      case "reset":
        return initialState
      default:
        throw new Error('invalid action type')
     }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
   let [state,dispatch]=useReducer(reducer,initialState);
  //store the data in the below variable on clicking the submit button, to render, the data in the UI.
  // const [submittedData, setSubmittedData] = useState([]);
  let {name,gender,role,maritalStatus}=state
  let submittedData=state
  function handleInputChange(type,value){
    dispatch({type,payload:value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(state.name);
  }
  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text" placeholder="Name" value={name} onChange={(e)=>handleInputChange("name",e.target.value)}/>
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender" data-testid="gender-select" value={gender} onChange={(e)=>handleInputChange("gender",e.target.value)}>    
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer Not to Say">Prefer Not to Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role" data-testid="role-select" value={role} onChange={(e)=>handleInputChange("role",e.target.value)}>
                <option value="FrontEnd Developer">FrontEnd Developer</option>
                <option value="BackEnd Developer">BackEnd Developer</option>
                <option value="FullStack Developer">FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"} checked={maritalStatus} onChange={(e)=>handleInputChange("maritalStatus",e.target.checked)}/>
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
        
        {submittedData.length > 0 ? (
        <table data-testid="user-container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Marital Status</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((userData, index) => (
              <UserRow
                key={index}
                name={userData.name}
                gender={userData.gender}
                role={userData.role}
                maritalStatus={userData.maritalStatus}
                id={index}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <h2 data-testid="no-user-container">No users found</h2>
      )}
      
        {/* add table or h2 tag as per the problem statement */}
      </div>
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export {reducer, initialState}
