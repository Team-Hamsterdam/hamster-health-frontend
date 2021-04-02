import "./App.css";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar1 from "./components/Navbar1";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar1 />
            <Route exact path="/" component={Landing} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
        </Router>
    );
}

export default App;
