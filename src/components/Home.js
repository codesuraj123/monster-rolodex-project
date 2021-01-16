import { Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import CardList from './Cardlist'
import Searchbox from './Searchbox';
import './style.css'

const Home = () => {
    const [monsterData, setMonsterData] = useState([]);
    const [searchField, setSearchField] = useState("");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(monsters => setMonsterData(monsters))
    }, [])
    const filteredData = monsterData.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    const handleChange = (e) => {
        return setSearchField(e.target.value)
    }

    return (
        <div className="App">
            <Paper className="search">
                <h1>The Monster Rolodex Project</h1>
                <Searchbox handleChange={handleChange} />
            </Paper>
            <CardList monsterData={filteredData} />
        </div>
    )
}

export default Home
