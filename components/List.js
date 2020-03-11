import React from 'react';
import { Link, navigate } from '@reach/router';
import { Button } from "@material-ui/core";
import DeleteBtn from './DeleteBtn';

export default props => {

    return (
        <>
            <Link to={"/authors/new"} style={{color:'skyblue'}}>
                Add an Author
            </Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authors.map((author, index)=>(
                        <tr key={index}>
                            <td>{author.lastName}, {author.firstName}</td>
                            <td>
                                <Button onClick={e=> navigate('/authors/edit/'+author._id)} style={{color:'white', background:'skyblue'}}>Edit</Button>
                                <DeleteBtn author={author}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}