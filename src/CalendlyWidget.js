/* global Calendly */
import React, { useEffect } from 'react';

const CalendlyLink = () => {
    useEffect(() => {
        // Load the script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        Calendly.initPopupWidget({ url: 'https://calendly.com/raymond1alvin/college-consulting' });
    };

    return (
        <button onClick={handleClick} className="hoverbutton">Schedule Consultation</button>
    );
};

export default CalendlyLink;
