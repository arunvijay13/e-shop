import React,{useContext} from 'react'
import {FaTrash} from 'react-icons/fa'

import {ShopContext} from '../../context/Context.js'

const CardDisplay = ({subtitle,price,count,total,id}) => {

	const {increment,decrement,remove} = useContext(ShopContext)

	return (
	<div className='row mx-auto m-1'>	
		<div className='col-sm-2 text-center'>
			<h3 className='text-center m-2 d-sm-none'>Products in cart</h3>
			<p className='font-weight-bold text-primary size'><span className='d-sm-none mx-2 text-dark'>Product</span>{subtitle}</p>
		</div>
		<div className='col-sm-2 text-center'>
			<p className='font-weight-bold text-primary size'><span className='d-sm-none mx-2 text-dark'>Price</span>{price}</p>
		</div>
		<div className='col-sm-2 text-center'>
			<div className='d-flex justify-content-center m-2'>
				<button className='btn btn-outline-dark mx-2' onClick={() => decrement(id)}> - </button>
				<div className='text-center font-weight-bold text-primary'> {count} </div>
				<button className='btn btn-outline-dark mx-2' onClick={() => increment(id)}> + </button>
			</div>
		</div>
		<div className='col-sm-2 text-center'>
			<p className='remove text-danger' onClick={() => remove(id)}><FaTrash /></p>
		</div>
		<div className='col-sm-2 text-center'>
			<p className='font-weight-bold text-primary size'><span className='d-sm-none mx-2 text-dark'>Total</span>{total}</p>
		</div>
	</div>
	)
}

export default CardDisplay