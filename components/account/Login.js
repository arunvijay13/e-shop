import React,{useContext} from 'react'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import {ShopContext} from '../../context/Context.js'

const Login = () => {

	const {userChange,cartitem} = useContext(ShopContext)

	const initialValues = {
		email:'',
		password:''
	}

	const onSubmit = values => console.log(values)

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email format').required('required'),
		password: Yup.string().min(8,'Min 8 characters needed').max(16,'characters exceeded').required('required')
	}) 
	
	return (
		<React.Fragment>
			
			<h3 className='text-center my-4'>Login</h3>

			<Formik 
				initialValues = {initialValues}
				validationSchema = {validationSchema}
				onSubmit = {onSubmit} >
			<Form>
				<div className='email lead'>
					<label htmlFor="email">E-mail</label>
					<Field type="text" name="email" />
					<ErrorMessage name='email'>
						{errormsg => <div className='error'>{errormsg}</div>}
					</ErrorMessage>
				</div>

				<div className='password lead'>
				<label htmlFor="name">Password</label>
				<Field type="password" name="password" />
				<ErrorMessage name='password'>
					{errormsg => <div className='error'>{errormsg}</div>}
				</ErrorMessage>
				</div>
				<div className='text-center m-4' onClick={() => userChange('to E-shop')}>
					{ 
					cartitem.length ? <Link to='/purchase'><button type='submit' className='btn btn-primary font-weight-bold submit' >Submit</button></Link> :
										<Link to='/cart'><button type='submit' className='btn btn-primary font-weight-bold submit' >Submit</button></Link>
					}
				</div>
			</Form>
			</Formik>
		</React.Fragment>
	)
}

export default Login