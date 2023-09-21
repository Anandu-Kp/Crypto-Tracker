import axios from "axios";

export default function getCoinPrice(id, days, priceType) {
    const data = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        .then((response) => {

            return response.data[priceType];

        })
        .catch(function (err) {
            console.log(err);

        })
    return data;

}