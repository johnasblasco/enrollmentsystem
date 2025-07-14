import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
	return (

		<div className='flex flex-col  p-4 justify-center items-center h-screen'>
			<h1>Login</h1>
			<form className='w-fit border-2 border-black p-4 flex flex-col' >
				<label htmlFor="username">username</label>
				<input type="text" id="username" />
				<label htmlFor="password">password</label>
				<input type="password" id='password' />

				<div className='flex gap-4'>
					<input type="checkbox" name="rememberme" id="rememberme" />
					<label htmlFor="rememberme">remember me</label>


					<Link>Forgot password?</Link>
				</div>



			</form>
		</div>


	)
}

export default Home
