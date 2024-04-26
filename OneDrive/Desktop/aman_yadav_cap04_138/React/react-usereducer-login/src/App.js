import { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};


//should have the cases "email", "password", and "reset", along with the default case.
//The default case within reducer function should throw an error with message "invalid action type"
const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return {
        ...state,
        email:action.payload
      }
    case "password":
      return {
        ...state,
        password:action.payload
      }
    case "reset":
      return initialState
    default:
      throw new Error('invalid action type')
  }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState({});
  const [state,dispatch]=useReducer(reducer,initialState);
  function handleSubmit(e){
   e.preventDefault()
  
  }
  function handleChange(e){
    let {name,value}=e.target;
    dispatch({type:name,payload:value})
  }
 
  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form className="form-wrapper" data-testid="form-wrapper" onSubmit={handleSubmit}>
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input type="email" data-testid="user-email" name="email" value={state.email} onChange={handleChange}/>
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input type="password" data-testid="user-password" name="password" value={state.password} onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={()=>dispatch({type:'reset'})}>Reset</button>
      </form>
      
      {/* If there is data in the submittedData variable after submitting the form, show the below div by updating it else show the No details found div. */}
      {
          state.email || state.password ?(<div>
            <div data-testid="submitted-data-email">
              User Email: {state.email}
            </div>
            <div data-testid="submitted-data-password">
              User Password: {state.password}
            </div>
          </div>
          ):(<div data-testid="no-details-container">No details found</div>
          )
        }
      {/* Assume below div as No details found div for better understanding */}
     
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
