import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './component/Home';
import Country from './component/Country';
import CountryOne from './component/CountryOne'
import City from './component/City';
import CityOne from './component/CityOne';
import Address from './component/Address';
import AddressOne from './component/AddressOne'
import Customer from './component/Customer';
import CustomerOne from './component/CustomerOne'

export default function App() {


    return (
        <BrowserRouter>
            <div>
                {/* header */}
                <h1 className='text-green-300'>Sakila Project</h1>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/Country">country</Link></li>
                    <li><Link to="/City">City</Link></li>
                    <li><Link to="/Address">Address</Link></li>
                    <li><Link to="/Customer">Customer</Link></li>
                </ul>

                <hr />

                {/* content--------------------------------------------------------------------------- */}
                
                
                <Routes>
                    <Route path='/' element={<Home />}/> {/* 라우터 -> 컴포넌트 */}
                    <Route path='/Country' element={<Country />}/>
                    <Route path='/country/:countryId' element={<CountryOne />}/>
                    <Route path="/city/:cityId" element={<CityOne />} />
                    <Route path='/City' element={<City />}/>
                    <Route path='/Address' element={<Address />}/>
                    <Route path='/address/:addressId' element={<AddressOne />}/>
                    <Route path='/Customer' element={<Customer />}/>
                    <Route path='/customer/:customerId' element={<CustomerOne />}/>
                </Routes>


                {/* content--------------------------------------------------------------------------- */}

                {/* footer */}
                <hr />
                <div>
                    Copyright@ GDJ91.
                </div>
            </div>
        </BrowserRouter>
    );
}