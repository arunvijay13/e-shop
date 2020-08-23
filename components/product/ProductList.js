import React,{useContext,useEffect} from 'react'
import {ShopContext} from '../../context/Context.js';
import Product from './Product.js'
import Footer from '../footer/Footer.js'

const ProductList = () => {
	const {products,changeProduct} = useContext(ShopContext)

	return (
		<div className='container-fluid'>
			<div className="row mx-auto">			
			 {products.map(item => <Product key={item.id} 
			 	title={item.title} 
			 	price={item.price} 
			 	image={item.image} 
			 	id={item.id}
			 	cart={item.cart}
			 	/>)}
			</div>
			<Footer />
		</div>
	)
}

export default ProductList