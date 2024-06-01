import React from 'react'
import Image4 from '../../src/assets/tech-skills (1).jpg'
const Skill = () => {
    return (
       <section id='skills' >
        <div  className="course-container">
{/* <img src={Image4} alt="" /> */}
            <div className="course-content">
                <div>
                    <h1 className="section-title text-green">How and where to learn mindfulness</h1>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est
                        laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea
                        commodo consequat.</p>
                </div>
            </div>

            <div className="course-details">
                <div className="introductory">
                    <h3>Introductory courses, taster sessions and groups. Formal mindfulness courses</h3>
                    <p>Sample Text, Click to select the Text Element</p>
                </div>

                <div className="course-stats">
                    <div>
                        <h1 className=" text-green">5k</h1>
                        <p>Sample Headline</p>
                    </div>
                    <div>
                        <h1 className="text-green">60%</h1>
                        <p>Sample Headline</p>
                    </div>
                    <div>
                        <h1 className=" text-green">100</h1>
                        <p>Sample Headline</p>
                    </div>
                    <div>
                        <h1 className=" text-green">1230</h1>
                        <p>Sample Headline</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
       
    );
};

export default Skill;