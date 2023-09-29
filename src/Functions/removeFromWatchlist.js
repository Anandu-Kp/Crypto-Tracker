import { toast } from "react-toastify";
import get100Coins from "./get100Coins";

export default async function removeFromWatchlist(id, setWatchlistCoins) {


    if (window.confirm("Are you sure you want to remove this coin")) {
        let list = JSON.parse(localStorage.getItem("watchlist"))
        list = list.filter((item) => item != id);

        localStorage.setItem("watchlist", JSON.stringify(list));

        toast.success(
            `${id.slice(0, 1).toUpperCase() + id.slice(1)} -Removed From The Watchlist!`
        );
        let myCoins = await get100Coins();
        const coins = JSON.parse(localStorage.getItem("watchlist"));

        setWatchlistCoins(myCoins.filter((item) => coins.includes(item.id)));
    }
    else {
        toast.error(
            `Couldn't Remove Item From The Watchlist!`
        );

    }

}