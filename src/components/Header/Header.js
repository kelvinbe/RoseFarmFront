import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { IconButton, MenuItem, Toolbar, Badge,  } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


import "./Header.css";
import Drawer from "@mui/material/Drawer";
import { ShoppingCart } from "@mui/icons-material";

const Header = ({ totalItems}) => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;
  const locationn = useLocation();
 let loc = locationn.pathname

 console.log('totalItems', totalItems)

  const iconss = (<>{loc === '/buy' ? <IconButton aria-label="Show cart items" color='inherit'>
    
    <Badge badgeContent={totalItems} color='secondary'>
    <ShoppingCart />
    </Badge>
  </IconButton>: null}</>)

  const headersData = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Farm Produce",
      href: "/buy",
    },
    {
      label: "Checkout",
      href: "/checkout",
    },
    {
      label: iconss,
      href: "/cart",
    },
  ];

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: "menuButton",
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "red",
            style: { textDecoration: "none", color: "black" },
            key: label,
          }}
        >
          <MenuItem
            {...{
              color: "red",
            }}
          >
            {label}
          </MenuItem>
        </Link>
      );
    });
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
            color: "#d6bbbb",
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>
        <div style={{display: 'flex', justifyContent: 'center'}}>
         <h4 style={{color: 'black'}}>RoseFarm</h4>
         <span>
         <IconButton component={Link} to='/cart' aria-label="Show cart items" color='inherit' style={{marginTop: 10}}>
    
    <Badge  badgeContent={totalItems} color='secondary'>
    <ShoppingCart />
    </Badge>
  </IconButton>
  </span>
          </div>
      </Toolbar>
    );
  };

  const displayDesktop = () => {
    return (
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
         <div>
         <h4 style={{color: 'black !important'}}>RoseFarm</h4>
          </div>
          <div>
        {getMenuButtons()}
        </div>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar>{mobileView ? displayMobile() : displayDesktop()}</AppBar>
    </header>
  );
}


export default Header
