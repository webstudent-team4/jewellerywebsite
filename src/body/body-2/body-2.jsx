import React from 'react';
// import '../../App.css';
import './body-2.css'

import BrowseByCategory from './browse-by-category/browseByCategory';
import Catalogue from './catalogue/catalogue';
import TopCollections from './top-collections/top-collections';
import Testimonials from './testimonials/testimonials';

function body2() {
    return (
        <div>
            <BrowseByCategory/>
            <Catalogue/>
            <TopCollections/>
            <Testimonials/>
        </div>
    );
}

export default body2;
