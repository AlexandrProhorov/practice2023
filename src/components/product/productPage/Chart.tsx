import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false,
                type: "number",
            },
        },
        y: {
            grid: {
                display: false,
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

const labels = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
];

const ItemChart = (props: any) => {
    const ctx1 = {
        labels,
        datasets: [
            {
                data: labels.map(() =>
                    faker.number.int({ min: props.minCost, max: props.maxCost })
                ),
                borderColor: "orange",
                backgroundColor: "white",
            },
        ],
    };
    return <Line options={options} data={ctx1} />;
};

export default ItemChart;
