import h1 from "./../static/img/h1.jpg"
import h2 from "./../static/img/h2.jpg"
import h3 from "./../static/img/h3.jpg"
import h4 from "./../static/img/h4.jpg"
import h5 from "./../static/img/h5.jpg"

interface Product {
    id: number;
    name: string;
    cost: string;
    description: string;
    image: string;
}

interface State {
    products: Product[];
}

let state: State = {
    products: [
        { id: 0, name: 'Хлеб Ароматный', cost: '37', description: "blablabla this is chair", image:h1},
        { id: 1, name: 'Хлеб Советский', cost: '36', description: "blablabla this is chair", image:h2},
        { id: 2, name: 'Хлеб Третьяковский', cost: '36', description: "blablabla this is chair", image:h3},
        { id: 3, name: 'Хлеб Дарницкий', cost: '32', description: "blablabla this is chair", image:h4},
        { id: 4, name: 'Хлеб Бородинский', cost: '33', description: "blablabla this is chair", image:h5},
        { id: 5, name: 'Хлеб', cost: '35', description: "blablabla this is chair", image:h1 },
        { id: 6, name: 'Хлеб', cost: '25', description: "blablabla this is chair", image:h1 },
        { id: 7, name: 'Хлеб', cost: '26', description: "blablabla this is chair", image:h1 },
        { id: 8, name: 'Хлеб', cost: '29', description: "blablabla this is chair", image:h1 },
        { id: 9, name: 'Хлеб', cost: '42', description: "blablabla this is chair", image:h1 },
        { id: 10, name: 'Хлеб', cost: '34', description: "blablabla this is chair", image:h1 },
        { id: 11, name: 'Хлеб', cost: '21', description: "blablabla this is chair", image:h1 },
    ]
};
export default state;