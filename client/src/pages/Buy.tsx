import {
  ClockIcon,
  ReceiptRefundIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@heroicons/react/solid";
import { Button, Divider, Grid } from "@mui/material";
import React from "react";
import Cart from "../components/Cart";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";

function Element({ Icon, text }: { Icon: React.ElementType; text: string }) {
  return (
    <div className="grid place-items-center px-3">
      <Icon className="h-7 text-green-600" />
      <span
        className="text-lg text-green-800 text-center font-bold"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}

function Buy() {
  const Footer = React.lazy(() => import("../components/Footer"));
  return (
    <div>
      <Header />
      <div className="">
        <Product />
      </div>
      <Divider
        variant="middle"
        className="!bg-gray-500 !text-gray-500"
        orientation="vertical"
      />
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1642883/pexels-photo-1642883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className=" bg-green-100/50  ">
        <div className="bg-green-100/80 py-12 px-7 h-96">
          <h2 className="text-center text-4xl font-medium leading-[60px] ">
            <span className="font-bold">Car De Tout Coeur Nous</span> <br />{" "}
            Tenons A Vous Aider
          </h2>
        </div>
      </div>
      <div className=" bg-white rounded-md mx-auto max-w-xl -mt-20 p-4 flex justify-evenly ">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className="!bg-green-600 !rounded-md py-2 text-white">
          <Grid item xs className="!text-center">
            <h2 className="text-3xl font-semibold">6</h2>
            <span>
              Notre <br /> Equipe{" "}
            </span>
          </Grid>
          <Divider orientation="vertical" color="#fff" />
          <Grid item xs className="!text-center">
            <h2 className="text-3xl font-semibold">1.500 +</h2>
            <span>
              Vente <br /> réalisées{" "}
            </span>
          </Grid>
          <Divider orientation="vertical" color="#fff" />
          <Grid item xs className="!text-center">
            <h2 className="text-3xl font-semibold">1K</h2>
            <span>
              Clients <br /> satisfaits{" "}
            </span>
          </Grid>
        </Grid>
      </div>
      <div className="max-w-5xl my-7 mx-auto grid grid-cols-1 gap-8 lg:gap-3 lg:grid-cols-2 px-5">
        <div className="space-y-2">
          <Description
            title="Pourqu’oi avez-vous besoin d’un tel bracelet :"
            text="L’expérience et le contact avec les familles qui prennent charge des
                  personnes souffrant de la maladie d’Alzheimer, nous apprend que le
                  problème de fugue et d’errance est une réalité et occasionne un stress
                  constant chez les aidants. <br /> <br /> La famille qui héberge un membre souffrant de la maladie d’Alzheimer se
                  refuse souvent à sortir pour éviter que l’individu atteint ne commette une
                  fugue. Le bracelet anti-perte permet d’éliminer les risques de
                  disparitions chez la patient, tout en respectant son besoin de liberté et
                  de maintien de ses activités quotidiennes habituelles.  "
          />

          <Description
            title="Les caractéristiques du bracelet : "
            items={[
              "Bracelet confortable. ",
              "Adaptation à toute taille de poignet.",
              "Système de fonctionnement extrêmement simple.",
            ]}
            render={(item) => <li className="text-sm">- {item}</li>}
          />
        </div>
        <img
          src="https://m.media-amazon.com/images/I/61pNSwOEi1L._AC_UX569_.jpg"
          alt=""
        />
      </div>
      <div className="bg-green-200 flex justify-evenly py-6 my-16 flex-wrap gap-4">
        <Element
          Icon={ClockIcon}
          text={"30 jours <br /> pour changer d'avis"}
        />
        <Element Icon={TruckIcon} text={"Livraison <br /> gratuite"} />
        <Element Icon={ShieldCheckIcon} text={"Paiement <br /> sécurisé"} />
        <Element
          Icon={ReceiptRefundIcon}
          text={"Déclaration <br /> de retour"}
        />
      </div>
      <React.Suspense fallback={<div>Chargement...</div>}>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default Buy;
