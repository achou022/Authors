import React, { useState } from 'react';
import Form from '../components/Form';
import { navigate } from '@reach/router';
import axios from 'axios';

export default () => {
    const [author, setAuthor] = useState({
        firstName:'',
        lastName:''
    })
    const [errors, setErrors] = useState([]);

    const submitHandler = author => {
        axios.post("http://localhost:5000/api/author", {
            firstName:author.firstName,
            lastName:author.lastName
        })
            .then(res => {
                setAuthor({firstName:null, lastName:null})
                navigate('/authors')})
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <> 
            <Form method={"Add a new "} author={author} onSubmitAuthor={submitHandler} setAuthor={setAuthor} errors={errors}/>
        </>
    )
}