import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Create from "./Create";

function App() {
  return (
   <Router>
    <div className="content">
       <NavBar></NavBar>
      <h1>App Component</h1>
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/create">
          <Create />
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
