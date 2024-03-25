import {Pokemon} from "./Pokemon.tsx";
import React from "react";

interface TypeIcons {
    [key: string]: string;
}

// Définir la correspondance entre les nom de types et les chemins d'accès au icônes
const typeIcons: TypeIcons = {
    "bug": "src/assets/Pokemon_Type_Icon_Bug.svg",
    "dark": "src/assets/Pokemon_Type_Icon_Dark.svg",
    "water": "src/assets/Pokemon_Type_Icon_Water.svg",
    "dragon": "src/assets/Pokemon_Type_Icon_Dragon.svg",
    "electric": "src/assets/Pokemon_Type_Icon_Electric.svg",
    "fairy": "src/assets/Pokemon_Type_Icon_Fairy.svg",
    "fighting": "src/assets/Pokemon_Type_Icon_Fighting.svg",
    "fire": "src/assets/Pokemon_Type_Icon_Fire.svg",
    "flying": "src/assets/Pokemon_Type_Icon_Flying.svg",
    "ghost": "src/assets/Pokemon_Type_Icon_Ghost.svg",
    "grass": "src/assets/Pokemon_Type_Icon_Grass.svg",
    "ground": "src/assets/Pokemon_Type_Icon_Fighting.svg",
    "ice": "src/assets/Pokemon_Type_Icon_Ice.svg",
    "normal": "src/assets/Pokemon_Type_Icon_Normal.svg",
    "poison": "src/assets/Pokemon_Type_Icon_Poison.svg",
    "psychic": "src/assets/Pokemon_Type_Icon_Psychic.svg",
    "rock": "src/assets/Pokemon_Type_Icon_Rock.svg",
    "steel": "src/assets/Pokemon_Type_Icon_Steel.svg",
};
interface Props {
    pokemons: Pokemon[]
}

// Passage de l'interface Props dans PokemonCollection()
const PokemonCollection: React.FC<Props> = ({pokemons}) => {
    return (
        <>
            <section>
                <div className="poke-card-container">
                {pokemons.map((pokemon) => (
                    <div className="poke-card" key={pokemon.id}>
                        <div className="sprite-and-name">
                            <p className="name-pokemon">{pokemon.name}</p>
                            <img className="sprite-pokemon" src={pokemon.sprites.front_default} alt={pokemon.name} />
                        </div>
                        <div className="types-pokemon">
                        {pokemon.types.map((type, index) =>(
                            <img className="type-pokemon" key={index} src={typeIcons[type.type.name]} alt={type.type.name} />
                        ))}
                        </div>
                        <div className="poke-card-buttons">
                            <button className="poke-card-button" onClick={() => console.log("Afficher les stats")}>Stats</button>
                            <button className="poke-card-button" onClick={() => console.log("Afficher les évolutions")}>Évolutions</button>
                        </div>
                        {/*<div className="stats-pokemon">
                           {pokemon.stats.map((stat, index) => (
                               <p key={index}>{stat.stat.name} : {stat.base_stat}</p>
                           ))}
                       </div>*/}
                    </div>
                ))}
                </div>
            </section>
        </>
    )
}

export default PokemonCollection