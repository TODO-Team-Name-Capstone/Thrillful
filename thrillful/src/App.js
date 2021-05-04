import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections.js'
import Contact from './pages/Contact.js'
import Products from './pages/Products.js'
import Product from './pages/Product.js'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import NavMenu from './components/NavMenu'
import Footer from './components/Footer'
import Banner from './components/Banner'
import AdminBanner from './pages/AdminBanner.js'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Banner />
        <Switch>
          <Route path="/contact/" component={Contact}>
            <Contact />
          </Route>
          <Route path="/Login/" component={Login}>
            <Login />
          </Route>
          <Route path="/Register/" component={Register}>
            <Register />
          </Route>
          <Route path="/adminbanner">         
            <AdminBanner/>
            </Route>
          <Route path="/Products/">
            <Products />
          </Route>
          <Route path="/Product/:handle">
            <Product />
            </Route>
            <Route path="/Collections/">
              <Collections />
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
