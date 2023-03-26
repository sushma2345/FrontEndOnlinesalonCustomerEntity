import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import FetchAllCustomers from './components/FetchAllCustomers';
import FetchCustomer from './components/FetchCustomer';
import AddCustomer from './components/AddCustomer';
import Home from './components/Home';
import SearchCustomer from './components/SearchCustomer';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<SearchCustomer />} />
        <Route path="/customer/all" element={<FetchAllCustomers />} />
        <Route path="/customer/get/:id" element={<FetchCustomer />} />
        <Route path="/customer/add" element={<AddCustomer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
