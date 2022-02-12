import React from 'react';
// import '../../App.css';
import './body-2.css'

import BrowseByCategory from './browse-by-category/browseByCategory';
import Catalogue from './catalogue/catalogue';
import TopCollections from './top-collections/top-collections';

function body2() {
    return (
        <div>
            <BrowseByCategory/>
            <Catalogue/>
            <TopCollections/>
        </div>
    );
}

export default body2;
