import React from 'react';
import './index.css';

export default function Zoom() {
    const handleZoomLogin = () => {
        window.location.href = 'https://zoom.us/signin';
    };

    return (
        <div className="zoom-container">
            <button className="zoom-button" onClick={handleZoomLogin}>
                Login to Zoom
            </button>
        </div>
    );
}
