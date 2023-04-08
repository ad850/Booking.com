import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h3>Booking.com</h3>
      </div>
      <div className="button-container">
        <div className="btn circle">
          <img
            src="https://t-cf.bstatic.com/design-assets/assets/v3.68.0/images-flags/In@3x.png"
            alt="google.com"
          />
        </div>
        <button className="btn">List your Property</button>
        <button className="btn">Register</button>
        <button className="btn">Sign In</button>
      </div>
    </div>
  );
};
export default Navbar;
