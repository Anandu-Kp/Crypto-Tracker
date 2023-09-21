
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./style.css"
import { useState } from 'react';

export default function SelectDays({ handleDaysChange, days, Pnot }) {


    return (
        <div className='select-days' >

            {!Pnot && <p>Price Change in the last</p>}
            <Select
                sx={{
                    height: "2.5rem",
                    color: "var(--white)",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--white)",
                    },
                    "& .MuiSvgIcon-root": {
                        color: "var(--white)",
                    },
                    "&:hover": {
                        "&& fieldset": {
                            borderColor: "#3a80e9",
                        },
                    },
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={days}
                label="Day"
                onChange={handleDaysChange}
            >
                <MenuItem value={7}>7 Days</MenuItem>
                <MenuItem value={30}>30 Days</MenuItem>
                <MenuItem value={60}>60 Days</MenuItem>
                <MenuItem value={120}>120 Days</MenuItem>
                <MenuItem value={365}>1 Year</MenuItem>
            </Select>

        </div>
    );
}