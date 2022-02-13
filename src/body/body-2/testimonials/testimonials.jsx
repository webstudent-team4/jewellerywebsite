import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './testimonials.css'

export default class Testimonials extends Component {
    render() {
        return (
            <div className="mt w-95">
                <div className="center">
                    <h1>Testimonials</h1>
                </div>
                <div className="underline"></div>
                <div>

                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={3100}
                    >
                        <div>
                            <img src="https://www.pcjeweller.com/public/uploads/exim/pcjw/catalogue/diamond-jewellery.jpg" />
                            <div className="myCarousel">
                                <h3>Shirley Fultz</h3>
                                <h4>Designer</h4>
                                <p>
                                    It's freeing to be able to catch up on customized news and not be
                                    distracted by a social media element on the same site
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src="https://www.pcjeweller.com/public/uploads/exim/pcjw/catalogue/diamond-jewellery.jpg" />
                            <div className="myCarousel">
                                <h3>Daniel Keystone</h3>
                                <h4>Designer</h4>
                                <p>
                                    The simple and intuitive design makes it easy for me use. I highly
                                    recommend Fetch to my peers.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src="https://www.pcjeweller.com/public/uploads/exim/pcjw/catalogue/diamond-jewellery.jpg" />
                            <div className="myCarousel">
                                <h3>Theo Sorel</h3>
                                <h4>Designer</h4>
                                <p>
                                    I enjoy catching up with Fetch on my laptop, or on my phone when
                                    I'm on the go!
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src="https://www.pcjeweller.com/public/uploads/exim/pcjw/catalogue/diamond-jewellery.jpg" />
                            <div className="myCarousel">
                                <h3>Theo Sorel</h3>
                                <h4>Designer</h4>
                                <p>
                                    I enjoy catching up with Fetch on my laptop, or on my phone when
                                    I'm on the go!
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </div>
                
            <div className="view-more text-center">
                <a href="" className="active viewmorelink">View all Testimonials</a>
            </div>

            </div>
        );
    }
}