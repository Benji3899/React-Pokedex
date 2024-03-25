import axios from "axios";
import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection.tsx";
import {Pokemon} from "./Pokemon.tsx";

// Définition du composant DataTable en tant que fonction React
const DataTable: React.FC = () => {
    // useState<Pokemon[]> => on dit que la variable pokemon est un tableau avec un objet de type Pokemon
    // Déclaration d'un état local pour stocker les données des Pokémon
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    // Utilisation de useEffect pour effectuer une action asynchrone lors du chargement initial du composant
    useEffect(() => {
        // Fonction asynchrone pour récupérer les données des Pokémon depuis l'API
        const getPokemon = async () => {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=8&offset=0");

            // Initialisation d'un tableau pour stocker les Pokémon uniques
            const uniquePokemons: Pokemon[]=[];

            // Utilisation de Promise.all pour effectuer plusieurs requêtes en parallèle
            await Promise.all(res.data.results.map(async (pokemon: any)=>{
                const pokeRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const pokeData: Pokemon = pokeRes.data;

                // Vérification si le Pokémon n'existe pas déjà dans la liste
                if (!pokemons.find(p => p.id === pokeData.id)) {
                    uniquePokemons.push(pokeData);
                }
            }));
            // Mise à jour de l'état des Pokémon avec les nouveaux Pokémon uniques
            setPokemons((p) => [...p, ...uniquePokemons]);
        }
        // Appel de la fonction pour récupérer les Pokémon au chargement initial
        getPokemon()
    }, []); // Le tableau vide comme deuxième argument signifie que cette fonction ne s'exécute qu'une seule fois au chargement initial

    // Rendu du composant DataTable
    return(
        <div>
            <h1 className="title-site">Pokedex API</h1>
            <PokemonCollection pokemons={pokemons}/>
        </div>
    )
}

export default DataTable