import { XIcon } from "@heroicons/react/outline";
import { Fade, IconButton, Slide } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { resetQuantity, setIsOpen } from "../redux/slices/cartSlice";
import { currencyFormat } from "../utils";

function Cart() {
  const { isOpen, quantity, price, productName } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
        <div
          className={`bg-gray-200  !fixed z-50 w-full right-0 top-0 px-4 pt-5 h-screen flex-grow max-w-[500px] `}>
          <div className="flex justify-between">
            <h1 className="text-3xl text-center">Logo</h1>
            <IconButton onClick={() => dispatch(setIsOpen(false))}>
              <XIcon className="h-7 " />
            </IconButton>
          </div>
          {quantity > 0 ? (
            <div className=" py-12 ">
              <div className="flex gap-2">
                <img
                  className="h-20 object-contain"
                  src="https://m.media-amazon.com/images/I/61pNSwOEi1L._AC_UX569_.jpg"
                  alt=""
                />
                <div className="flex flex-grow items-center justify-between">
                  <div className="">
                    <p className="text-lg font-semibold">{productName}</p>
                    <p className="text-sm text-gray-600">
                      {currencyFormat(price)}{" "}
                    </p>
                  </div>
                  <div className="space-x-2 flex items-center">
                    <span>
                      Quantité: <b>{quantity}</b>
                    </span>
                    <IconButton
                      onClick={() => dispatch(resetQuantity())}
                      color="error">
                      <XIcon className="h-4" />
                    </IconButton>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-end my-4">
                Total: {currencyFormat(price * quantity)}{" "}
              </h2>
            </div>
          ) : (
            <div className="">
              <h2 className="text-2xl font-bold text-center my-12">
                Ya pas, Ajouter des élements
              </h2>
            </div>
          )}
        </div>
      </Slide>
      <Fade in={isOpen}>
        <div
          onClick={() => dispatch(setIsOpen(false))}
          className="fixed inset-0 z-40 transition-all duration-300 bg-black bg-opacity-25 backdrop-blur-sm"
        />
      </Fade>
    </>
  );
}

export default Cart;
