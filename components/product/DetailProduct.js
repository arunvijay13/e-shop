import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {ShopContext} from '../../context/Context.js'

const DetailProduct = () => {

	const {detailProduct,cartProduct} = useContext(ShopContext)
	
	return (
		<div className='container my-5 py-5'>
			<div className='row'>
				<div className='col'>
					<h3 className='text-center text-primary'>{detailProduct.title}</h3>
				</div>
			</div>
			<div className='row'>
				<div className='col-sm-6 my-auto mx-auto text-center'>
					<img className='pic' src={detailProduct.image} alt='product image' />
				</div>
				<div className='col-sm-6 my-5'>
					<div className='pricedetail text-success'>  
						<strong>Price: Rs<span>{detailProduct.price}</span></strong>
					</div>
					<div className='description my-3'>
						<h5 className='text-uppercase text-danger'><strong>Description</strong></h5>
						<p className='text-secondary lead para'>{detailProduct.description}</p>
					</div>
					<div>
						<button className='btn bg-primary font-weight-bold text-white mx-2' onClick={()=>cartProduct(detailProduct.id)}>{ detailProduct.cart ? 'InCart' : 'Add to cart' }</button>
						<Link to='/'><button className='btn bg-dark font-weight-bold text-white mx-2'>Back</button></Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DetailProduct