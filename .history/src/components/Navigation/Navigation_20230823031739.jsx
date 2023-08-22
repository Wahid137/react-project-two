import "./Navigation.css";
const Navigation = () => {
  return (
    <div>
      <nav className="container navigation">
        <div className="logo">
          <img src="/images/logo.png" alt="do some coding logo" />
        </div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
