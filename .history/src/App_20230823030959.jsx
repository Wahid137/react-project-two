import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
      <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
    </>
  );
}

export default App;
