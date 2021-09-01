import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch() {
    return (
        <section>
            Oops, that page doesn't exist.
            Redirecting you to homepage...
            <Link to="/home">Return to Homepage</Link>
        </section>
    )
}

export default NoMatch;