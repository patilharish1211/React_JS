// Header.jsx
import React from 'react';
import logo from '../Images/Bentley_Logo.png';

export default function Header() { 
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #dee2e6',
            overflow: 'hidden'
        }}>
            <div style={{ height: '50px' }}>
                <a href="https://www.bentleymotors.com/en.html"><img src={logo} alt="Bentley Logo" style={{ height: '100%' }} /></a>
            </div>
            <nav style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap'
            }}>
                <a href="#" style={{
                    textDecoration: 'none',
                    color: '#007bff',
                    fontWeight: 'bold',
                    fontSize: '14px'
                }}>Home</a>
                <a href="#" style={{
                    textDecoration: 'none',
                    color: '#007bff',
                    fontWeight: 'bold',
                    fontSize: '14px'
                }}>About</a>
                <a href="#" style={{
                    textDecoration: 'none',
                    color: '#007bff',
                    fontWeight: 'bold',
                    fontSize: '14px'
                }}>Content</a>
                <a href="#" style={{
                    textDecoration: 'none',
                    color: '#007bff',
                    fontWeight: 'bold',
                    fontSize: '14px'
                }}>Services</a>
                <a href="#" style={{
                    textDecoration: 'none',
                    color: '#007bff',
                    fontWeight: 'bold',
                    fontSize: '14px'
                }}>Blogs</a>
            </nav>
        </header>
    );
}
