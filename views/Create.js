import React, { useState } from 'react';
import Form from '../components/Form';
import { navigate } from '@reach/router';
import axios from 'axios';

export default () => {
    const [author, setAuthor] = useState({
        firstName:'',
        lastName:''
    })

    const submitHandler = author => {
        axios.post("http://localhost:5000/api/author", {
            firstName:author.firstName,
            lastName:author.lastName
        })
            .then(res => {
                setAuthor({firstName:null, lastName:null})
                navigate('/authors')})
            .catch(err => console.log(err))
    }

    return (
        <> 
            <Form method={"Add a new "} author={author} onSubmitAuthor={submitHandler} setAuthor={setAuthor}/>
        </>
    )
}