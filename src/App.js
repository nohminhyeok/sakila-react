import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './component/Home';
import Country from './component/Country';
import CountryOne from './component/CountryOne'
import AddCountry from './component/AddCountry';
import EditCountry from './component/EditCountry';
import City from './component/City';
import CityOne from './component/CityOne';
import Addcity from './component/AddCity'
import EditCity from './component/EditCity';
import Address from './component/Address';
import AddressOne from './component/AddressOne'
import AddAddress from './component/AddAddress'
import EditAddress from './component/EditAddress';
import Customer from './component/Customer';
import CustomerOne from './component/CustomerOne'
import AddCustomer from './component/AddCustomer'
import EditCustomer from './component/EditCustomer';

export default function App() {


    return (
        <BrowserRouter>
            <div className="min-h-screen bg-white text-gray-800 px-10 py-6">
                {/* header */}
                <h1 className="text-green-500 text-3xl font-bold mb-4">Sakila Project</h1>
                <ul className="flex gap-4 mt-2 text-lg">
                    <li><Link to="/" className="hover:text-primary font-semibold">Home</Link></li>
                    <li><Link to="/Country" className="hover:text-primary font-semibold">Country</Link></li>
                    <li><Link to="/City" className="hover:text-primary font-semibold">City</Link></li>
                    <li><Link to="/Address" className="hover:text-primary font-semibold">Address</Link></li>
                    <li><Link to="/Customer" className="hover:text-primary font-semibold">Customer</Link></li>
                </ul>

                <hr className="mb-4" />


                {/* content--------------------------------------------------------------------------- */}
                
                
                <Routes>
                    <Route path='/' element={<Home />}/> {/* 라우터 -> 컴포넌트 */}

                    {/* country crud */}
                    <Route path='/Country' element={<Country />}/>
                    <Route path='/country/:countryId' element={<CountryOne />}/>
                    <Route path='/AddCountry' element={<AddCountry />} />
                    <Route path='/EditCountry/:countryId' element={<EditCountry/>} />

                    {/* city crud */}
                    <Route path="/city/:cityId" element={<CityOne />} />
                    <Route path='/City' element={<City />}/>
                    <Route path='/AddCity' element={<Addcity />} />
                    <Route path='/EditCity/:cityId' element={<EditCity/>} />

                    {/* address crud */}
                    <Route path='/Address' element={<Address />}/>
                    <Route path='/address/:addressId' element={<AddressOne />}/>
                    <Route path='/AddAddress' element={<AddAddress />} />
                    <Route path='/EditAddress/:addressId' element={<EditAddress/>} />

                    {/* customer crud */}
                    <Route path='/Customer' element={<Customer />}/>
                    <Route path='/customer/:customerId' element={<CustomerOne />}/>
                    <Route path='/AddCustomer' element={<AddCustomer/>} />
                    <Route path='/EditCustomer/:customerId' element={<EditCustomer/>} />
                </Routes>


                {/* content--------------------------------------------------------------------------- */}

                {/* footer */}
                <hr className="mt-4" />
                <div className="text-center text-sm text-gray-500 mt-2">
                    Copyright@ GDJ91.
                </div>
            </div>
        </BrowserRouter>
    );
}