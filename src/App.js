import StatusCount from "./components/StatusCount";
import ActionsCount from "./components/ActionsCount";
import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0)

  const handleCount = (n) => {
    setCount(count + n)
  }
  return (
    <div className="App">
      <div className="container">
          <StatusCount count={count}/>
          <ActionsCount handleCount={handleCount}/>
      </div>
    </div>
  );
}

export default App;
