import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignUpForm = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    
    // use useForm instead
    const {register, handleSubmit, formState: {errors} } = useForm();

    function onSubmit({ email, password }) {
        // event.preventDefault();
        alert(`submitted with email: ${email} and password: ${password}`);
    }

    return (
        <div style={{ maxWidth: 400, margin: "2rem auto" }}>
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: "1rem" }}>
                    <label>
                        Email: <input type="email" placeholder="you@example.com" {...register("email", {required: "Email is required"})} />
                    </label>
                    {
                        errors.email && (<p style={{color:"crimson"}}>{errors.email.message}</p>)
                    }
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label>
                        Password: <input type="password" placeholder="••••••••" {...register("password", {required: "Password is required", minLength: {
                            value: 3,
                            message: "Password must be at least 3 characters long"
                        },
                        maxLength: {
                            value: 8,
                            message: "Password must be at most 8 characters long"
                        },
                        })} />
                    </label>
                    {
                        errors.password && (<p style={{color:"crimson"}}>{errors.password.message}</p>)
                    }
                </div>

                <button className='counter' type="submit">Create account</button>
            </form>
        </div>
    );
};

export default SignUpForm;