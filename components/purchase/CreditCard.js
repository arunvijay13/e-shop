import React,{useState} from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const CreditCard = () => {

	const [number,setNumber] = useState('')
	const [name,setName] = useState('')
	const [expiry,setExpiry] = useState('')
	const [cvc,setCvc] = useState('')
	const [focus,setFocus] = useState('')

	return (
		<div>
			<Cards number = {number}
					name= {name}
					expiry = {expiry}
					cvc = {cvc}
					focused = {focus}
			 />
			<form className='creditcard'>
				<input 
					type="tel" 
					name="number" 
					placeholder='CARD NUMBER' 
					value={number} 
					onChange={e => setNumber(e.target.value)} 
					onFocus={e => setFocus(e.target.name)} 
				/>
				<input 
					type="text" 
					name="name" 
					placeholder='ENTER NAME' 
					value={name} 
					onChange={e => setName(e.target.value)} 
					onFocus={e => setFocus(e.target.name)} 
				/>
				<input 
					type="tel" 
					name="expiry" 
					placeholder='MM/YY expiry' 
					value={expiry} 
					onChange={e => setExpiry(e.target.value)} 
					onFocus={e => setFocus(e.target.name)} 
				/>
				<input 
					type="tel" 
					name="cvc" 
					placeholder='CVC' 
					value={cvc} 
					onChange={e => setCvc(e.target.value)} 
					onFocus={e => setFocus(e.target.name)} 
				/>
			</form>
		</div>
	)
}

export default CreditCard
