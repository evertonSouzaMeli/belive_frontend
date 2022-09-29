import React from "react";
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';

export default function Home(){
    return(
        <>
            <form>
                <label htmlFor="new-todo">CNPJ</label>
                <h1>Home works!</h1>
            </form>

            <Link to={'/perfil'}>
                <Button as="button" variant="primary">PERFIL</Button>
            </Link>
        </>
    )
}