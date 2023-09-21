import axios from "axios";

export default function getCoindata(id) {
    const data = axios.get(` https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {

            return response.data;

        })
        .catch(function (err) {
            console.log(err);

        })
    return data;

}