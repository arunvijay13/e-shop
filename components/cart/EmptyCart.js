import React from 'react'
import {Link} from 'react-router-dom'

const EmptyCart = () => {
	return (
		<div className='text-center my-5'>
			<h3 className='text-danger'>Add Items to the cart</h3>
			<Link to='/'><button className='btn bg-danger text-white'>Back to Shop</button></Link>
		</div>
	)
}

export default EmptyCart