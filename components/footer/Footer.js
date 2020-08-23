import React from 'react'

const Footer = () => {
	return (
		<div className='container-fluid footer p-5 mt-5 fixed-bottom'>
			<div className='row'>
				<div className='col-6 col-lg-2'>
					<h5 className='head text-uppercase text-secondary'>About</h5>
					<ul className='list'>
						<li>Contact Us</li>
						<li>About Us</li>
						<li>Careers</li>
						<li>Flipkart Stories</li>
						<li>Press</li>
					</ul>
				</div>
				<div className='col-6 col-lg-2'>
					<h5 className='head text-uppercase text-secondary'>Help</h5>
					<ul className='list'>
						<li>Payments</li>
						<li>Shipping</li>
						<li>Cancellation & Returns</li>
						<li>FAQ</li>
						<li>Report Infringement</li>
					</ul>
				</div>
				<div className='col-6 col-lg-2'>
					<h5 className='head text-uppercase text-secondary'>policy</h5>
					<ul className='list'>
						<li>Return Policy</li>
						<li>Terms Of Use</li>
						<li>Security</li>
						<li>Privacy</li>
						<li>Sitemap</li>
						<li>EPR compliance</li>
					</ul>
				</div>
				<div className='col-6 col-lg-2'>
					<h5 className='head text-uppercase text-secondary'>social</h5>
					<ul className='list'>
						<li>Facebook</li>
						<li>Twitter</li>
						<li>Youtube</li>
					</ul>
				</div>
				<div className='col-6 col-lg-2'>
					<h5 className='head text-capitalize text-secondary'>mail us</h5>
					<div className='address'>E-shop Internet Private Limited,
						Green Park, Near Kalanivasal,karaikudi
						sivaganga District,
						Tamilnadu, India
					</div>					
				</div>
				<div className='col-6 col-lg-2'>
					<h5 className='head text-capitalize text-secondary'>office address</h5>
					<div className='address'>E-shop Internet Private Limited,
						Green Park, Clove embassy tech village,
						sivaganga District,
						Tamilnadu, India
					</div>					
				</div>
			</div>
		</div>
	)
}

export default Footer