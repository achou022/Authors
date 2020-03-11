import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import List from '../components/List';
import Create from './Create';
import Update from './Update';
import axios from 'axios';

export default () => {
    const [authors, setAuthors] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/api/author")
            .then(res => setAuthors(res.data.Authors))
            .catch(err => console.log(err))
    }, [authors])

    return (
        <>
            <Router>
                <List path="/authors" authors={authors}/>
                <Create path="/authors/new"/>
                <Update path="/authors/edit/:id"/>
            </Router>
        </>
    )
}