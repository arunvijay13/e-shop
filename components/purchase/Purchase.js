import React,{useState,useContext} from 'react'
import Modal from 'react-modal'
import {ShopContext} from '../../context/Context.js'
import CreditCard from './CreditCard.js'
import {SyncLoader,MoonLoader} from 'react-spinners'
import {css} from '@emotion/core'
import {FaCheck} from 'react-icons/fa'
import {Link} from 'react-router-dom'

Modal.setAppElement('#app')
const Purchase = () => {
	const {user,total,clearAllCart} = useContext(ShopContext)
	const [isopen,setIsopen] = useState(false)
	const [loading,setLoading] = useState(true)
	
	const changeLoading = () => {
		setIsopen(prevstate => !prevstate)
		setTimeout(loader,5000)
	}

	const loader = () =>{ 
		setLoading(prevstate => !prevstate)
	}

	const loaderCss = css`
			margin:30px auto;
	`

	return (
		<div>
			<h3 className='text-center text-danger my-3'>Welcome {user}</h3>
			<div className='text-capitalize m-2 text-center text-success'><h4 className='font-italic mx-2'>your total : Rs {total} /-</h4></div>
			<p className='text-center text-capitalize m-3 lead'>fill the payment details</p>
			<CreditCard func={changeLoading}/>
			<div className='text-center mt-2 mb-4'>
				<button className='btn btn-danger text-uppercase lead btn-lg pay' onClick={changeLoading}>pay</button>
			</div>
			<Modal isOpen={isopen}>
				<div>
					{ loading ? <MoonLoader css={loaderCss} size={70}  loading /> :
						(
						<div className='mt-5'>
						<div className='text-center'>
							<h2 className='text-success lead font-italic display-4'>Your Payment is successfull 
							<span className='ml-2'><FaCheck /></span></h2>
						</div>
						<div className='text-center' onClick={clearAllCart}>
							<Link to='/'><button className='btn btn-warning'>Exit</button></Link>
						</div>
						</div>
						)
					}
				</div>
			</Modal>
		</div>
	)
}

export default Purchase