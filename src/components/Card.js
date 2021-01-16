import React from 'react'
import "./style.css"
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import setUrlParams from "../_helpers/index"

const Card = (props) => {
    let history = useHistory()
    const details = "/details"
    return (
        <Grid container className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <h3>{props.monster.name}</h3>
            <Button variant="contained" color="primary" onClick={() => history.push(`${details}?${setUrlParams({ monsterid: props.monster.id })}`)}>Details</Button>
        </Grid>

    )
}

export default Card
