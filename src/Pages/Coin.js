import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import { useParams } from "react-router-dom";
import compressObject from "../Functions/compressCoinObject";
import ListComponent from "../Components/Dashboard/List";
import Loader from "../Components/Common/Loader";
import CoinInfo from "../Components/Coin/CoinInfo";
import getCoindata from "../Functions/getCoinData";
import getCoinPrice from "../Functions/getCoinPrice";
import LineChart from "../Components/Coin/LineChart";
import convertDate from "../Functions/convertDate";
import SelectDays from "../Components/Coin/SelectDays";
import settingChartdata from "../Functions/settingChartData";
import PriceToggleTypes from "../Components/Coin/Pricetypes";


function CoinPage() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coin, setCoin] = useState();
    const [days, setDays] = useState(30);
    const [chartData, setChartData] = useState({});
    const [priceType, setpriceType] = useState('prices');



    useEffect(() => {
        if (id) {
            getData();
        }

    }, [id])

    async function getData() {

        const data = await getCoindata(id)
        compressObject(data, setCoin);
        if (data) {

            const prices = await getCoinPrice(id, days, priceType)

            if (prices) {


                console.log(prices);
                setChartData({
                    labels: prices.map((item) => convertDate(item[0])),
                    datasets: [
                        {

                            data: prices.map((item) => item[1]),
                            borderWidth: 1,
                            fill: true,
                            tension: .25,
                            backgroundColor: "rgba(58, 128, 233,0.1)",

                            pointRadius: 1,
                            borderColor: "rgb(38, 123, 252)",

                        }]
                }
                )
                setIsLoading(false)
            }
        }

    }
    const handleDaysChange = async (event) => {
        setIsLoading(true);
        setDays(event.target.value);

        const prices = await getCoinPrice(id, event.target.value, priceType)
        if (prices) {
            console.log(prices);
            settingChartdata(setChartData, prices, coin);
            setIsLoading(false)
        }

    };


    const handlePriceTypeChange = async (event, newType) => {
        setIsLoading(true);
        console.log(newType);
        setpriceType(newType);
        const prices = await getCoinPrice(id, days, newType)
        if (prices) {
            settingChartdata(setChartData, prices, coin);
            setIsLoading(false)
        }
    };


    return (
        <div>
            <Header />
            {coin && <> {
                isLoading ? <Loader /> :
                    <div>
                        <div className="grey-wrapper" style={{ padding: "0rem 1.5rem" }}>
                            <ListComponent coin={coin} />

                        </div>
                        <div className="grey-wrapper">
                            <SelectDays handleDaysChange={handleDaysChange} days={days} />
                            <PriceToggleTypes priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
                            < LineChart chartData={chartData} priceType={priceType} />
                        </div>
                        <CoinInfo name={coin.name} desc={coin.desc} />
                    </div>
            }</>

            }


        </div>
    )
}
export default CoinPage;