import React, { Component } from 'react'

import Pokecard from './Pokecard'

import '../css/Pokedex.css'

export default class Pokedex extends Component {
    render() {
        const props = this.props
        return (
            <div className="Pokedex">
                <div className="game-result">
                    <h1 className="hand-total">Total: {props.exp}</h1>
                    <h2 className={props.isWinner ? "is-winner" : "is-loser"}>{props.isWinner ? "WINNER" : "LOSER"}</h2>
                </div>               
                <div className="Pokedex-cards">
                    {props.pokemons.map(p => <Pokecard id={p.id} name={p.name} type= {p.type} exp={p.base_experience}/>)}
                </div>
            </div> 
        )
    }
}
