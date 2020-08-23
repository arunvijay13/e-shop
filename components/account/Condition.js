import React from 'react'
import {Link} from 'react-router-dom'

const Condition = () => {
	return (
		<div>
			<h3 className='text-center my-4'>Welcome to E-shop</h3>
			<div className='text-center'>
				<Link to='/account'><button className='btn btn-primary m-2'>create Account</button></Link>
				<span className='text-capitalize lead'>New user?</span>
			</div>
			<div className='text-center'>
				<span className='lead'>Already have an account ?</span>
				<Link to='/login'><button className='btn btn-primary m-2'>Login</button></Link>
			</div>
		</div>
	)
}

export default Condition
