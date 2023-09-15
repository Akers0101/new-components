import Login from "./components/Auth/Auth";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppRoutes from "./constant/AppRoutes";
function App() {
  return (
    <>
      <Router>
        <Route />
        <Route path={AppRoutes.path} component={LoadableComponent2} />
        {/* Other routes */}
      </Router>
    </>
  );
}

export default App;
