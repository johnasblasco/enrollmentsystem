import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
	return (

		<div className='flex flex-col p-4 justify-center items-center h-screen'>

			<form data-aos="fade-up" className='w-fit border-2 gap-2 border-black p-8 flex flex-col rounded-md' >
				<h1 className='text-2xl font-bold'>Login</h1>
				<label htmlFor="username">username</label>
				<input type="text" id="username" className='border border-black p-2 rounded outline-none' />
				<label htmlFor="password">password</label>
				<input type="password" id='password' className='border border-black p-2 rounded outline-none' />

				<div className='flex gap-4'>
					<input type="checkbox" name="rememberme" id="rememberme" />


					<Link>Forgot password?</Link>
				</div>

				<button className='p-2 font-bold bg-black text-white'>Sign in</button>


				<div></div>



			</form>
		</div>


	)
}

export default Home
