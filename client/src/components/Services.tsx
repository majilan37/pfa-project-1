import React from "react";
import { LocationMarkerIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { MedicalServices } from "@mui/icons-material";

interface ServiceProps {
  Icon: React.ElementType;
  title: string;
  text: string;
}

const Service: React.FunctionComponent<ServiceProps> = ({
  Icon,
  text,
  title,
}) => {
  return (
    <div className="grid place-items-center border p-5 space-y-3 max-w-sm bg-gray-50 ">
      <h2 className="text-green-900 text-xl font-semibold">{title}</h2>
      <Icon className="!h-7 !text-green-500 " />
      <p className="text-center text-green-800 ">{text}</p>
      <button className="text__underline">Lire la suite</button>
    </div>
  );
};

function Services() {
  return (
    <div className="grid place-items-center space-y-10 py-8">
      <h2 className="text-center text-3xl font-medium text__underline  ">
        Nos Services
      </h2>
      <div className="flex gap-4 flex-wrap justify-center">
        <Service
          Icon={LocationMarkerIcon}
          title="Mon Docteur"
          text={`Retrouvez le docteur approprié à vos besoins et celui qui est disponible
        près de chez vous pour un RDV m édical rapide.`}
        />
        <Service
          Icon={ShoppingCartIcon}
          title="Mon Bracelet"
          text={`Découvrez nos offres bracelet anti-perte et évitez de rester en besoin de craindre la perte de votre patient.`}
        />
        <Service
          Icon={MedicalServices}
          title="Ma Destination"
          text={`Dirigez-vous directement vers la localisation de votre patient sur la carte que vous fournit notre site Web.`}
        />
      </div>
    </div>
  );
}

export default Services;
