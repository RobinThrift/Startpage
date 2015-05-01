// src/scripts/links-box/category.jsx 

import React from 'react';

class LinkCategory extends React.Component {
    render() {
        var cat = this.props.category;
        return (
            <div className="links-box__category">
                <h3>{cat.name}</h3>
                <ul className="links-list">
                    {cat.links.map((link, i) => {
                        let url = cat.baseUrl ? cat.baseUrl + link.url : link.url;
                        return <li key={i}><a href={url}>{link.name}</a></li>
                    })}
                </ul>
            </div>
        );
    }
}

export default LinkCategory;

