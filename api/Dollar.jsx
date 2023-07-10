import React, { useEffect, useState } from 'react';
import CHF from "../components/CHF";
import JP from "../components/JP";
export default function Dollar() {
    const [rates, setRates] = useState({});

    useEffect(() => {
        fetch('https://api.exchangerate-api.com/v4/latest/USD')
            .then(response => response.json())
            .then(data => {
                setRates({
                    JPY: data.rates['JPY'],
                    GBP: data.rates['GBP'],
                    CHF: data.rates['CHF'],
                    SGD: data.rates['SGD'],
                });
            });
    }, []);

    return (
        <div className='flex items-center'>
            <div className='flex items-center'>
                {rates.JPY ? ` ${rates.JPY}` : 'Loading...'}
                <JP />
            </div>
            <div>
                {rates.CHF ? ` ${rates.CHF}` : 'Loading...'}
                <CHF />
            </div>
        </div>
    );
}