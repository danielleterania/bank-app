import "./MainNav.css";

function MainNav() {
  const clickMe = () => {
    console.log("clicked");
  };

  return (
    <nav className="MainNav">
      <p class="nav-logo">DCB</p>
      <a class="primary-button" href="#CreateNewUser" onClick={clickMe}>
        Create New User
      </a>
    </nav>
  );
}

export default MainNav;
