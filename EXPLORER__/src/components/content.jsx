// Content.jsx
import React from 'react';
import dream from '../Images/Big_Boys_Toys.jpg';

export default function Content() {
    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
            maxWidth: '100%',
            boxSizing: 'border-box'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <h2 style={{ fontSize: '1.5rem', margin: '0 auto' }}>Bentley Motors Limited</h2>
                <p style={{ lineHeight: '1.4', fontSize: '0.875rem', margin: '10px auto' }}>
                    Bentley Motors Limited is a British designer, manufacturer and marketer of luxury cars and SUVs. Headquartered in Crewe, England, the company was founded by W. O. Bentley in 1919 in Cricklewood, North London, and became widely known for winning the 24 Hours of Le Mans in 1924, 1927, 1928, 1929 and 1930.
                </p>
            </div>
            <div>
                <img src={dream} alt="Bentley Car" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
            </div>
        </section>
    );
}
