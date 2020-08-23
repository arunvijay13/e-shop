import React,{useContext} from 'react'
import {ShopContext} from '../../context/Context.js'

import EmptyCart from '../cart/EmptyCart.js'
import CartList from './CartList.js'
import CartName from './CartName.js'
import CartCalculation from './CartCalculation.js'

const Cart = () => {
	
	const {cartitem} = useContext(ShopContext)

	return (
		
			!cartitem.length ? <EmptyCart /> : 
			(	<React.Fragment>
				<CartName />
				<CartList cartitem={cartitem} />
				<CartCalculation />
				</React.Fragment>
			)
	)
}

export default Cart