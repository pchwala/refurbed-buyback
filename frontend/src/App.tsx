import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(true);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  let text = "Klikaj se";

  return (
    <div>
      <Button onClick={handleButtonClick}>{text}</Button>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>testowy</Alert>}
    </div>
  );
}

export default App;
