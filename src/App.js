import "./App.css";

import { TLDR } from "./Pages/TLDR";

function App() {
  const tldrFlag = window.location.search;
  return (
    <div className="App-header">
      {tldrFlag ? <TLDR /> : <button> hello</button>}
    </div>
  );
}

export default App;
