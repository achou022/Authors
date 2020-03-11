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
    
    useEffect(()=>{
        axios.get('http://localhost:5000/api/author/'+ props.id)
            .then(res => {
                setAuthor(res.data)
                setLoaded(true)})
            .catch(err => console.log(err));
    }, [])

    const submitHandler = author => {
        axios.put("http://localhost:5000/api/author/"+ props.id +'/edit', author)
            .then(res => navigate('/authors'))
            .catch(err => console.log(err))
    }
    return (
        <>  
            {loaded? <Form method={"Edit this "} author={author} onSubmitAuthor={submitHandler}/>: null}
        </>
    )
}