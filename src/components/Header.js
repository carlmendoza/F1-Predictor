import logo from './logo.png'
function Header() {
  return (
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src={logo} width="50" height="50"/>
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="/">Home</a>
                <a class="navbar-item" href="/">Join a league</a>
            </div>
        </div>
      </nav>
  );
}

export default Header;