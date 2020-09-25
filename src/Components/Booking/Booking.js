import React, {useState} from 'react';
import { Button, Form} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Booking = () => {

    const [selectedDate, setSelectedDate]= useState();
    const [selectedDate2, setSelectedDate2]= useState();
    return (
        <div className="col-md-3 col-md-offset-3">
            <h3>This is Booking component</h3>
            <Form>
                    <Form.Label>Origin</Form.Label>
                    <br/>
                    <Form.Control type="text" placeholder="Enter your place of origin" />
                    <br/>
                    <Form.Label>Date</Form.Label>
                    <br/> 
                    <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}
                    dateFormat='dd/MM'
                 
                    />


                   
                    <br/>  <br/>
                    <Form.Label>Destination</Form.Label>
                    <br/>
                    <Form.Control type="text" placeholder="Enter your place of destination" />
                    <br/>
                    <Form.Label>Date</Form.Label>
                    <br/> 
                    <DatePicker selected={selectedDate2} onChange={date => setSelectedDate2(date)}
                    dateFormat='dd/MM'
                    
                    />
                <br/>   <br/>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
        </Form>
        </div>
    );
};

export default Booking;