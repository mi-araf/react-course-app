import { useState } from 'react';
import './App.css'
import Basic from './Components/Basic'
import InputField from './Components/InputField';
import TodoList from './Components/TodoList';

function App() {

	return (
		<>
			<TodoList></TodoList>

			<br /> <InputField></InputField>
			<br /> <Basic />
		</>
	);
}

export default App
