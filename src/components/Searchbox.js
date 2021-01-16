import { TextField } from '@material-ui/core'
import React from 'react'

const Searchbox = ({ handleChange }) => {
    return (
        <div>
            <TextField
                id="monster-id"
                label="Search Monster"
                type="search"
                variant="outlined"
                onChange={handleChange} />
        </div>
    )
}

export default Searchbox
