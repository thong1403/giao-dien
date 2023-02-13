import logo from "./css/Frame 162691.png"
import "./css/Buttum.css"

function Buttum() {
  return <>
    <div className="container buttum-title-content ">
        <div className="row">
            <div className="col-6 buttum-content">
                <img src={logo} alt="" className="logo-buttom"/>
                <p>Lalasia is digital agency that help you make better <br /> experience iaculis cras in.</p>
            </div>
            <div className="col-2">
                <h4>Produce</h4>
                <p>New Arrivals</p>
                <p>Home Decor</p>
                <p>Kitchen Set</p>
                <p>Best Selling</p>
            </div>
            <div className="col-2">
                <h4>Services</h4>
                <p>Catalog</p>
                <p>Blog</p>
                <p>FaQ</p>
                <p>Pricing</p>

            </div>
            <div className="col-2">
                <h4>Follow Us</h4>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
        </div>
    </div>
  </>;
}

export default Buttum;
