import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function Perfil(){
    return(
        <>
            <h1>Perfil works!</h1>
            <Link to={'/home'}>
                <Button as="button" variant="secondary">HOME</Button>
            </Link>
        </>
    )
}