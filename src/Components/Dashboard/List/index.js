import * as React from 'react';
import "./style.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import Tooltip from '@mui/material/Tooltip';
import convertNumbers from "../../../Functions/convertNumber"
import { Link } from 'react-router-dom';

function ListComponent({ coin, key }) {




    return (
        <Link to={`/coin/${coin.id}`}>
            <tr className='tableRow'>
                <Tooltip title="Coin Logo">
                    <td className="grid-item-header td-grid-logo">
                        <img className="coin-logo td-coin-logo" src={coin.image} />
                    </td>
                </Tooltip>
                <Tooltip title="Coin info" placement="bottom-start">
                    <td>
                        <div className="coin-info">
                            <p className="coin-symbol responsive-font-size ">{coin.symbol}</p>
                            <p className="coin-name responsive-font-size">{coin.name}</p>
                        </div>
                    </td>
                </Tooltip>

                <Tooltip title="Coin Price In Last 24 Hrs" placement="bottom-start">
                    {
                        coin.price_change_percentage_24h > 0 ?

                            <td className='chip-flex td-chip-flex'>
                                <div className='chip responsive-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                                <div className='chip-graph td-chip-graph'><TrendingUpRoundedIcon /></div>
                            </td> :
                            <td className='chip-flex'>
                                <div className='chip-red responsive-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                                <div className='chip-graph-red td-chip-graph'><TrendingUpRoundedIcon /></div>
                            </td>

                    }
                </Tooltip>
                <Tooltip title="Coin Price " placement="bottom-start">
                    <td className={`coin-price ${coin.price_change_percentage_24h < 0 && "price-red"}`}>
                        <p className='td-coin-price responsive-font-size'>${coin.current_price.toLocaleString()}</p>
                    </td>
                </Tooltip>
                <Tooltip title="Total Volume ">
                    <td className='total-volume'>
                        <p className='desktop-total-volume td-total-volume responsive-font-size'>${coin.total_volume.toLocaleString()}</p>
                        <p className='mobile-total-volume td-total-volume responsive-font-size'>${convertNumbers(coin.total_volume)}</p>
                    </td>


                </Tooltip>
                <Tooltip title="Market Cap ">
                    <td className='marcket-cap'>
                        <p className='total-volume td-total-volume responsive-font-size '>${coin.total_volume.toLocaleString()}</p>
                    </td>
                </Tooltip>

            </tr>
        </Link>
    );
}

export default ListComponent;