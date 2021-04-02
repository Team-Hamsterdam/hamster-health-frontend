import "./App.css";
import Landing from "./Landing";
import Navbar1 from "./components/Navbar1";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar1 />
            <Route exact path="/" component={Landing} />
        </Router>
    );
}

export default App;
