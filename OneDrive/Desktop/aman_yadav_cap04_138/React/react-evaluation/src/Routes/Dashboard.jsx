import { useContext } from "react";
import { valContectProvide } from "../Context/AuthContext";
function Dashboard() {
  let {isAuth,token}=useContext(valContectProvide)
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:{token}
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
      </div>
      <div data-testid="pagination-container"></div>
    </div>
  );
}

export default Dashboard;
