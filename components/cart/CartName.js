import React from 'react'

const CartName = () => {
	return (
		<div className='cartname container-fluid'>
			<div className='row'>
				<div className='col-sm-2 text-center'>
					<h4 className='text-capitalize text-dark '>Title</h4>
				</div>
				<div className='col-sm-2 text-center'>
					<h4 className='text-capitalize text-dark'>Price</h4>
				</div>
				<div className='col-sm-2 text-center'>
					<h4 className='text-capitalize text-dark'>Quantity</h4>
				</div>
				<div className='col-sm-2 text-center'>
					<h4 className='text-capitalize text-dark'>Remove</h4>
				</div>
				<div className='col-sm-2 text-center'>
					<h4 className='text-capitalize text-dark'>Total</h4>
				</div>
			</div>
		</div>
	)
}

export default CartName