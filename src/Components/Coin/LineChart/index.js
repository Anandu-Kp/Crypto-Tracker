import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import convertNumbers from "../../../Functions/convertNumber";

export default function LineChart({ chartData, priceType, multiAxis }) {
    const options = {
        plugins: {

            // if there is multiple lines
            legend: {
                display: multiAxis ? true : false,
            },
        },

        // to make it responsive
        responsive: true,

        //this actually help us to hover  
        interaction: {
            mode: "index",
            intersect: false,
        },
        scales: {
            y: {
                type: "linear",
                display: true,
                position: "left",
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        if (priceType === "prices") return '$' + value.toLocaleString()
                        else return '$' + convertNumbers(value);
                    }
                }
            },
            y2: multiAxis && {
                type: "linear",
                display: true,
                position: "right",
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        console.log("prices");
                        if (priceType === "prices") return '$' + value.toLocaleString()
                        else return '$' + convertNumbers(value);
                    }
                }
            },
        }

    };

    return <Line data={chartData} options={options} />;
}