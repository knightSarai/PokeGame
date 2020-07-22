import React, { Component } from 'react'

import '../css/Pokecard.css'

const POKE_API = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/'


export default class Pokecard extends Component { 
    idFix (id, lengthNum) {
        let strid =`${id}`;
        let lenNum = lengthNum;
        while(strid.length < lenNum) {
            strid = `0${strid}`
        }
        return strid
    }

    render() {
        const props = this.props;
        let id = this.idFix(props.id, 3);
        let imgSrc = `${POKE_API}${id}.png`
        return (
            <div className="Pokecard">
                <h1 className="pokecard-name">{props.name}</h1>
                <div className="pokecard-img">
                    <img  className="pokecard-img" src={imgSrc} alt={props.name} srcset=""/>
                </div>
                <div className="pokecard-info">Type: {props.type}</div>
                <div className="pokecard-info">EXP: {props.exp}</div>
            </div>
        )
    }
}
