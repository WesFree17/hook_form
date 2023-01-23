import React, {useState} from 'react';
import './Form.css'

const Form = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const createUser = (e) => {
        e.preventDefault();
    };

    return (
        <div className='layout'>
            <form onSubmit={ createUser }>
                <div className='item'>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className='item'>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>

                <div className='item'>
                    <label htmlFor="email">Email: </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className='item'>
                    <label htmlFor="password">Password: </label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className='item'>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>

                <h1>Your Data Below</h1>

            <h2>First Name: {firstName}</h2>
            <h2>Last Name:{lastName}</h2>
            <h2>Email: {email}</h2>
            <h2>Password: {password}</h2>
            <h2>Confirm Password: {confirmPassword}</h2>

            </form>

        </div>
    )
}

export default Form;