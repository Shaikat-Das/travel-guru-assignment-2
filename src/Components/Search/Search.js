import React, {MapContainer} from 'react';
import { Card, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import GoogleMap from '../GoogleMap/GoogleMap';
import './Search.css'


const Search = () => {
    return (
    <>
        <div className="card" >
            
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src=" " />
                <Card.Body>
                    <Card.Title>Hotel Name Here</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Link to= "/Booking"><Button >Click Here to Book </Button></Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src=" " />
                <Card.Body>
                    <Card.Title>Hotel Name Here</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Link to= "/Booking"><Button >Click Here to Book </Button></Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src=" " />
                <Card.Body>
                    <Card.Title>Hotel Name Here</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Link to= "/Booking"><Button >Click Here to Book </Button></Link>
                </Card.Body>
            </Card>
        </div>
        {/* <GoogleMap></GoogleMap> */}
    </>
    );
};

export default Search;