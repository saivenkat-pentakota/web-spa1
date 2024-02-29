import React from 'react';
import './BestWork3.css';
import bestworkvideo3 from '../images/bestwork3-video.mp4';
import bestwork3Image from '../images/bestwork3-image.jpg';

function BestWork3() {
    return (
    
        <div className=" d-flex flex-row bestwork3">
            <iframe 
                className='bestwork3-video'
                width="700"
                height="700"
                src={bestworkvideo3}
                title="Embedded Video"
                allowFullScreen
                controls
                loop
            ></iframe>
            <img className='bestwork3Image'
          src={bestwork3Image}
          alt="bestwork3Image"
        />
        </div>
    );
}

export default BestWork3;
