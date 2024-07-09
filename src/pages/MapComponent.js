import React from 'react';

function MapComponent() {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.404269838347!2d79.844325074807!3d12.015665235115447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5365c872f585b1%3A0xbf6b80f7c1507bc6!2sAtal%20Incubation%20Centre%20(AIC)-%20Pondicherry%20Engineering%20College%20Foundation!5e0!3m2!1sen!2sin!4v1716975340405!5m2!1sen!2sin"
                width="980"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"

            ></iframe>
        </div>
    );
}

export default MapComponent;