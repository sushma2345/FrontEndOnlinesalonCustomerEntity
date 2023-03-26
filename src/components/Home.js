import React from 'react';
import { Link } from 'react-router-dom';
import SearchCustomer from './SearchCustomer';


// import saloon1 from "../images/Saloon.jpg" 

function Home() {

    return (<div className='container'>
        {/* <img src={saloon1} className="card-img" alt="Background"
                height="550px" /> */}
        <h1>Online Salon Service</h1>
        <div>
            <SearchCustomer/>
        </div>
        <div>
            <Link to="/customer/all">View All Customers</Link>
        </div>
        <div>
            <Link to="/customer/add">Add New Customer</Link>
        </div>
        
    </div>)
    
}

export default Home;