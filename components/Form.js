import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { Button, Card, CardContent } from '@material-ui/core';


export default props => {
    const [state, setState] = useState({
        firstName:props.author.firstName,
        lastName: props.author.lastName
    })

    const changeHandler = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = e => {
        console.log(state);
        e.preventDefault();
        props.onSubmitAuthor(state);
    }

    return(
        <>
            <p>{props.method}author</p>
            <Card variant="outlined">
                <CardContent>
                    <form onSubmit={submitHandler}>
                        <label>First Name:</label>
                        <input type="text" name="firstName"
                        onChange={changeHandler}
                        value={state.firstName}/>
                        <br/>
                        <label>Last Name:</label>
                        <input type="text" name="lastName"
                        onChange={changeHandler}
                        value={state.lastName}/>
                        <br/>
                        <Button onClick={e=>navigate('/authors')} style={{color:'white', background:'skyblue'}}>Cancel</Button>
                        <Button type="submit" style={{color:'white', background:'skyblue'}}>Submit</Button>
                    </form>
                    {props.errors.map((err, index) => <p key={index} style={{color:'red'}}>{err}</p>)}
                </CardContent>
            </Card>
            <Link to={'/authors'} style={{color:'skyblue'}}>
                Home
            </Link>
        </>
    )
}