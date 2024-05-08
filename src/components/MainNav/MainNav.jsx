import "./MainNav.css";

function MainNav() {
  const clickMe = () => {
    console.log("clicked");
  };

  return (
    <nav className="MainNav">
      <p className="nav-logo">DCB</p>
      <a className="primary-button" href="#CreateNewUser" onClick={clickMe}>
        Create New User
      </a>
    </nav>
  );
}

export default MainNav;
