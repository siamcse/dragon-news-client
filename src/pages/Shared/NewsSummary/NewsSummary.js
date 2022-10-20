import React from 'react';

const NewsSummary = ({news}) => {
    return (
        <div>
            <p>{news.title}</p>
        </div>
    );
};

export default NewsSummary;