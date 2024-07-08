import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>Scora</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        
        
        
        <div className="user">
          <img
            src="./profile-svgrepo-com.svg"
            alt=""
          />
          <span>User</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
