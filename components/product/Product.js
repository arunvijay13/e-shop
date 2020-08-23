import React,{useContext} from 'react'
import {Link} from 'react-router-dom'

import {ShopContext} from '../../context/Context.js'

const Product = ({title,price,image,id,cart}) => {

	const {displayProduct,cartProduct} = useContext(ShopContext)

	return (
		<div className='carditem col-sm-4 col-lg-4 my-2'> 
			<div className='card' >
				<div className='card-text' ><button className='price btn bg-secondary'>Rs-{price}</button></div>
				<div className='card-body mx-auto'>
					<Link to='/detailproduct'><img onClick={() => displayProduct(id)} className='image card-img-top' src={image} alt='images'/></Link>
				</div>
				<div>{ cart ? <button className='incart btn bg-info'>In cart</button> :  
						<button  className='addtocart btn bg-info' onClick={()=>cartProduct(id)}>Add To Cart</button>
						}</div>
				<div className='cardtitle card-footer'>
					{title}
				</div>
			</div>
		</div>
	)
}

export default Product