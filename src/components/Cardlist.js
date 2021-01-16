import React from 'react'
import Card from './Card'
import './style.css'

const CardList = (props) => {
    console.log(props)
    return (
        <div className="card-list">
            {props.monsterData.map(monster => <Card key={monster.id} monster={monster} />)}
        </div>
    )
}

export default CardList
