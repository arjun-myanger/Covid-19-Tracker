import React from 'react'
import './Tables.css';
import numeral from 'numeral';

function Tables({ countries }) {
    return (
        <div className='tables'>
            {countries.map(({ country, cases }) => (
                <tr>
                    <td>
                        {country}
                    </td>
                    <td>
                        <strong>{numeral(cases).format('0,0')}</strong>
                    </td>
                </tr>
            ))}
        </div>
    )
}

export default Tables
