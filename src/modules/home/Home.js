import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel >
                <div>
                    <img src="https://assets.pcmag.com/media/images/584337-meet-the-apple-macbook-pro-16-inch.jpg?width=1280&height=720" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://cdn.vox-cdn.com/thumbor/nCf9W4NdCf3O2ZbNVjPcip6rtSQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65225607/akrales_190913_3666_0391.21.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

