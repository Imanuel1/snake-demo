import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SnakeGame from "./components/SnakeGame";

function App() {
  const [isStartGame, setIsStartGame] = useState(undefined);
  const [record, setRecord] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);

  const handleOnfailed = (points) => {
    setIsStartGame(false);
    setCurrentPoints(points);
    setRecord(prev => points > prev ? points : prev)
  }

  return (
    <div className="App">
      {isStartGame ? (
        <SnakeGame handleOnfailed={handleOnfailed}/>
      ) : (
        <header className="App-header">
          <h1>
            {isStartGame === undefined
              ? "התחל לשחק במשחק סנייק"
              : `צברת ${currentPoints} נקודות, נסה לשחק שוב!`}
          </h1>
          <span>{`שיא נקודות - ${record}`}</span>
          <button style={{ marginTop: "auto", marginBottom: "25px" }}
            onClick={() => setIsStartGame(true)}
          >
            <h3>{"התחל לשחק"}</h3>
          </button>
        </header>
      )}
    </div>
  );
}

export default App;
