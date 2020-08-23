import React,{useState,createContext} from 'react'

import phone from '../work/Phone.js'
import laptop from '../work/Laptop.js'
import tv from '../work/Tv.js'

export const ShopContext = createContext()

export function ShopProvider({children}) {

 	const [products,setProducts] = useState(tv)
 	const [detailProduct,setDetailProduct] = useState({})
 	const [cartitem,setCartitem] = useState([])
 	const [subtotal,setSubtotal] = useState(0)
 	const [tax,setTax] = useState(0)
 	const [total,setTotal] = useState(0)
 	const [user,setUser] = useState('')

 	const getitem = (id) => {
 		const product = products.find(item => item.id === id)
 		return product
 	}

 	const displayProduct = (id) => {
 		setDetailProduct(getitem(id))
 	}

 	const cartProduct = (id) => {
 		const temp = getitem(id)
 		temp.cart = true
 		temp.total = temp.price 
 		temp.count = 1
 		insideCart()
 	}

 	const userChange = (name) => {
 		setUser(name)
 	} 

 	const subtotalChange = () => {
 		const subtotalArray = cartitem.map(item => item.total)
 		const totalvalue = subtotalArray.reduce((a,i) => a+i,0)
 		setSubtotal(totalvalue)
 		setTax(totalvalue / 1000)
 		setTotal(totalvalue + (totalvalue / 1000))
 	}

 	const insideCart = () => {
 		const temp = products.filter(item => item.cart === true)
 		setCartitem(temp)
 	}

 	const increment = (id) => {
 		const temp = getitem(id)
 		temp.total += temp.price
 		temp.count += 1
 		insideCart()
 		subtotalChange()
 	}

 	const decrement = (id) => {
 		const temp = getitem(id)
 		temp.total -= temp.price
 		temp.count -= 1
 		if(temp.count === 0){
 			remove(id)
 		}
 		insideCart()
 		subtotalChange()
 	}

 	const remove = (id) => {
 		const temp = getitem(id)
 		temp.cart = false
 		temp.total = 0
 		insideCart()
 		subtotalChange()
 	}

 	const clearAllCart = () => {
 		const newProducts = cartitem.map(item => {
 			item.cart = false
 			item.count = 0
 			item.total = 0 
 		})
 		setCartitem([])
 	}

	return (
		<ShopContext.Provider value={{products,
									displayProduct,
									detailProduct,
									cartProduct,
									cartitem,
									subtotalChange,
									increment,
									decrement,
									remove,
									subtotal,
									tax,
									total,
									clearAllCart,
									userChange,
									user
								}}>
			{children}
		</ShopContext.Provider>
	)
}
