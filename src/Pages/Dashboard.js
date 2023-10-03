import React, { useState, useEffect } from "react";
import Header from "../Components/Common/Header";
import TabComponent from "../Components/Dashboard/Tabs/"
import Search from "../Components/Dashboard/Search";
import axios from 'axios';
import PaginationComponent from "../Components/Dashboard/PaginationComponent";
import Loader from "../Components/Common/Loader";
import BackToTop from "../Components/Common/BackToTop";
import get100Coins from "../Functions/get100Coins";
import Footer from "../Components/Common/Footer";




function Dashboardpage() {

    const [coins, setCoins] = useState([]);
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = React.useState(1);
    const [isLoading, setIsLoading] = useState(true);


    const handleChange = (event, value) => {
        setPage(value);
        let startingIndex = (value - 1) * 10;
        setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10))
    };

    var filteredCoins = coins.filter((item) => (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.symbol.toLowerCase().includes(search.toLowerCase())
    ))

    useEffect(() => {
        getData();

    }, [])

    async function getData() {
        const myCoins = await get100Coins();
        if (myCoins) {
            setPaginatedCoins(myCoins.slice(0, 10))
            setCoins(myCoins)
            setIsLoading(false)
        }
    }

    return (
        <>
            <Header />
            <BackToTop />
            {isLoading ? <Loader /> : <div >

                <Search search={search} onSearchChange={setSearch} />
                <TabComponent coins={search == "" ? paginatedCoins : filteredCoins} />
                {!search && <PaginationComponent page={page} handleChange={handleChange} />}
            </div>}
            <Footer />
        </>
    )
}
export default Dashboardpage;