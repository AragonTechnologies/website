import React from 'react';


const WelcomeSection = () => {
    return(
        <div class="welcome-area wow fadeInUp" id="home">
        <div id="particles-js"></div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 align-self-center">
                    <div class="welcome-right">
                        <div class="welcome-text">
                             <h1>Fastest Growing Blockchain Startup
                            In Nigeria
                            {/* Investors and Founders  */}
                            </h1>
                            <h4>Sifting through teaspoons of clay and sand scraped from the 
    {/* floors of caves, German researchers have managed.
    lorem    */}
    </h4>
                        </div>
                        <div class="welcome-btn">
                            <a href="#" class="gradient-btn v2 mr-20">Connect With Metamask</a>
                            <a href="#" class="gradient-btn v2">Connect With Fortmatic</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="welcome-img">
                        <img src="/img/welcome-img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default WelcomeSection;
