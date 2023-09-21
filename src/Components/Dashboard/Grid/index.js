import * as React from 'react';
import "./style.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';

function GridComponent({ coin, i }) {




    return (
        <Link to={`/coin/${coin.id}`}>
            <div className={`grid-item ${coin.price_change_percentage_24h < 0 && "grid-item-red"}`} key={i}>
                <div className="grid-item-header">
                    <img className="coin-logo" src={coin.image} />
                    <div className="coin-info">
                        <p className="coin-symbol ">{coin.symbol}</p>
                        <p className="coin-name">{coin.name}</p>
                    </div>
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
                                <div className='chip-graph-red'><TrendingUpRoundedIcon /></div>
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

            </div >
        </Link>
    );
}

export default GridComponent