import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

function FetchCustomer() {

    const[customer,setCustomer] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        axios.get("http://localhost:8080/customer/"+id).then(resp=> {
            setCustomer(resp.data);
        })
    },[])

    return(<div className='container'>
        <h1>Customer Details</h1>
        {
           customer !== null && 
                <div>
                    <p>Id: {customer.customerId}</p>
                    <p>Name: {customer.name}</p>
                    <p>Email: {customer.email}</p>
                    <p>Password: {customer.password}</p>
                    <p>ContactNo: {customer.contactNo}</p>
                    <p>Age: {customer.age}</p>
                    <p>DoorNo:{ customer.doorNo}</p>
                    <p>Area:{customer.area}</p>
                    <p>City: {customer.city}</p>
                    <p>State: {customer.state}</p>
                    <p>Pincode: {customer.pincode}</p>

                </div>
        }
          <Link to="/" className="btn btn-info">Back To Home</Link>
    </div>)
}

export default FetchCustomer;