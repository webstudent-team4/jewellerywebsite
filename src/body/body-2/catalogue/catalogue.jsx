import React from 'react';
import './catalogue.css';

function Catalogue() {
    return (
        <div className="mt">
            <div className="center">
                <h1>CATALOGUE</h1>
            </div>
            <div className="underline"></div>
            <div className="catalogue">
                <div className="col-xs-6 cl-section">
                    <figure>
                        <a href="/">
                            <img className="img-responsive" src="https://www.pcjeweller.com/public/uploads/exim/pcjw/all-jewel.jpg" height="250" alt=""/>
                        </a>
                    </figure>
                </div>
                <div className="two col-xs-6">
                    <div className="one">
                        <div className="col-xs-100 cl-section">
                            <figure>
                                <a href="/">
                                    <img alt="" height="250" width="500" className="img-responsive" src="https://www.pcjeweller.com/public/uploads/exim/pcjw/catalogue/diamond-jewellery.jpg" />
                                </a>
                            </figure>
                            <h2>Diamond Jwellery</h2>
                        </div>
                        <div className="col-xs-100 cl-section">
                            <figure>
                                <a href="/">
                                    <img alt=""  height="250" width="500" className="img-responsive" src="https://www.pcjeweller.com/public/uploads/exim/pcjw/catalogue/gold-jewellery.jpg" />
                                </a>
                            </figure>
                            <h2>Gold Jwellery</h2>
                        </div>
                    </div>
                    <div className="one">

                        <div className="col-xs-100 cl-section">
                            <figure>
                                <a href="/">
                                    <img alt="" height="250" width="500" className="img-responsive" src="https://www.pcjeweller.com/public/uploads/exim/pcjw/catalogue/gold-jewellery.jpg" />
                                </a>
                            </figure>
                            <h2>Gold Jwellery</h2>
                        </div>
                        <div className="col-xs-100 cl-section">
                            <figure>
                                <a href="/">
                                    <img alt=""  height="250" width="500" className="img-responsive" src="https://www.pcjeweller.com/public/uploads/exim/pcjw/catalogue/diamond-jewellery.jpg" />
                                </a>
                            </figure>
                            <h2>Diamond Jwellery</h2>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Catalogue;
