import React from 'react';
import './BestWork1.css';
import bestworkvideo1 from '../images/bestwork1-video.mp4';
import  bestwork1image from '../images/bestwork1-image.jpg';

function BestWork1() {
    return (
    
        <div className=" d-flex flex-row bestwork1">
            <iframe 
                className='bestwork1-video'
                width="700"
                height="900"
                src={bestworkvideo1}
                title="Embedded Video"
                allowFullScreen
                controls
                loop
            ></iframe>
            <img className='bestwork1image'
          src={bestwork1image}
          alt="bestwork1image"
        />
        </div>
    );
}

export default BestWork1;
