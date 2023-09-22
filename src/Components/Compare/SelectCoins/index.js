import React, { useEffect, useState } from "react"
import "./style.css"
import get100Coins from "../../../Functions/get100Coins";
import { MenuItem, Select } from "@mui/material";

export default function SelectCoins({ coin1, coin2, handleFunction, allCoins }) {






    return (
        <div className="compare-flex">
            <p>Select Crypto 1</p>
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


                value={coin1}
                label="coin 1"
                onChange={(event) => handleFunction(event, true)}
            >

                {allCoins.filter((coin) => coin.id != coin2).map((item, i) => <MenuItem key={i} value={item.id}>{item.name}</MenuItem>)}

            </Select>
            <p>Select Crypto 2</p>
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


                value={coin2}
                label="coin 2"
                onChange={(event) => handleFunction(event, false)}
            >

                {allCoins.filter((coin) => coin.id != coin1).map((item, i) => <MenuItem key={i} value={item.id}>{item.name}</MenuItem>)}

            </Select>

        </div >
    )

}