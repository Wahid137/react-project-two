import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={`${styles.navigation} container`}>
        <div className="logo">
          <img
            src="../../../public/assets/logo.png"
            alt="do some coding logo"
          />
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
