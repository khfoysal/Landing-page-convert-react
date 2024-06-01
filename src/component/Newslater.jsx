import React from 'react';

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="newsletter-container">
                <div className="newsletter-info">
                    <h1>
                        Start using Our App for free
                    </h1>
                    <p>
                        Access all Xero features for 30 days, then decide 
                        which plan best suits your <br /> business.
                    </p>
                    <div className="newsletter-input">
                        <form>
                            <input className="email" type="email" placeholder="Enter a valid email address" /> 
                            <input type="submit" className="submit-btn" />
                        </form>
                    </div>
                    <p>
                        Or compare plans from $17 per month
                    </p>
                </div>

                <div className="support-list">
                    <ul>
                        <li><i className="fa-solid fa-check"></i> Safe and Secure</li>
                        <li><i className="fa-solid fa-check"></i> Cancel any time</li>
                        <li><i className="fa-solid fa-check"></i> 24/7 online support</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
