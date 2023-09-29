function isAddedToWatchlst(id) {
    if (localStorage.getItem("watchlist")) {

        let watchlist = JSON.parse(localStorage.getItem("watchlist"));
        // console.log(watchlist.includes(id));
        if (watchlist.includes(id)) return true;
        // console.log(localStorage.getItem("watchlist"));
    }
    return false;


}
export default isAddedToWatchlst;