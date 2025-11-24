import './SignUp.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [errorData, setErrorData] = useState({})
    
    const handleChange = (e) => {
        const newFormData = {...formData, [e.target.name]: e.target.value}
        setFormData(newFormData)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
        <h1>Create an account</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor='username'></label>
                <input type='text' name='username' id='username' placeholder='Username' onChange={handleChange} required />
            </div>
            <div className='form-control'>
                <label htmlFor='email'></label>
                <input type='text' name='email' id='email' placeholder='Email' onChange={handleChange} required />
            </div>
            <div className='form-control'>
                <label htmlFor='password'></label>
                <input type='password' name='password' id='password' placeholder='Password' onChange={handleChange} required />
            </div>
            <div className='form-control'>
                <label htmlFor='confirmPassword'></label>
                <input type='password' name='confirmPassword' id='confirmPassword' placeholder='Confirm Your Password' onChange={handleChange} required />
            </div>

                <button type='submit'>Create an account</button>
        </form>
        </>
    )
}

export default SignUp