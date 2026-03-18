import { useState } from 'react';
import './App.css'
/* import Basic from './Components/Basic'
import InputField from './Components/InputField';
import TodoList from './Components/TodoList';
import SignUpForm from './Components/SignUpForm'; */
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';

function App() {

	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage></HomePage>} ></Route>
				<Route path='/about' element={<AboutPage />} ></Route>
				<Route path='*' element={ <h1>404 page not found</h1> } ></Route>
			</Routes>

			{/* <br /> <SignUpForm></SignUpForm>
			<br /> <TodoList></TodoList>
			<br /> <InputField></InputField>
			<br /> <Basic /> */}
		</>
	);
}

export default App
