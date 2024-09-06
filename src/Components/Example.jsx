import React, { useEffect, useState } from 'react'

let mounted = false
const Example = () => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: ""
    })
    const [error, setError] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: ""
    })

    const handleValidation = values => {
        let newError = {
            name: "",
            username: "",
            email: "",
            password: "",
            confirm_password: ""
        }

        if (values.name === "") {
            newError.name = "Name is required"
        } else if (values.name.length < 4) {
            newError.name = "Min 4 char required"
        }

        if (values.username === "") {
            newError.username = "Username is required"
        }

        if (values.email === "") {
            newError.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            newError.email = "Invalid email"
        }

        if (values.password === "") {
            newError.password = "Password is required"
        } else if (values.password.length < 6) {
            newError.password = "Password must be at least 6 characters"
        }

        if (values.confirm_password !== values.password) {
            newError.confirm_password = "Passwords do not match"
        }

        setError(newError)
        return Object.values(newError).every(x => x === "")
    }

    useEffect(() => {
        if (mounted) {
            handleValidation(formData)
        }
        mounted = true
    }, [formData]);

    const handleChange = event => {
        const { name, value } = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (handleValidation(formData)) {
            console.log("Form submitted:", formData)
            // Here you would typically send the data to a server
        } else {
            console.log("Form has errors, please correct them")
        }
    }

    return (
        <div className='w-100 d-flex justify-content-center mt-5'>
            <form onSubmit={handleSubmit} className='d-flex flex-column w-25 gap-2 bg-white p-4'>
                <input onChange={handleChange} value={formData.name} className='p-2 border' style={{outline: 0}} type='text' name='name' placeholder='Enter Name' />
                <span className='text-danger'><small>{error.name}</small></span>

                <input onChange={handleChange} value={formData.username} className='p-2 border' style={{outline: 0}} type='text' name='username' placeholder='Enter Username' />
                <span className='text-danger'><small>{error.username}</small></span>

                <input onChange={handleChange} value={formData.email} className='p-2 border' style={{outline: 0}} type='text' name='email' placeholder='Enter Email' />
                <span className='text-danger'><small>{error.email}</small></span>

                <input onChange={handleChange} value={formData.password} className='p-2 border' style={{outline: 0}} type='password' name='password' placeholder='Enter Password' />
                <span className='text-danger'><small>{error.password}</small></span>

                <input onChange={handleChange} value={formData.confirm_password} className='p-2 border' style={{outline: 0}} type='password' name='confirm_password' placeholder='Enter Confirm Password' />
                <span className='text-danger'><small>{error.confirm_password}</small></span>

                <button type='submit' className='p-2 bg-success text-light mt-3'>Create Account</button>
            </form>
        </div>
    )
}

export default Example;