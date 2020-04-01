import React, { Component } from 'react';
import '../css/hero.css';

import Nav from "./Nav"

import hero_bg from '../images/hero-bg.jpg'
import logo from '../images/logo.png'

export default class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="hero-inner">
                    <div className="hero-titles">
                        <p>WHAT WE DO</p>
                        <h1 className="t1">Energy Sector</h1>
                        <h1 className="t2">Consulting & Representation</h1>
                    </div>
                    <div className="hero-text">
                        <div className="subtext">
                            <p className="subtext-h">Technical an Business Advisers for companies in the Energy Sector.</p>
                            <p className="subtext-b">We help leading companies in the world, in their respective fields, enter new markets and increase their sales. Always protecting the value of their brand and business.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
