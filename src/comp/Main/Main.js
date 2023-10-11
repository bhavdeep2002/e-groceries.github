import React, { Component } from 'react';
import Home from '../Home/Home.js';
import {Routes, Route } from 'react-router-dom';
import Everything from "../Everything/Everything.js"
import Groceries from "../Groceries/Groceries.js"
import Juice from "../Juice/Juice.js"



class Main extends Component {
    render() {
        return (
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Everything" element={<Everything />} />
                    <Route path="/Groceries" element={<Groceries />} />
                    <Route path="/Juice" element={<Juice />} />
                </Routes>
            </main>
        );
    }
}

export default Main;