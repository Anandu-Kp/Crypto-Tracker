import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from "@mui/material";
import "./style.css"
import GridComponent from "../Grid"
import ListComponent from '../List';

function TabComponent({ coins, setWatchlistCoins }) {
    // console.log(setIsRemoved);
    const [value, setValue] = React.useState('grid');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: "#3a80e9",
            },
        },
    });

    const style = {
        color: "var(--white)",
        width: "50vw",
        fontWeight: 600,
        fontFamily: "Inter",
        textTransform: "capitalize",
    };


    return (
        <div >
            <ThemeProvider theme={theme}>
                <TabContext value={value}>
                    <div >
                        <TabList onChange={handleChange} variant="fullWidth">
                            <Tab label="Grid" value="grid" sx={style} />
                            <Tab label="List" value="list" sx={style} />
                        </TabList>
                    </div>
                    <TabPanel value="grid">
                        <div className="grid-container">
                            {coins.map((coin, i) => {
                                return (<GridComponent coin={coin} i={i} setWatchlistCoins={setWatchlistCoins} />)
                            })}
                        </div>
                    </TabPanel>
                    <TabPanel value="list">
                        <table className='table-container'>
                            {coins.map((coin, id) =>

                                (<ListComponent coin={coin} i={id} setWatchlistCoins={setWatchlistCoins} />)
                            )}
                        </table></TabPanel>
                </TabContext>
            </ThemeProvider>
        </div>
    );
}

export default TabComponent;