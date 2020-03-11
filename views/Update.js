import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import { navigate } from '@reach/router';
import axios from 'axios';

export default props => {
    const [author, setAuthor] = useState({
        firstName:'',
        lastName:''
    });
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:5000/api/author/'+ props.id)
            .then(res => {
                setAuthor(res.data)
                setLoaded(true)})
            .catch(err => {
                console.log(err)
                navigate('http://memecrunch.com/meme/2W4W6/trying-to-trick-me-huh/image.jpg')});
    }, [])

    const submitHandler = author => {
        axios.put("http://localhost:5000/api/author/"+ props.id +'/edit', author)
            .then(res => navigate('/authors'))
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            });
    }
    return (
        <>  
            {loaded? <Form method={"Edit this "} author={author} onSubmitAuthor={submitHandler} errors={errors}/>: null}
        </>
    )
}