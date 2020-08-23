import React from 'react'

import CartDisplay from './CardDisplay.js'

const CartList = ({cartitem}) => {
	return (
		<div className='container-fluid'>

		{cartitem.map(item => <CartDisplay 
			key={item.id} 
			subtitle={item.subtitle} 
			price={item.price} 
			count={item.count} 
			total={item.total}
			id={item.id}
		/>) }

		</div>
	)
}

export default CartList