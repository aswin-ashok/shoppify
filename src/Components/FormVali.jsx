import React, { Fragment, useEffect, useState } from 'react'

let mounted = false

const FormVali = () => {

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

    const handleValidation = values  => {
        if (values.name == ""){
            return setError({...error, name: "Name is required"})
        }
        if (values.name.length < 4){
            return setError({...error, name: "Min 4 char required"})
        }
        setError({
            name: "",
            username: "",
            email: "",
            password: "",
            confirm_password: ""
        })
    }

    useEffect(() => {
        if (mounted) {
            setError({
                name: "",
                username: "",
                email: "",
                password: "",
                confirm_password: ""
            })
            handleValidation(formData)
        }
        mounted = true
    }, [formData]);

    const handleChange = event => {
        const { name, value } = event.target
        setFormData({...formData, [name]: value})
    }
    // console.log(formData);

    const handleSubmit = event => {
        event.preventDefault()
        console.log(formData);
        
    }
    

  return <div className='w-100 d-flex justify-content-center mt-5'>
    <form onSubmit={handleSubmit} className='d-flex flex-column w-25 gap-2 bg-white p-4'>
        <input onChange={handleChange} value={formData.name} className='p-2 border' style={{outline: 0}} type='text' name='name' placeholder='Enter Name' />
        <input onChange={handleChange} value={formData.username} className='p-2 border' style={{outline: 0}} type='text' name='username' placeholder='Enter Username' />
        <input onChange={handleChange} value={formData.email} className='p-2 border' style={{outline: 0}} type='text' name='email' placeholder='Enter Email' />
        <input onChange={handleChange} value={formData.password} className='p-2 border' style={{outline: 0}} type='password' name='password' placeholder='Enter Password' />
        <input onChange={handleChange} value={formData.confirm_password} className='p-2 border' style={{outline: 0}} type='password' name='confirm_password' placeholder='Enter Confirm Password' />
        <button type='submit' className='p-2 bg-success text-light mt-3'>Create Account</button>
    </form>
  </div>
}

export default FormVali;
