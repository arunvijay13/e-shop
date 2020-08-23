import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Popper from "./node_modules/popper.js"
import $ from "./node_modules/jquery"

import Navbar from './components/dropdown/Navbar.js'
import Cart from './components/cart/Cart.js'
import ProductList from './components/product/ProductList.js'
import Condition from './components/account/Condition.js'
import DetailProduct from './components/product/DetailProduct.js'
import Login from './components/account/Login.js'
import Account from './components/account/Account.js' 
import Purchase from './components/purchase/Purchase.js'

const App = () => {
	return <React.Fragment>
				<Router>
					<Navbar />
					<Switch>
					<Route path="/" exact component={ProductList} />
					<Route path="/cart" component={Cart} />
					<Route path="/condition" component={Condition}/>
					<Route path="/detailproduct" component={DetailProduct} />
					<Route path="/account" component={Account} />
					<Route path="/login" component={Login}/>
					<Route path="/purchase" component={Purchase} />
					</Switch>
				</Router>
			</React.Fragment>
}

export default App