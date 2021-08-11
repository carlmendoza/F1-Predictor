import logo from './logo.png'
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
                <a className="navbar-item" href="/">Home</a>
                <a className="navbar-item" href="/">Join a league</a>
            </div>
        </div>
      </nav>
  );
}

export default Header;