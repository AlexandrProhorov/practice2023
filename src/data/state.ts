interface Product {
    id: number;
    name: string;
    cost: string;
    description: string;
}

interface State {
    products: Product[];
}

let state: State = {
    products: [
        { id: 0, name: 'Stol', cost: '80$', description: "blablabla this is chair" },
        { id: 1, name: 'Stul', cost: '80$', description: "blablabla this is chair" },
        { id: 2, name: 'Shkaf', cost: '80$', description: "blablabla this is chair" },
        { id: 3, name: 'Komod', cost: '80$', description: "blablabla this is chair" },
        { id: 4, name: 'Lustra', cost: '80$', description: "blablabla this is chair" },
        { id: 5, name: 'Krovat', cost: '80$', description: "blablabla this is chair" },
        { id: 6, name: 'Kruzhka', cost: '80$', description: "blablabla this is chair" },
        { id: 7, name: 'Koshka', cost: '80$', description: "blablabla this is chair" },
        { id: 8, name: 'Sobaka', cost: '80$', description: "blablabla this is chair" },
        { id: 9, name: 'Begemot', cost: '80$', description: "blablabla this is chair" },
        { id: 10, name: 'DDd', cost: '80$', description: "blablabla this is chair" },
        { id: 11, name: 'Privet', cost: '80$', description: "blablabla this is chair" },
        { id: 12, name: 'Dom', cost: '80$', description: "blablabla this is chair" },
    ]
};
export default state;