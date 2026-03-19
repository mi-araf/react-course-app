import { useState } from 'react';
import '../App.css';
/* import Basic from './Components/Basic'
import InputField from './Components/InputField';
import TodoList from './Components/TodoList';
import SignUpForm from './Components/SignUpForm'; */
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Stages from './Stages';

function NavLink() {
	const links = [
		{id: 1, text: "Home", path: "/"},
		{id: 2, text: "About", path: "/about"},
		{id: 3, text: "Contact", path: "/contact"},
		{id: 4, text: "none", path: "*"},
        {id: 5, text: "Stages", path: "/stages"},
	];

	return (
		<>
			<nav style={{display: 'flex', gap: '1.2rem', marginBottom: "1rem", fontSize: "1.6rem", justifyContent: 'center'}}>
				{
					links.map(link => <Link key={link.id} style={{textDecoration: "none", fontWeight: "bold"}} to={link.path}>{link.text}</Link>)
				}
				{/* <Link style={{textDecoration: "none"}} to={'/'}>Home</Link>
				<Link to={'/about'}>About</Link> */}
			</nav>
			<Routes>
				<Route path='/' element={<HomePage></HomePage>} ></Route>
				<Route path='/about' element={<AboutPage />} ></Route>
				<Route path='*' element={ <h1>404 page not found</h1> } ></Route>
				<Route path='/stages' element={ <Stages></Stages> }></Route>
			</Routes>
			
			<div>GG</div>
			<footer>
				<h2>Footer is here</h2>
			</footer>

			{/* <br /> <SignUpForm></SignUpForm>
			<br /> <TodoList></TodoList>
			<br /> <InputField></InputField>
			<br /> <Basic /> */}
		</>
	);
}

export default NavLink
