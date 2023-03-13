import User from './component/usersign/sign';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Sign from './component/Signin/Sign';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import Home from './component/Home/Home';
import Main from './component/Home/Main';
// import sign from './component/usersign/sign';
import Report from './component/Report/Report';
function App() {
  return (
    <>
      <Router>


        <div>
          <Switch>
            <Route exact path="/">
              <User />
            </Route>
            <Route exact path="/Report">
              <Report />
            </Route>
            <Route exact path="/home">
              <Main />
            </Route>
            <Route exact path="/sign">
              <User />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
