import React, { useState, useEffect } from "react";
import get100Coins from "../Functions/get100Coins";
import Header from "../Components/Common/Header";
import { Link } from "react-router-dom";
import Button from "../Components/Common/Button";
import BackToTop from "../Components/Common/BackToTop";
import Loader from "../Components/Common/Loader";
import TabComponent from "../Components/Dashboard/Tabs";

function WatchlistPage() {
    const coins = JSON.parse(localStorage.getItem("watchlist"));

    const [isLoading, setIsLoading] = useState(false);
    const [watchlistCoins, setWatchlistCoins] = useState([]);
    const [isRemoved, setIsRemoved] = useState(false)

    async function filterCoins() {
        setIsLoading(true);
        let myCoins = await get100Coins();
        if (myCoins) {
            setWatchlistCoins(myCoins.filter((item) => coins.includes(item.id)));

        }
        setIsLoading(false)
    }
    useEffect(() => {
        filterCoins();
    }, [])


    // return (
    //     <>
    //         <Header />
    //         <BackToTop />
    //         {isLoading ? <Loader /> : (localStorage.getItem("watchlist") ? <div >


    //             <TabComponent coins={watchlistCoins} />


    //         </div> :
    //             <div>
    //                 <h3>No items on watchlist</h3>
    //                 <Link className="link" to="/dashboard">
    //                     <Button text={"Dashborad"} outlined={false} onClick={(e) => console.log("button clicked")} />
    //                 </Link>
    //             </div>
    //         )
    //         }
    //         {/* <Footer /> */}
    //     </>
    // )
    return (
        <div>
            {isLoading || !coins ? (
                <Loader />
            ) : (
                <div style={{ minHeight: "90vh" }}>
                    {watchlistCoins?.length == 0 || !coins ? (
                        <div>
                            <Header />
                            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                                No Items in the Watchlist
                            </h1>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <a href="/dashboard">
                                    <Button text={"Dashboard"} />
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div style={{ height: "95vh" }}>
                            <Header />
                            <TabComponent coins={watchlistCoins} setWatchlistCoins={setWatchlistCoins} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );

}

export default WatchlistPage;