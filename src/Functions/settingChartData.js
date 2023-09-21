import convertDate from "./convertDate"

export default function settingChartdata(setChartData, prices1, prices2) {
    if (prices2) {
        setChartData({
            labels: prices1.map((item) => convertDate(item[0])),
            datasets: [
                {

                    data: prices1.map((item) => item[1]),
                    borderWidth: 1,
                    fill: true,
                    tension: .25,


                    pointRadius: 0,
                    borderColor: "#61c96f",
                    yAxisID: 'Crypto1',

                },
                {

                    data: prices2.map((item) => item[1]),
                    borderWidth: 1,
                    fill: true,
                    tension: .25,

                    pointRadius: 0,
                    borderColor: "rgb(38, 123, 252)",
                    yAxisID: 'Crypto2',
                }
            ]
        }
        )

    }
    else {
        setChartData({
            labels: prices1.map((item) => convertDate(item[0])),
            datasets: [
                {

                    data: prices1.map((item) => item[1]),
                    borderWidth: 1,
                    fill: true,
                    tension: .25,


                    pointRadius: 0,
                    borderColor: "#61c96f",
                    yAxisID: 'Crypto1',

                },
            ]
        }
        )
    }

}