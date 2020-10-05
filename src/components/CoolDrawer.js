import React from 'react';
import { Link } from "react-router-dom"
import "../styles/Drawer.css"

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import WorkIcon from '@material-ui/icons/Work';
import PrintIcon from '@material-ui/icons/Print';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import FavoriteIcon from '@material-ui/icons/Favorite';




const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

function CoolDrawer() {
    const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {['Resume', 'Projects', 'Contact Me'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <PrintIcon /> : <WorkIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem> */}
        <div className="drawer-links">
        <Link to="/resume">
          <PrintIcon style={{ marginRight: "10px"}} />
          <a>Resume</a>
        </Link>

        <Link to="/projects">
          <WorkIcon style={{ marginRight: "10px"}}/>
          <a>Projects</a>
        </Link>

        <Link to="/contact">
          <MailIcon style={{ marginRight: "10px"}}/>
          <a>Get In Touch </a>
        </Link>

        <Link className="get-to-know" to="/login">
          <a>Get to know me</a>
          <FavoriteIcon style={{ marginRight: "10px"}}/>
        </Link>
        </div>

        
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
                  <IconButton onClick={toggleDrawer(anchor, true)} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    )
}

export default CoolDrawer;
