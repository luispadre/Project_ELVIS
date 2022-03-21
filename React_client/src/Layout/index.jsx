import React, { memo } from "react";
import Body from './Body'
import Header from './Header'
import Footer from './Footer'

export default memo(function Layout({ children }) {
    return (<div className="wrapper"><Header /><Body>{children}</Body><Footer /></div>);
});