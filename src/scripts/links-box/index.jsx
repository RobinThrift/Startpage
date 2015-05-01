// src/scripts/links-box/index.jsx

import React from 'react';
import Links from '../../data/links.json';
import LinkCategory from './category.jsx';

class LinksBox extends React.Component {
    render() {
        return (
            <div className="links-box">
                {Links.map((cat, i) => {
                    return <LinkCategory key={i} category={cat} />
                })}                
            </div>
        );
    }
}

export default LinksBox;

