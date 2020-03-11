import React from 'react';
import { Button } from '@material-ui/core';
import { navigate } from '@reach/router';
import axios from 'axios';

export default props => {
    const deleteHandler = authorID => {
        axios.delete('http://localhost:5000/api/author/delete/'+authorID)
            .then(res=>{
                navigate('/authors');
                console.log(res)})
            .catch(err=>console.log(err))
    }

    return (
        <Button onClick={e=>deleteHandler(props.author._id)} style={{color:'white', background:'skyblue'}}>Delete</Button>
    )
}