import { ShoppingCartIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/solid";
import {
  Badge,
  Collapse,
  Fade,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setIsOpen } from "../redux/slices/cartSlice";

function Header() {
  const [checked, setChecked] = React.useState(false);
  const { quantity } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleChecked = React.useCallback(() => {
    setChecked((p) => !p);
  }, []);
  return (
    <>
      <header className="fixed w-full top-0 px-8 py-4 bg-white z-30 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center ">
          <h1 className="text-4xl">
            <Link to="/">Logo</Link>
          </h1>
          <ul className=" items-center hidden md:flex space-x-5 text-sm font-medium">
            <li className="hover:text-gray-700">
              <Link to="/">A propos de nous</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link to="/buy">Produit</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link to="/destination">Destination</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link to="/">Services</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            {location.pathname !== "/" && (
              <Badge
                onClick={() => dispatch(setIsOpen(true))}
                badgeContent={quantity}
                className="!cursor-pointer"
                color="success">
                <ShoppingCartIcon className="h-7 text-gray-600 " />
              </Badge>
            )}
            <MenuIcon
              onClick={handleChecked}
              className="h-6 md:hidden text-gray-600 cursor-pointer "
            />
          </div>
        </div>
        <Collapse in={checked} mountOnEnter unmountOnExit>
          <ListItem className="flex flex-col text-sm  font-medium">
            <ListItemButton
              component={Link}
              to="/"
              selected={location.pathname === "/"}
              className="hover:!text-gray-700 !w-full ">
              <ListItemText primary="A propos de nous" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/buy"
              selected={location.pathname === "/buy"}
              className="hover:text-gray-700 !w-full">
              <ListItemText primary="Produit" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/destination"
              selected={location.pathname === "/destination"}
              className="hover:text-gray-700 !w-full">
              <ListItemText primary="Destination" />
            </ListItemButton>
            <ListItemButton className="hover:text-gray-700 !w-full">
              <Link to="/">
                <ListItemText primary="Services" />
              </Link>
            </ListItemButton>
            <ListItemButton className="hover:text-gray-700 !w-full">
              <Link to="/">
                <ListItemText primary="Contact" />
              </Link>
            </ListItemButton>
          </ListItem>
        </Collapse>
      </header>
      <Fade in={checked}>
        <div
          onClick={() => setChecked(false)}
          className="fixed inset-0 z-20 transition-all duration-300 bg-black bg-opacity-25 backdrop-blur-sm"
        />
      </Fade>
    </>
  );
}

export default Header;
