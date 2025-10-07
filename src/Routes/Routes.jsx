import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage/> ,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {   index: true, 
                Component: Home 
            }
        ]
    }
]);

export default router;