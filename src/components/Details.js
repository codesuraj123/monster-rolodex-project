import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import URLSearchParams from "url-search-params";
import './style.css'

const Details = () => {
    let history = useHistory()
    const [details, setdetails] = useState([])
    const getUrlParams = (location) => {
        const searchParams = new URLSearchParams(location.search)
        const ScreenId = Number(searchParams.get("monsterid"))
        console.log(ScreenId)
        return { ScreenId }
    }

    const { ScreenId } = getUrlParams(window.location)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${ScreenId}`)
            .then(response => response.json())
            .then(details => setdetails(details))
    }, [ScreenId])

    return (
        <div className="App">

            <h2>Hi, {details.name}</h2>            <img alt="monster" src={`https://robohash.org/${details.id}?set=set2&size=180x180`} />
            <h3>UserName : {details.username}</h3>
            <h3>Contact Details - </h3>
            <h4>Phone: {details.phone}</h4>
            <h4>Email: {details.email}</h4>
            <h4>Website: {details.website}</h4>
            <Button color="primary" variant="outlined" onClick={() => history.push("/")}> Back To Main Screen </Button>
        </div>
    )
}

export default Details
