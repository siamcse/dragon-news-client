import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>All terms and conditions are here.</h2>
            <p>Back to: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;