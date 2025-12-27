import { useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import { MainScreen } from "./components/MainScreen";
import "./App.css";

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return isUnlocked ? (
    <MainScreen onLogout={() => setIsUnlocked(false)} />
  ) : (
    <LoginScreen onUnlock={() => setIsUnlocked(true)} />
  );
}

export default App;
