import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

// যে  page এ navigate হয় scroll top এ থাকবে
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

export default ScrollToTop;