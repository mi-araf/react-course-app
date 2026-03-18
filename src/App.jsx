import { useState } from 'react';
import './App.css'
import Basic from './Components/Basic'
import InputField from './Components/InputField';
import TodoList from './Components/TodoList';
import SignUpForm from './Components/SignUpForm';

function App() {

	return (
		<>
			<SignUpForm></SignUpForm>
			<br /> <TodoList></TodoList>
			<br /> <InputField></InputField>
			<br /> <Basic />
		</>
	);
}

export default App
