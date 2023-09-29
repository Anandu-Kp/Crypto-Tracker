import * as React from 'react';
import "./style.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';

import { IconButton } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import isAddedToWatchlst from '../../../Functions/isAddedToWatchlist';
import removeFromWatchlist from '../../../Functions/removeFromWatchlist';
import addToWatchlist from '../../../Functions/addToWatchlist';
import { useState } from 'react';
import { motion } from "framer-motion"

function GridComponent({ coin, i, setWatchlistCoins }) {
    // console.log(setIsRemoved);
    const [added, setAdded] = useState(isAddedToWatchlst(coin.id));
    console.log((i + 1) / 5);



    return (
        <Link to={`/coin/${coin.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: (i + 1) / 3 }}

                className={`grid-item ${coin.price_change_percentage_24h < 0 && "grid-item-red"}`} key={i}>
                <div className="grid-item-header">
                    <img className="coin-logo" src={coin.image} />
                    <div className="coin-info">
                        <p className="coin-symbol ">{coin.symbol}</p>
                        <p className="coin-name">{coin.name}</p>
                    </div>
                    <IconButton
                        onClick={(event) => {
                            event.preventDefault();
                            if (added) {
                                removeFromWatchlist(coin.id, setWatchlistCoins);
                                setAdded(false);
                            }
                            else {
                                addToWatchlist(coin.id);
                                setAdded(true)
                            }
                        }}
                    >
                        {added ?
                            <StarRoundedIcon
                                className={`star-border ${coin.price_change_percentage_24h < 0 && "star-border-red"}`}
                            /> :
                            <StarBorderRoundedIcon

                                className={`star-border ${coin.price_change_percentage_24h < 0 && "star-border-red"}`}

                            />}
                    </IconButton>
                </div>
                <div className='grid-main'>
                    {
                        coin.price_change_percentage_24h > 0 ?
                            <div className='chip-flex'>
                                <div className='chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                                <div className='chip-graph'><TrendingUpRoundedIcon /></div>
                            </div> :
                            <div className='chip-flex'>
                                <div className='chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                                <div className='chip-graph-red'><TrendingDownRoundedIcon /></div>
                            </div>
                    }
                    <div className={`coin-price ${coin.price_change_percentage_24h < 0 && "price-red"}`}>
                        <h3>${coin.current_price.toLocaleString()}</h3>
                    </div>

                    <div className='coin-data'>
                        <p className='total-volume'>Total Volume : ${coin.total_volume.toLocaleString()}</p>
                        <p className='total-volume'>Market cap : ${coin.total_volume.toLocaleString()}$</p>
                    </div>
                </div>

            </motion.div >
        </Link>
    );
}

export default GridComponent