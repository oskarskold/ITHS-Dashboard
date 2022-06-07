import Clock from "../components/Clock/Clock";
import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

const ClockView = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Clock />
            <Footer />
        </div>
    )
}

export default ClockView;