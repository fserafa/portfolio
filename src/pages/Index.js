import React, { Component } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Services from '../components/Services';
import IndexNavbar from '../components/IndexNavbar';

export default function Index() {
    return (
        <>
        <header>
            <IndexNavbar />
                <Header />
        </header>
            <main>
                {/* <About /> */}
                <Services />
                {/* <Portfolio /> */}
                <Contact />
                <Footer />
            </main>
        </>
    );
}