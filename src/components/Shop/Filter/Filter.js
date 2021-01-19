import React from 'react'
import { useHistory } from 'react-router-dom'

const Filter = ({ brands, brandParam }) => {
    let history = useHistory()

    const handleFilter = (value) => {
        history.push(`/shop/${value || 'cars'}`)
    }

    return (
        <div>
            <div>
                <h3>Car brand</h3>
                <select onChange={(e) => handleFilter(e.target.value)} value={brandParam}>
                    <option value=''>Show all cars</option>
                    {brands && brands.map(item => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
            </div>

            <div>

            </div>

        </div>
    )
}

export default Filter