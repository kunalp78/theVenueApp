import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29395.095228299062!2d87.65696532211614!3d22.93597393979072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f819b4cf3105a3%3A0xa753436e0380200a!2sBengai%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1603599068045!5m2!1sen!2sin" 
            width="100%"
            height="500px"
            frameBorder="0"
            allowFullScreen 
            aria-hidden="false"
            tabindex="0"></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;