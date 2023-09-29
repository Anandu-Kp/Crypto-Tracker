import { toast } from "react-toastify";

export default function addToWatchlist(id) {

    if (!localStorage.getItem("watchlist")) localStorage.setItem("watchlist", JSON.stringify([]));

    let list = JSON.parse(localStorage.getItem("watchlist"));

    localStorage.setItem("watchlist", JSON.stringify([...list, id]));
    toast.success(
        `${id.slice(0, 1).toUpperCase() + id.slice(1)} - Added To The Watchlist!`
    );
}