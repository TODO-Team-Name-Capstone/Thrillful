import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products.js'
import Product from './pages/Product.js'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import NavMenu from './components/NavMenu'
import Footer from './components/Footer'
import Banner from './components/Banner'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Banner />
        <Switch>
          <Route path="/Products/">
            <Products />
          </Route>
          <Route path="/Product/:handle">
            <Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
