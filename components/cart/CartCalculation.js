import React,{useContext} from 'react'
import {Link} from 'react-router-dom'

import {ShopContext} from '../../context/Context.js'

const CartCalculation = () => {

	const {subtotal,total,tax,clearAllCart} = useContext(ShopContext)

	return (
		<div className='container-fluid'>
		<div className='row'>
			<div className='col-4 ml-auto font-italic'>
				<div className='m-2 mb-3 center'>
					<button className='btn btn-outline-danger text-capitalize' onClick={clearAllCart}>Clear all cart</button>
				</div>
				<div className='calculation'>
					<span className='font-weight-bold'>SubTotal:</span>
					<span className="ml-2 text-success font-weight-bold">{subtotal}</span>
				</div>
				<div className='calculation'>
					<span className='font-weight-bold'>Tax:</span>
					<span className="ml-2 text-success font-weight-bold">{tax}</span>
				</div>
				<div className='calculation'>
					<span className='font-weight-bold'>Total:</span>
					<span className="ml-2 text-success font-weight-bold">{total}</span>
				</div>
				<div className='m-2'>
					<Link to='/condition'><button className='btn btn-lg bg-primary text-capitalize text-white font-weight-bold'>Purchase</button></Link>
				</div>
			</div>
		</div>
		</div>
	)
}

export default CartCalculation