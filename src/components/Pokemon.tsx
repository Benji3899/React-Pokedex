// typage du chaque pokemon (id, nom, sprit, types)

export interface Pokemon{
    id: number;
    name: string;
    // typage d'objet
    sprites: {
        front_default: string
    };

    // typage tableau avec un objet
    types: {
        type: {
            name: string
        };
    }[];
    stats:{
        base_stat: number
        stat: {
            name: string
        };
    }[];
}
