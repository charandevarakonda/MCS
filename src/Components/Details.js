import React from "react";
import { Link, useParams } from "react-router-dom";

function Details({ customer }) {
    return (
        <div>
            <h2>Customer Details</h2><br/>
            <b>Name: {customer.name}</b><br/>
            <b>Intro: {customer.intro}</b><br/>
            <b>Rating: {customer.rating}</b><br/>
            <b>reviewCount: {customer.reviewCount}</b><br/>
            <b>deliveryTime: {customer.deliveryTime}</b><br/>
            <b>price: {customer.price}</b><br/>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default Details;
