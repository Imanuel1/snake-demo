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
        <header className="App-header" style={{width: "100%", height: "calc(100% - 25px)", paddingBottom: "25px"}}>
          <h1>
            {isStartGame === undefined
              ? "התחל לשחק במשחק סנייק"
              : `צברת ${currentPoints} נקודות, נסה לשחק שוב!`}
          </h1>
          <span>{`שיא נקודות - ${record}`}</span>
          <button style={{ marginTop: "auto", borderRadius: "1rem", padding: "0 15px"}}
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
