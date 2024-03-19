import './App.css'
import {legacy_createStore} from "redux"

let SET_THEME="SET_THEME"

function reducer(state="light_mode",{type,patload}){
      switch (type) {
        default:
          return state
      }
}
let store=legacy_createStore(reducer);
function App() {
  let state=store;
  console.log(store.getState());
  function changeTheme(theme) {
    store.dispatch({ type: SET_THEME, payload: theme });
  }
  
  return (
    <>
     <h1>Redux</h1>
     <div>
  <pre className="sidebar left-sidebar" id="userSidebar">
    {JSON.stringify(store.getState())}
  </pre>
  <div className="main-content">
    <div className="theme-switcher">
      <button
        id="lightModeBtn"
        onClick={() => {
          changeTheme("light-mode");
        }}
      >
        Light Mode
      </button>
      <button
        id="darkModeBtn"
        onClick={() => {
          changeTheme("dark-mode");
        }}
      >
        Dark Mode
      </button>
    </div>
  </div>
</div>
    </>
  )
}

export default App
