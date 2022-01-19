import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.scss';

import Header from './components/Header'
import Banner from './components/Banner.js'
import Body from './components/Body.js'
import JoinLeague from 'components/JoinLeague';
import Sample from './components/Sample.js'
import ProtectedRoute from 'ProtectedRoute';
import Footer from './components/Footer.js'
import { useState } from 'react'

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <Router>
      <div>
        <Header/>
        <Banner/>
        <Switch>
          <Route path="/join-league" component={JoinLeague}/>
          <ProtectedRoute exact path="/" component={Body} isAuth={isAuth} setAuth={setAuth} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
