import "./SubNav.css";

function SubNav() {
  const clickMe = () => {
    console.log("clicked");
  };

  return (
    <nav className="SubNav">
      <div class="nav-links">
        <a class="nav-link" href="#Deposit">Deposit</a>
        <a class="nav-link" href="#Withdraw">Withdraw</a>
        <a class="nav-link" href="#SendMoney">Send Money</a>
        <a class="nav-link" href="#GetBalance">Get Balance</a>
        <a class="nav-link" href="#UserList">User List</a>
        <a class="nav-link" href="#BudgetApp">Budget App</a>
      </div>
    </nav>
  );
}

export default SubNav;
