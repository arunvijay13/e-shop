import React,{useContext} from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {Styles} from '../styled/Style.js'
import {ShopContext} from '../../context/Context.js'
import {Link} from 'react-router-dom'

const Account = () => {

	const {userChange,cartitem} = useContext(ShopContext)

	const initialValues = {
		name:'',
		email:'',
		password:'',
		address:'',
		number:'',
		checkbox: false
	}

	const onSubmit = values => {
		userChange(values.name)
		console.log(values)
	}

	const validationSchema = Yup.object({
		name: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email format').required('Required'),
		password: Yup.string().min(8,'Min 8 characters needed').max(16,'characters exceeded').required('Required'),
		address: Yup.string().required('Required').max(30,"Max 30 character"),
		number: Yup.number().required("Required"),
		checkbox: Yup.boolean().required("Required").oneOf([true],'You Must accept the terms and conditions')
	})

	return (
		<Styles>
			
			<h3>New Account</h3>
			<Formik initialValues = {initialValues}
				validationSchema = {validationSchema}
				onSubmit = {onSubmit}>
			<Form>
				<div className='name'>
					<label htmlFor="name">name</label>
					<Field type="text" name="name" />
					<ErrorMessage name='name'>
						{errormsg => <div className='error'>{errormsg}</div>}
					</ErrorMessage>
				</div>

				<div className='name'>
					<label htmlFor="name">e-mail</label>
					<Field type="text" name="email" />
					<ErrorMessage name='email'>
						{errormsg => <div className='error'>{errormsg}</div>}
					</ErrorMessage>
				</div>

				<div className='name'>
					<label htmlFor="name">Password</label>
					<Field type="password" name="password" />
					<ErrorMessage name='password'>
						{errormsg => <div className='error'>{errormsg}</div>}
					</ErrorMessage>
				</div>

				<div className='name'>
					<label htmlFor="name">address</label>
					<Field type="textarea" rows='30' cols='10' name="address" />
					<ErrorMessage name='address'>
						{errormsg => <div className='error'>{errormsg}</div>}
					</ErrorMessage>
				</div>

				<div className='name'>
					<label htmlFor="name">phone</label>
					<Field type="tel" name="number" />
					<ErrorMessage name='number'>
						{errormsg => <div className='error'>{errormsg}</div>}
					</ErrorMessage>
				</div>

				<label>
					<Field type="checkbox" name="checkbox" />
					<span className='text-info'>Accept terms and conditions</span>
					<ErrorMessage name='checkbox'>
						{errormsg => <div className='error'>{errormsg}</div>}
					</ErrorMessage>
				</label>

				<button type='submit' className='btn btn-primary font-weight-bold submit'>Submit</button>

				{
					
					cartitem.length ? <Link to='/purchase'><button type='button' className='btn btn-danger font-weight-bold submit'>Fill Payment</button></Link> :
					<Link to='/cart'><button type='button' className='btn btn-danger font-weight-bold submit'>Fill Payment</button></Link>
				}
			</Form>
			</Formik>
		</Styles>
	)
}

export default Account