import React from 'react'
import Image from '../../src/assets/team-1.png'
import Image1 from '../../src/assets/team-2.png'
import Image2 from '../../src/assets/team-3.png'

const Team = () => {
    return (
    
   
        <section className="team-section">
        <div className="team-container">
            <h1>Meet The Team <br/> <span className="text-green">Our Professionals</span></h1>

            <div className="team-card-item">
                <div className="team-card">
                <div style={{background:"grey", borderRadius:"20px"}}>
                <img src= {Image} alt=""/>
                </div>
                    <h3>Mary Brown</h3>
                    <h4 className="text-green ">Creative leader</h4>
                    <p>
                        Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet
                        iquam lorem bibendum
                    </p>
                    <div className="text-green social-icons">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>


                <div className="team-card">
                   <div style={{background:"grey", borderRadius:"10px"}}>
                   <img width={200} src= {Image1} alt=""/>
                   </div>

                    <h3>Mary Brown</h3>
                    <h4 className="text-green">Creative leader</h4>
                    <p>
                        Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet
                        iquam lorem bibendum
                    </p>
                    <div className="text-green social-icons">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>




                <div className="team-card">
                <div style={{background:"grey", borderRadius:"20px"}}>   
               
                <img src= {Image2} alt=""/>
                </div>
                    <h3>Mary Brown</h3>
                    <h4 className="text-green ">Creative leader</h4>
                    <p>
                        Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet
                        iquam lorem bibendum
                    </p>
                    <div className="text-green social-icons">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    
                </div>
            </div>

        </div>

    </section>
   


    );
};

export default Team;