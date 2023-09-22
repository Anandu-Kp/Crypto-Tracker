import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import SelectCoins from "../Components/Compare/SelectCoins";
import SelectDays from "../Components/Coin/SelectDays";
import Loader from "../Components/Common/Loader";
import getCoindata from "../Functions/getCoinData";
import compressObject from "../Functions/compressCoinObject";
import get100Coins from "../Functions/get100Coins";
import getCoinPrice from "../Functions/getCoinPrice";
import settingChartdata from "../Functions/settingChartData";
import LineChart from "../Components/Coin/LineChart";
import BackToTop from "../Components/Common/BackToTop";
import PriceToggleTypes from "../Components/Coin/Pricetypes";
import CoinInfo from "../Components/Coin/CoinInfo";





function Comparepage() {

    const [coin1, setCoin1] = useState("bitcoin");
    const [coin2, setCoin2] = useState("ethereum");
    const [allCoins, setAllCoins] = useState([]);
    const [coin1Data, setCoin1Data] = useState();
    const [coin2Data, setCoin2Data] = useState();
    const [days, setDays] = useState(30);
    const [isLoading, setIsLoading] = useState(true);
    const [priceType, setpriceType] = useState('prices');
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        setIsLoading(true)
        const myCoins = await get100Coins();
        if (myCoins) setAllCoins(myCoins);

        const data1 = await getCoindata(coin1);
        const data2 = await getCoindata(coin2);
        compressObject(data1, setCoin1Data)
        compressObject(data2, setCoin2Data)
        const prices1 = await getCoinPrice(coin1, days, priceType);
        const prices2 = await getCoinPrice(coin2, days, priceType);
        settingChartdata(setChartData, prices1, prices2, data1, data2);
        setIsLoading(false)


    }

    async function handleCoinChange(event, isCoin1) {
        setIsLoading(true)

        if (isCoin1) {

            setCoin1(event.target.value)
            const data = await getCoindata(event.target.value);
            compressObject(data, setCoin1Data)
            const prices1 = await getCoinPrice(coin1, days, priceType);
            const prices2 = await getCoinPrice(coin2, days, priceType);
            settingChartdata(setChartData, prices1, prices2, data, coin2Data);

        }
        else {

            setCoin2(event.target.value)
            const data = await getCoindata(event.target.value);
            compressObject(data, setCoin2Data)
            // console.log(data);
            const prices1 = await getCoinPrice(coin1, days, priceType);
            const prices2 = await getCoinPrice(coin2, days, priceType);
            settingChartdata(setChartData, prices1, prices2, coin1Data, data);

        }


        setIsLoading(false)

    }

    async function handleDaysChange(event) {
        setDays(event.target.value)

        const prices1 = await getCoinPrice(coin1, event.target.value, priceType);
        const prices2 = await getCoinPrice(coin2, event.target.value, priceType);
        settingChartdata(setChartData, prices1, prices2, coin1Data, coin2Data);
        console.log(event.target.value);
    }
    const handlePriceTypeChange = async (event, newType) => {
        setIsLoading(true);
        console.log(newType);
        setpriceType(newType);
        const prices1 = await getCoinPrice(coin1, days, newType);
        const prices2 = await getCoinPrice(coin2, days, newType);
        settingChartdata(setChartData, prices1, prices2, coin1Data, coin2Data);
        setIsLoading(false)
    };
    return (
        <div><Header />
            <BackToTop />
            <> {
                isLoading ? <Loader /> :
                    <div><div className=" select-flex">

                        <SelectCoins coin1={coin1} coin2={coin2} handleFunction={handleCoinChange} allCoins={allCoins} />
                        {/* pnot is to specify that , we dont need tha label for this particular situation */}
                        <SelectDays handleDaysChange={handleDaysChange} days={days} Pnot={"true"} />
                    </div>
                        <div className="grey-wrapper">
                            <PriceToggleTypes priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
                            < LineChart chartData={chartData} priceType={priceType} multiAxis={true} />
                        </div>
                    </div>


            }</>
            <CoinInfo name={coin1Data.name} desc={coin1Data.desc} />
            <CoinInfo name={coin2Data.name} desc={coin2Data.desc} />
        </div>
    )
}
export default Comparepage;