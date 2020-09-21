import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import "../styles/Header.css"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import KagneIMG from "../images/mylogowcolor.png"
import { Drawer } from '@material-ui/core';
import CoolDrawer from "./CoolDrawer"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1
    },
  }));
  

function MaterialHeader() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <CoolDrawer/>
                    <Typography variant="h6" className={classes.title}>
                    
                    </Typography>
                    <Link to="/"><img src={KagneIMG} className="header__img" /></Link>
                </Toolbar>
            </AppBar>

           
        </div>
    )
}

export default MaterialHeader;
