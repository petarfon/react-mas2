import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Country from './country';

const Order = () => {

    const [countries, setCountries] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/region/europe');
                setCountries(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };

        fetchCountries();
    }, []);

    return (
        <div>
            <form action="" className="order-form">
                <div className="field">
                    <label htmlFor="name">Name and surname:</label>
                    <input type="text" id='name' />
                </div>
                <div className='field'>
                    <select name="" id="country">
                        {countries.map((country) => {
                            return <Country name={country.name.common} />
                        })}

                        {/* <option value="Serbia">{countries[0].name.common}</option> */}

                    </select>
                </div>

            </form>
        </div>
    )
}

export default Order