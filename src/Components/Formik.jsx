import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Formik = () => {

    const validation = yup.object().shape({
        first_name: yup.string()
        .required("first name is required"),

        last_name:yup.string()
        .required("last name is required"),

        username: yup.string()
        .required("username is required")
        .matches(/^[a-z][a-z0-9_\.]{3,11}$/,{
            message: "Invalid username"
        }),

        email: yup.string()
        .required("email is required")
        .matches(/^[a-z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,}$/,{
            message: "Invalid email"
        }),

        password: yup.string()
        .required("password is required")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/,{
            message: "Password is weak"
        }),

        confirm_password: yup.string()
        .required("Confirm password is required")
        .oneOf([yup.ref("password")], "password doesnot match")
    })

    const formik = useFormik({
        initialValues: {
            first_name:"",
            last_name:"",
            username: "",
            email: "",
            password:"",
            confirm_password:"",
        },

        onSubmit: (values) => {
            console.log(values);
            
        },

        validationSchema: validation

        // validate: ({first_name, last_name, username, email, password, confirm_password}) => {
        //     const uRegex = "^[A-Za-z][A-Za-z0-9_]{3,15}$";

        //     if (first_name == ""){
        //         return {first_name: "First name is required"}
        //     }
        //     if (last_name == ""){
        //         return {last_name: "Last name is required"}
        //     }
        //     if (!uRegex.test(username)){
        //         return {username: "Min:4 & Max:12"}
        //     }
        // }

    })

  return (
    <div className='w-50 mt-5' style={{margin:"0 auto"}}>
    <h2 className='mb-4' style={{fontSize:"22px"}}>Form management using Formik library</h2>
      <form onSubmit={formik.handleSubmit} className='d-flex flex-column gap-2'>
        <input className='outline-0 border p-2' type='text' onChange={formik.handleChange} value={formik.values.first_name} placeholder='First name' name='first_name' />
        <span className='text-danger fst-italic'>{formik.errors.first_name}</span>

        <input className='outline-0 border p-2' type='text' onChange={formik.handleChange} value={formik.values.last_name} placeholder='Last name' name='last_name' />
        <span className='text-danger fst-italic'>{formik.errors.last_name}</span>

        <input className='outline-0 border p-2' type='text' onChange={formik.handleChange} value={formik.values.username} placeholder='User name' name='username' />
        <span className='text-danger fst-italic'>{formik.errors.username}</span>

        <input className='outline-0 border p-2' type='text' onChange={formik.handleChange} value={formik.values.email} placeholder='Email' name='email' />
        <span className='text-danger fst-italic'>{formik.errors.email}</span>

        <input className='outline-0 border p-2' type='text' onChange={formik.handleChange} value={formik.values.password} placeholder='Password' name='password' />
        <span className='text-danger fst-italic'>{formik.errors.password}</span>

        <input className='outline-0 border p-2' type='text' onChange={formik.handleChange} value={formik.values.confirm_password} placeholder='Confirm password' name='confirm_password' />
        <span className='text-danger fst-italic'>{formik.errors.confirm_password}</span>

        <button type='submit' className='bg-success text-light p-2'>Submit</button>
      </form> 
    </div>
  )
}

export default Formik
