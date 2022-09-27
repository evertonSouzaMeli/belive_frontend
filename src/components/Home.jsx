import React from "react";
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';

export default function Home(){
    return(
        <>
            <h1>Home works!</h1>
            <Link to={'/perfil'}>
                <Button as="button" variant="primary">PERFIL</Button>
            </Link>
        </>
    )
}