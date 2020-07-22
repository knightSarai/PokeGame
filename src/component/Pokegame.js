import React, { Component } from 'react'

import Pokedex from './Pokedex'

import '../css/Pokegame.css'

export default class Pokegame extends Component {
    static defaultProps  = {
        pokemons: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapad', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    };
    calExp (hand) {
        return hand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
    }
    render() {
        let handOne = [];
        let handTwo =[ ...this.props.pokemons ];
        while (handOne.length < handTwo.length) {
            let randIndx = Math.floor(Math.random() * handTwo.length);
            let randPokemon = handTwo.splice(randIndx, 1)[0];
            handOne.push(randPokemon)
        }
        let expOne = this.calExp(handOne);
        let expTwo = this.calExp(handTwo);
        return (
            <div className="Pokegame">
                <h1 className="pokegame-title">Pokegame</h1>
                <Pokedex pokemons={handOne} exp={expOne} isWinner={expOne > expTwo}/>
                <Pokedex pokemons={handTwo} exp={expTwo} isWinner={expTwo > expOne}/>
            </div>
        )
    }
}
