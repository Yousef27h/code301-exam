import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Favorite from './components/FavoritePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/favorite">
          <Favorite/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
