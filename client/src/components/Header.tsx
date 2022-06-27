import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Badge } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setIsOpen } from "../redux/slices/cartSlice";

function Header() {
  const { quantity } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const location = useLocation();
  return (
    <header className="sticky top-0 px-8 py-4 bg-white z-30 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
        <h1 className="text-4xl">
          <Link to="/">Logo</Link>
        </h1>
        <ul className="flex items-center space-x-5 text-sm font-medium">
          <div className=""></div>
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
        {location.pathname !== "/" && (
          <Badge
            onClick={() => dispatch(setIsOpen(true))}
            badgeContent={quantity}
            className="!cursor-pointer"
            color="success">
            <ShoppingCartIcon className="h-7 text-gray-900 " />
          </Badge>
        )}
      </div>
    </header>
  );
}

export default Header;
