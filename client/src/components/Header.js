import React from 'react';


const Header = () => {
    return(
        <div class="header-area wow fadeInDown header-absolate " id="nav" data-0="position:fixed;" data-top-top="position:fixed;top:0;" data-edge-strategy="set">
        <div class="container">
            <div class="row">
                <div class="col-4 d-block d-lg-none">
                    <div class="mobile-menu"></div>
                </div>
                <div class="col-4 col-lg-2">
                    <div class="logo-area">
                        {/* <a href="#"><img src="/img/logo-top.png" alt="" /></a> */}
                        <a href="#" style={{fontSize:"25px", color:"white"}}>ARAGONTech</a>
                    </div>
                </div>
                <div class="col-4 col-lg-8 d-none d-lg-block">
                    <div class="main-menu text-center">
                        <nav>
                            <ul id="slick-nav">
                                <li><a class="scroll" href="#home">home</a>
                                </li>
                                <li><a class="scroll" href="#about">About</a>
                                </li>
                                {/* <li><a class="scroll" href="#Paper">White Paper</a></li>
                                <li><a class="scroll" href="#token">Token Sale</a></li>
                                <li><a class="scroll" href="#roadmap">Roadmap</a></li> */}
                                <li><a class="scroll" href="#team">Team</a></li>
                                {/* <li><a class="scroll" href="#apps">APP</a></li>
                                <li><a class="scroll" href="#faq">FAQ</a></li> */}
                                <li><a class="scroll" href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    );
}


export default Header;
