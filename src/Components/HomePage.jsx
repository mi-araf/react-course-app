import React from 'react';
import Basic from './Basic'
import InputField from './InputField';
import TodoList from './TodoList';
import SignUpForm from './SignUpForm';

const HomePage = () => {
    return (
        <div>
            <h1>HOME page</h1>
            <h3>This is SPA - Single Page Application</h3>

			<br /> <SignUpForm></SignUpForm>
			<br /> <TodoList></TodoList>
			<br /> <InputField></InputField>
			<br /> <Basic />
        </div>
    );
};

export default HomePage;