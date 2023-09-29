import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export default function TemporaryDrawer({ handleThemeChange, darkMode, MaterialUISwitch }) {
    const [open, setOpen] = React.useState(false)

    return (
        <div>

            <Button className='link' onClick={() => setOpen(true)}><MenuRoundedIcon /></Button>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className='drawer-menu'>
                    <Link className="link" to="/"><p>Home</p></Link>
                    <Link className="link" to="/compare"><p>Compare</p></Link>
                    <Link className="link" to="/watchlist"><p>Watchlist</p></Link>
                    <Link className="link" to="/dashboard"><p>Dashboard</p></Link>
                    <MaterialUISwitch checked={darkMode} onClick={() => handleThemeChange()} />
                </div>
            </Drawer>

        </div>
    );
}