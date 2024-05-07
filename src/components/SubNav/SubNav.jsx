import "./SubNav.css";

function SubNav() {
  const clickMe = () => {
    console.log("clicked");
  };

  return (
    <div className="SubNav">
      <nav>
        <nav-link className="item" to="/">
          UserList
        </nav-link>
        <nav-link className="item" to="deposit">
          Deposit
        </nav-link>
        <nav-link className="item" to="/">
          SendMoney
        </nav-link>
        <nav-link className="item" to="/">
          Withdraw
        </nav-link>
        <nav-link className="item" to="/">
          BudgetApp
        </nav-link>
        <nav-link className="item" to="/">
          GetBalance
        </nav-link>
      </nav>
    </div>
  );
}

export default SubNav;
