import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

const Appbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                
                        <Link to='data'>Data</Link>
                        <Link to='create'>Create Product</Link>
                        <Link to='delete'>Delete Product</Link>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default Appbar