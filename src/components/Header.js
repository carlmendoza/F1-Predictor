import logo from './logo.png'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

function Header() {
  return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src={logo} width="50" height="50"/>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/todo">Join a league</Link>
                </div>
            </div>
        </nav>
        // {/* <Route path="/todo">
        //   <div id="s-fullheight-100vh">STILL TO DO</div>
        // </Route> */}
  );
}

export default Header;