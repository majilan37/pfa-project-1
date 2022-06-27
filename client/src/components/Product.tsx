import {
  ClockIcon,
  HeartIcon as HeartIconOutlined,
  MinusIcon,
  PlusSmIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon, HeartIcon } from "@heroicons/react/solid";
import { Button, Divider, Fade, Grow, IconButton, Rating } from "@mui/material";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  decrementQuantity,
  incrementQuantity,
  resetQuantity,
} from "../redux/slices/cartSlice";
import { currencyFormat } from "../utils";
import Description from "./Description";

function ImageSlider({ images }: { images: string[] }) {
  const [img, setImg] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-end lg:justify-center ">
      <div className="space-x-2 flex lg:grid lg:space-x-0 lg:space-y-2 mt-1 ">
        {images.map((image, index) => (
          <img
            className={`h-12 w-12 object-contain border p-1 cursor-pointer ${
              img === image && "border-green-600"
            } `}
            onClick={() => setImg(image)}
            key={index}
            src={image}
            alt=""
          />
        ))}
      </div>
      <div className="mx-4 border border-green-600 px-2">
        <img
          className="h-64 lg:h-96 lg:w-96 object-contain w-64"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}

function Product() {
  const { quantity, price } = useAppSelector((state) => state.cart);
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const setFavorite = useCallback(() => {
    setActive((p) => !p);
    firstRender.current = true;
  }, []);

  const firstRender = useRef(false);
  useEffect(() => {
    if (firstRender.current) {
      if (active) {
        toast.success("Ajoutée a votre favories");
      } else {
        toast.success("Supprimer de votre favories");
      }
    }
  }, [active]);

  //   console.log(isMounted.current);

  return (
    <main className="max-w-4xl grid md:grid-cols-2 gap-2 justify-center mx-auto py-12">
      <ImageSlider
        images={[
          "/images/Bracelet-1.jpg",
          "/images/Bracelet-2.jpg",
          "/images/Bracelet-3.jpg",
          "/images/Bracelet-4.jpg",
          "/images/Bracelet-5.jpg",
          "/images/Bracelet-6.jpg",
          // "https://m.media-amazon.com/images/I/618j+XgnlNL._AC_SX569._SX._UX._SY._UY_.jpg",
          // "https://m.media-amazon.com/images/I/618Gdd0FqoL._AC_SX569._SX._UX._SY._UY_.jpg",
          // "https://m.media-amazon.com/images/I/61AWbT66y+L._AC_SX569._SX._UX._SY._UY_.jpg",
        ]}
      />
      <div className="space-y-6 px-3 max-w-md md:max-w-full ">
        <Description
          title="Braclet:"
          text="Bracelet anti-perte personnalisé pour les patients de la maladie d'Alzheimer, avec une gravure de notre marque et du nom complet de votre patient."
        />
        <Description
          title="Details: "
          items={[
            "Bracelet de poignet en Silicone",
            "Avec un identification  SOS",
            "Incassable, resistant à l'eau et durable",
          ]}
          render={(item) => <li>- {item}</li>}
        />
        <div className="relative">
          <small>
            <span className="line-through">{currencyFormat(200)}</span> -30%
          </small>
          <p className="text-xl font-bold mb-4">{currencyFormat(price)}</p>
          <Grow in={quantity === 0}>
            <div className="flex space-x-2">
              <Button
                variant="contained"
                onClick={() => dispatch(incrementQuantity())}
                color="success"
                className="!capitalize"
                startIcon={<PlusSmIcon className="h-6" />}
                fullWidth>
                Ajouter au panier
              </Button>
              <IconButton
                onClick={setFavorite}
                className="active:!scale-110 transition-all duration-300 "
                color="error">
                {active ? (
                  <HeartIcon className={`h-7 text-red-500 `} />
                ) : (
                  <HeartIconOutlined className={`h-7 text-red-500 `} />
                )}
              </IconButton>
            </div>
          </Grow>
          <Grow
            {...(!(quantity === 0) ? { timeout: 500 } : {})}
            in={!(quantity === 0)}>
            <div className="flex flex-col  items-center -mt-16 ">
              <div className="space-x-2">
                <IconButton
                  onClick={() => dispatch(incrementQuantity())}
                  color="primary">
                  <PlusSmIcon className="h-6" />
                </IconButton>
                <span>{quantity} dans le panier</span>
                <IconButton
                  onClick={() => dispatch(decrementQuantity())}
                  color="primary">
                  <MinusIcon className="h-6" />
                </IconButton>
              </div>
              <Button
                onClick={() => dispatch(resetQuantity())}
                className="!capitalize"
                variant="contained"
                color="error">
                Supprimer
              </Button>
            </div>
          </Grow>
          <small className="flex items-center space-x-2">
            <ClockIcon className="h-5" /> <span>Livraison sous 15 jours</span>
          </small>
          <Divider variant="middle" className="!my-2" />
          <div className="flex items-center justify-around cursor-pointer">
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
            <small className="flex items-center ">
              <ChevronDownIcon className="h-5" />
              <span>233 évaluation</span>
            </small>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
