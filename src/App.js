import RootRouter from "./routers/rootRouter";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <RootRouter />
      </Router>
    </div>
  );
}

export default App;
