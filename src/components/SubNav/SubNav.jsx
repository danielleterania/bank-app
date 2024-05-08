import { NavLink, Outlet } from "react-router-dom";
import "./SubNav.css";

function SubNav() {
  const clickMe = () => {
    console.log("clicked");
  };

  return (
    <div className="SubNav">
      <nav class="nav-links">
        <NavLink className="nav-link" to="/">
          UserList
        </NavLink>
        <NavLink className="nav-link" to="deposit">
          Deposit
        </NavLink>
        <NavLink className="nav-link" to="send-money">
          SendMoney
        </NavLink>
        <NavLink className="nav-link" to="withdraw">
          Withdraw
        </NavLink>
        <NavLink className="nav-link" to="budget-app">
          BudgetApp
        </NavLink>
        <NavLink className="nav-link" to="get-balance">
          GetBalance
        </NavLink>
      </nav>

      <Outlet></Outlet>
    </div>
  );
}

export default SubNav;
