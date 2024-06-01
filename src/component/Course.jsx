import React from 'react'
import Image4 from '../../src/assets/tech-skills (1).jpg'
const Course = () => {
    return (
        <div>
            
            <section className="skill-section">
        <div className="skill-content">
            <h1>Each course of the program compromises</h1>
                <h4>Tech Skills</h4>
                <p>We help business to innovate and grow by strengthening their ideas with out customized software
                    solutions for multiple indusctries whcih includes healthcare, blockchain, education, insurance and
                    many more.</p>
                <button className="btn">Learn More</button>
        </div>
        <div className="tech-skill">
    
        <img src= {Image4} alt=""/>

        </div>

        <div className="skill-result">
            <div>
                <h1>65%</h1>
                <h5>Sample Headlines</h5>
                <p><i>Sample text. Click the Test Element</i></p>
            </div>
            <div>
                <h1>20%</h1>
                <h5>Sample Headlines</h5>
                <p><i>Sample text. Click the Test Element</i></p>
            </div>
        </div>
    </section>

        </div>
    );
};

export default Course;