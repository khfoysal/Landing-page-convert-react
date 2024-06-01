import React from 'react'
import Image from '../../src/assets/Grow.png'
import Imagew from '../../src/assets/right-arrow.png'
import ImageM from '../../src/assets/arrow-right-white.png'

const Project = () => {
    return (
        <section className="project-steps">
 

        <div className="card">
            <div className="card-icon">
            <img src={Image} alt="" />
            </div>
            <h2>Visualized it</h2>
            
            <p>
                Sample text. Click to select the text box. Click again or double click
                to start editing the text.
            </p>

            <span className="arrow-green">


            <img src={Imagew} alt="" />
            </span>
        </div>

        <div className="card">
            <div className="card-icon">
             <img src={Image} alt="" />
            </div>
            <h2>Go it</h2>
         
            <p>
                Sample text. Click to select the text box. Click again or double click
                to start editing the text.
            </p>
            <div>
                <span className="arrow-white">
                <img src={ImageM} alt="" />
                </span>
            </div>
        </div>

        <div className="card">
            <div className="card-icon">
            <img src={Image} alt="" />
            </div>
            <h2>Create it now</h2>
            
            <p>
                Sample text. Click to select the text box. Click again or double click
                to start editing the text.
            </p>

            <span className="arrow-green">
            <img src={Imagew} alt="" />
            </span>
        </div>
    </section>


    );
};

export default Project;