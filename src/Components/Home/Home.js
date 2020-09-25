import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {Link} from "react-router-dom";
import './Home.css'
const Home = () => {
    return (
        <div>
        
            <div>
           <Carousel>
              <Carousel.Item className="carousal-photo img-fluid">
                <img
                  className="d-block w-100"
                  src="https://cdn.pixabay.com/photo/2020/09/19/16/19/channel-5584870__340.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                 <Link to= "/Booking"><h1>Sundarban Tour </h1></Link> 
                 <Link to= "/Booking"><h5>Click here for Booking</h5></Link> 
                  <p>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. </p>
                </Carousel.Caption>


              </Carousel.Item>
              <Carousel.Item className="carousal-photo img-fluid">
                <img
                  className="d-block w-100 "
                  src="https://media.istockphoto.com/photos/man-and-dog-sitting-on-wooden-deck-at-bled-lake-slovenia-picture-id811944228"
                  alt="Second slide"
                />

                <Carousel.Caption>
                <Link to= "/Booking"><h1>Sreemangol Tour </h1></Link> 
                <Link to= "/Booking"><h5>Click here for Booking</h5></Link> 
                <p>It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur.</p>
                </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item className="carousal-photo img-fluid">
                <img
                  className="d-block w-100"
                  src="https://cdn.pixabay.com/photo/2020/09/11/20/21/sunset-5564121_960_720.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                <Link to= "/Booking"><h1>Sajek Tour </h1></Link> 
                <Link to= "/Booking"><h5>Click here for Booking</h5></Link> 
                  <p>Sajek Valley - সাজেক ভ্যালি / মেঘের উপত্যকায় জীবন is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
           </div>
        </div>
    );
};

export default Home;