import './App.css';
import Home from "./pages/Home"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume from "./pages/Resume"


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume.html" component={Resume} />
      </div>
    </Router>
  );
}

export default App;
