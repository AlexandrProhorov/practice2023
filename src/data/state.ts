import h1 from "./../static/img/h1.jpg";
import h2 from "./../static/img/h2.jpg";
import h3 from "./../static/img/h3.jpg";
import h4 from "./../static/img/h4.jpg";
import h5 from "./../static/img/h5.jpg";

interface Product {
    id: number;
    name: string;
    cost: string;
    description: string;
    image: string;
    image2: string;
    about: string;
}

interface State {
    products: Product[];
}

let s: string;
s = "очень вкусный хлеб с отрубями";

let state: State = {
    products: [
        {
            id: 0,
            name: "Хлеб Ароматный",
            cost: "37",
            description:
                "Батон Ароматный классика. Сухое молоко в составе придает батону нежный молочный вкус и аромат. Батон Ароматный прекрасно дополнит чаепитие в качестве основы для бутерброда или самостоятельного лакомства.",
            image: h1,
            image2: h2,
            about: "Пищевая ценность на 100 г продукта Белки 8,0 г Жиры 4,5 г Углеводы 50,0 г Энергетическая ценность 270ккал/1130кДж Масса нетто 0,35 кг Срок хранения 50 часов",
        },
        {
            id: 1,
            name: "Хлеб Советский",
            cost: "36",
            description: "blablabla this is chair",
            image: h2,
            image2: h2,
            about: s,
        },
        {
            id: 2,
            name: "Хлеб Третьяковский",
            cost: "36",
            description: "blablabla this is chair",
            image: h3,
            image2: h2,
            about: s,
        },
        {
            id: 3,
            name: "Хлеб Дарницкий",
            cost: "32",
            description: "blablabla this is chair",
            image: h4,
            image2: h2,
            about: s,
        },
        {
            id: 4,
            name: "Хлеб Бородинский",
            cost: "33",
            description: "blablabla this is chair",
            image: h5,
            image2: h2,
            about: s,
        },
        {
            id: 5,
            name: "Хлеб",
            cost: "35",
            description: "blablabla this is chair",
            image: h1,
            image2: h2,
            about: s,
        },
        {
            id: 6,
            name: "Хлеб",
            cost: "25",
            description: "blablabla this is chair",
            image: h1,
            image2: h2,
            about: s,
        },
        {
            id: 7,
            name: "Хлеб",
            cost: "26",
            description: "blablabla this is chair",
            image: h1,
            image2: h2,
            about: s,
        },
        {
            id: 8,
            name: "Хлеб",
            cost: "29",
            description: "blablabla this is chair",
            image: h1,
            image2: h2,
            about: s,
        },
        {
            id: 9,
            name: "Хлеб",
            cost: "42",
            description: "blablabla this is chair",
            image: h1,
            image2: h2,
            about: s,
        },
        {
            id: 10,
            name: "Хлеб",
            cost: "34",
            description: "blablabla this is chair",
            image: h1,
            image2: h2,
            about: s,
        },
        {
            id: 11,
            name: "Хлеб",
            cost: "21",
            description: "blablabla this is chair",
            image: h1,
            image2: h2,
            about: s,
        },
    ],
};
export default state;
