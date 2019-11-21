import React, { Component } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Services from '../components/Services';

class Index extends Component {
    render() {
        return (
            <>
                <Header />
                {/* <About /> */}
                {/* <Services /> */}
                {/* <Portfolio /> */}
                <Contact />
                <Footer />
            </>
        );
    }
}

export default Index;