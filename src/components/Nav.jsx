import "./css/Nav.css";
import logo from "./css/Frame 162691.png"

function Nav() {
  return (
    <div className="container-tong">
      <div className="nav">
        <img src={logo} alt="" />
        <div >
          <span className="title">Product</span>
          <span className="title">Services</span>
          <span className="title">Article</span>
          <span className="title">About Us</span>
        </div>
        <div>
          <i class="fa-solid fa-basket-shopping"></i>
          <i class="fa-regular fa-user"></i>
        </div>
      </div>
    </div>
  );
}

export default Nav;
