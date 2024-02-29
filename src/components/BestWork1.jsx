import React from 'react';
import './BestWork1.css';
import bestworkvideo from '../images/bestwork1-video.mp4';
import planttree from '../images/planttree.jpg';

function BestWork1() {
    return (
    
        <div className=" d-flex flex-row bestwork1-video">
            <iframe 
                width="700"
                height="700"
                src={bestworkvideo}
                title="Embedded Video"
                allowFullScreen
                controls
                loop
            ></iframe>
            <img className='planttree-img'
          src={planttree}
          alt="planttree"
        />
        </div>
    );
}

export default BestWork1;
