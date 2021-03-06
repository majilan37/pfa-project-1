import React, { useCallback, useState } from "react";

interface Props {
  image: string;
  title: string;
  subtitle?: string;
  text: string;
}
const BannerSection: React.FunctionComponent<Props> = ({
  image,
  subtitle,
  text,
  title,
}) => {
  const [readMore, setReadMore] = useState<boolean>(false);
  const onReadMore = useCallback<() => void>(() => {
    setReadMore((p) => !p);
  }, []);
  return (
    <div className="grid lg:grid-cols-2 place-items-center py-7 gap-20 mx-3 lg:m-0">
      <img
        className="object-cover max-w-sm w-full h-[500px] "
        src={image}
        alt="img"
      />
      <div className="px-10 justify-self-start self-start shadow-md space-y-4 bg-gray-100 py-8 ">
        <h1 className="text-4xl font-semibold text-green-400">
          {title} <br /> <span className="text-3xl">{subtitle}</span>
        </h1>
        <p
          className={`text-justify text-xl relative transition-all duration-200 overflow-hidden h-52 before:content-[''] before:absolute 
          before:w-full before:h-72 before:bg-gradient-to-b before:from-transparent before:to-gray-100 before:bottom-0 ${
            readMore && "before:hidden !h-auto"
          } `}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <button
          onClick={onReadMore}
          className='text__underline'
          >
          {!readMore ? "Lire la suite" : "Lire moin "}
        </button>
      </div>
    </div>
  );
};

function Banner() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          zIndex: -1,
        }}
        className="h-96 lg:h-[600px] flex items-center justify-end filter backdrop-brightness-75 ">
        <div className="bg-gradient-to-l from-yellow-100/80 py-4 to-transparent max-w-sm ml-auto px-7 text-transparent">
          <h1 className="text-green-700 font-bold text-2xl ml-4 drop-shadow-md">
            Car de tout coeur nous tenons ?? vous aider
          </h1>
        </div>
      </div>
      <main className="max-w-7xl mx-auto">
        <BannerSection
          title="Alzheimer :"
          subtitle="Malade d??sint??ress?? & Famille stress??e."
          image="https://images.pexels.com/photos/407422/pexels-photo-407422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          text={`La premi??re chose qui vient ?? l'esprit lorsque l'on parle d'avoir des
          trous de m??moire dans la vieillesse, c'est la maladie d'<b>Alzheimer</b>
          . Une maladie qui se r??pand ?? un rythme effr??n??.
          <br /> <br />
          <b>Au Maroc</b>, m??me s???il n???y a pas de statistiques exactes, on estime
          que le nombre de personnes atteintes d???Alzheimer d??passerait les
          150.000, c'est ce qui aide cette maladie de commencer ?? poser un
          v??ritable probl??me de sant?? publique, en raison essentiellement du
          manque d???infrastructures pour la prise en charge des malades .`}
        />
      </main>
      <section
        style={{
          backgroundImage: "url('/images/img-2.jpeg')",
        }}
        className="flex flex-col lg:flex-row relative justify-around gap-4 px-7 py-3 items-center text-white before:content-[''] before:absolute before:top-0 before:bottom-0 
        before:left-0 before:right-0 before:pointer-events-none before:-z-10 before:bg-[rgba(0,0,0,0.5)] ">
        <p className="max-w-2xl bg-white p-5 text-gray-900 rounded-tl-xl rounded-br-xl ">
          Faute de centre sp??cialis?? dans la prise en charge des malades
          d'Alzheimer au Maroc, les familles sont livr??es ?? elles m??mes et
          finissent par s'??puiser. Dans un couple c'est le conjoint qui prend en
          charge l'??pouse, ou inversement. Mais lorsque le conjoint d??c??de, il
          n'y a tr??s souvent qu'un seul enfant qui prend le relai au sein de la
          fraterie.
        </p>
        <img
          className="object-contain h-56 rounded-tl-xl rounded-br-xl"
          src="/images/img-3.jpeg"
          alt=""
        />
      </section>
      <main className="max-w-7xl mx-auto">
        <BannerSection
          title="A propos de nous: "
          image="/images/img-4.jpeg"
          text={` <br /> Dans le cas d'Alzheimer, avec chaque patient on trouve un accompagnant
          ou un aidant. Ce dernier est un proche non professionnel de la sant?? et
          qui s'occupe au quotidien de la personne atteinte de cette maladie.<br /> <br />
          <b>Notre objectif</b> est lui offrir l???information et des propositions d'outils
          pour mieux vivre l???accompagnement, dans un cadre de confort et de
          rassurance. L'accent n'est pas mis sur l'aspect m??dical, mais bien sur
          la relation avec la personne.`}
        />
      </main>
    </>
  );
}

export default Banner;
