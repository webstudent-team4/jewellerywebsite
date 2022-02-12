import React from 'react';
import './top-collection.css'

function TopCollections() {
    return (
        <div className="mt w-95">
            <div className="center">
                <h1>TOP COLLECTIONS</h1>
            </div>
            <div className="underline"></div>
            <div className="grid-container">
                <div className="grid-item">
                    <a href="">
                        <img src="https://cf-cdn.pcjeweller.com/public/uploads/editor-images/collection2020/4/Dashavatar-pcj.jpg" alt="" />
                    </a>
                </div>
                <div className="grid-item">
                    <a href="">
                        <img src="https://cf-cdn.pcjeweller.com/public/uploads/editor-images/collection2020/4/enamel.jpg" alt="" />
                    </a>
                </div>
                <div className="grid-item">
                    <a href="">
                        <img src="https://cf-cdn.pcjeweller.com/public/uploads/editor-images/collection2020/4/amaila.jpg" alt="" />
                    </a>
                </div>
                <div className="grid-item">
                    <a href="">
                        <img src="https://cf-cdn.pcjeweller.com/public/uploads/editor-images/collection2020/1/Mirosa.jpg" alt="" />
                    </a>
                </div>
                <div className="grid-item">
                    <a href="">
                        <img src="https://cf-cdn.pcjeweller.com/public/uploads/editor-images/collection2020/4/hand-mangalsutra.jpg" alt="" />
                    </a>
                </div>
                <div className="grid-item">
                    <a href="">
                        <img src="https://cf-cdn.pcjeweller.com/public/uploads/editor-images/collection2020/1/expresso.jpg" alt="" />
                    </a>
                </div>
                <div className="grid-item">
                    <a href="">
                        <img src="https://cf-cdn.pcjeweller.com/public/uploads/editor-images/collection2020/1/bandhan.jpg" alt="" />
                    </a>
                </div>
                <div className="grid-item">
                    <a href="">
                        <img src="https://cf-cdn.pcjeweller.com/public/uploads/editor-images/collection2020/1/amor.jpg" alt="" />
                    </a>
                </div>
                <div className="grid-item">
                    <a href="">
                        <img src="https://cf-cdn.pcjeweller.com/public/uploads/editor-images/collection2020/1/Initials.jpg" alt="" />
                    </a>
                </div>
                <div className="grid-item">
                    <a href="">
                        <img src="https://cf-cdn.pcjeweller.com/public/uploads/editor-images/collection2020/2/twinning.jpg" alt="" />
                    </a>
                </div>
                <div className="grid-item">
                    <a href="">
                        <img src="https://cf-cdn.pcjeweller.com/public/uploads/editor-images/collection2020/1/inayat.jpg" alt="" />
                    </a>
                </div>
                <div className="grid-item">
                    <a href="">
                        <img src="https://cf-cdn.pcjeweller.com/public/uploads/editor-images/collection2020/1/la-danza.jpg" alt="" />
                    </a>
                </div>
            </div>
            <div className="view-more text-center">
                <a href="" className="active viewmorelink">View all collections</a>
            </div>
        </div>
    );
}

export default TopCollections;
