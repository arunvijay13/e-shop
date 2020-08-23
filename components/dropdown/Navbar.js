import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import {FaHome,FaUser,FaShoppingCart,FaBell} from 'react-icons/fa'

import {ShopContext} from '../../context/Context.js'

const Navbar = () => {

	const {subtotalChange,cartitem} = useContext(ShopContext)

	const notify = () => alert("we will notify you")

	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
				<Link to='/'><p className="navbar-brand font-italic">E-shop</p></Link>

				<div className='navicon d-flex mr-auto'>
					<div className='d-lg-none m-2' onClick={notify}>
						<span  className='text-white icon'><FaBell /></span>
					</div>
					<Link to='/cart' className='text-white icon' ><div className='d-lg-none m-2 ' >
						<span ><FaShoppingCart /></span>CART <span className='badge badge-light ml-1'>{cartitem.length}</span>
					</div></Link>
				</div>

				<button type="button" className="navbar-toggler" data-toggle="collapse" data-target=".collapse">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse mx-auto div">
					<ul className="navbar-nav ml-lg-auto ">
						<li className="nav-item active m-3">
							<Link to='/' className='text-white'><span className='mr-1'><FaHome /></span>Home</Link>
						</li>
						<li className="nav-item  m-3">
							<Link to='/condition' className='text-white'><span className='mr-1'><FaUser /></span>My Account</Link>
						</li>
						<li className="nav-item  m-3" onClick={subtotalChange}>
							<Link to='/cart' className='text-white'><span className='mr-1'><FaShoppingCart /></span>My Cart<span className='badge badge-light ml-1'>{cartitem.length}</span></Link>
						</li>
					</ul>
				</div>
			</nav>
		</React.Fragment>
	)
}

export default Navbar