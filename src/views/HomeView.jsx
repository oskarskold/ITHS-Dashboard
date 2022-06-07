import React from 'react';
import Header from "../components/Header/Header";
import Home from '../components/Home/Home';
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

const HomeView = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Home />
            <Footer />
        </div>
    )
}

export default HomeView;