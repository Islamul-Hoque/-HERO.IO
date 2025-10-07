import React from 'react';
import { useRouteError } from 'react-router';

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <Navbar/>
            <div>{error.message}</div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;