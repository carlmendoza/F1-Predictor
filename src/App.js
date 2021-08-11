// import 'bulma/css/bulma.min.css';
import './App.scss';

import Header from './components/Header'
import Banner from './components/Banner.js'
import Body from './components/Body.js'
import Sample from './components/Sample.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
