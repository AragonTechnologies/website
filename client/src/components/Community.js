import React from "react";

const Community = () => {
    return(
        <div class="community-area wow fadeInUp section-padding" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="heading">
                        <h5>GReat Community</h5>
                        <div class="space-10"></div>
                        <h1>Our Community </h1>
                    </div>
                <div class="space-60"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-lg col-xs-12">
                    <div class="single-community big-social">
                        <a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a>
                    </div>
                </div>
                <div class="col-6 col-lg col-xs-6">
                    <div class="single-community mid-social">
                        <a  
                            target="_blank"
                            class="linkedin" href="https://www.linkedin.com/company/aragontechnologies/"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="col-6 col-lg col-xs-6">
                    <div class="single-community mid-social">
                        <a target="_blank" class="github" href="https://github.com/AragonTechnologies"><i class="fa fa-github"></i></a>
                    </div>
                </div>
                <div class="col-6 col-lg col-xs-6">
                    <div class="single-community big-social">
                        <a class="youtube" href="#"><i class="fa fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-6 col-lg">
                    <div class="single-community mid-social">
                        <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Community;