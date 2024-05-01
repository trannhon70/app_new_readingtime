import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Animated } from "./components/Animated";
import FreeTrial from "./pages/FreeTrial/FreeTrial";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { SocketContext, socketInstance } from "./socketIO/socket.context";
import Welcome from "./pages/Welcome/Welcome";
import Profile from "./pages/Profile/Profile";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <>
      <SocketContext.Provider value={socketInstance}>
        <BrowserRouter>
          <Animated>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/register-free-trial">
                <FreeTrial />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/home">
                <Layout>
                  <Welcome />
                </Layout>
              </Route>
              <Route exact path="/profile">
              <Layout>
                  <Profile />
                </Layout>
              </Route>
            </Switch>
          </Animated>
        </BrowserRouter>
      </SocketContext.Provider>
    </>
  );
}

export default App;
