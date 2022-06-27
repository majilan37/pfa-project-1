import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import { useState, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Validator from "../components/Validator";
import { simulateReaquest } from "../utils";

const data = [
  {
    name: "Plage d'agadir",
    latitude: 30.410753,
    longitude: -9.604345,
  },
  {
    name: "Agadir tassila",
    latitude: 30.384454,
    longitude: -9.523623,
  },
  {
    name: "Al inbiaat 3, Agadir",
    latitude: 30.395179,
    longitude: -9.548747,
  },
  {
    name: "Inezgane",
    latitude: 30.3523115,
    longitude: -9.5514965,
  },
  {
    name: "Quartier administratif",
    latitude: 30.42021,
    longitude: -9.60394,
  },
  {
    name: "El Massira",
    latitude: 30.40913855,
    longitude: -9.56984694998,
  },
];

function Destination() {
  const [marker, setMarker] = useState<typeof data[0] | null>(null);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const prevValue = useRef<string>();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await simulateReaquest(3000);

    const random = Math.abs(Math.floor(Math.random() * data.length - 1));
    setLoading(false);
    setMarker(data[random]);
    prevValue.current = value;
  };

  return (
    <div>
      <Header />
      <main className=" mx-auto py-14 px-5 place-items-center grid gap-2 grid-cols-2">
        <div className="space-y-10">
          <h2 className="text-green-600 text-center text-4xl">
            <span className="text__underline">Ma Destination</span>
          </h2>
          <p className="text-center max-w-md mx-auto">
            Trouvez à tout de suite la localisation de votre patient sur la
            carte juste en entrant <b>l'identification SOS</b> de votre
            bracelet.
          </p>
          <form onSubmit={onSubmit} className="space-y-3" action="">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ID"
              required
            />
            <LoadingButton
              loading={loading}
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#3f9efc",
                textTransform: "capitalize",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#3f81fc",
                  color: "#fff",
                },
              }}
              fullWidth>
              Chercher
            </LoadingButton>
          </form>
          {marker && !loading ? (
            <div className="">
              <p className="text-2xl font-medium">
                le position de <b>{prevValue.current}</b> est:{" "}
              </p>
              <ul>
                <li>
                  <b>- placment:</b> {marker.name}{" "}
                </li>
                <li>
                  <b>- coordonées:</b>
                  <br />
                  <p className="ml-5"> longitude: {marker.longitude}</p>
                  <p className="ml-5"> latitude: {marker.latitude}</p>
                </li>
              </ul>
            </div>
          ) : (
            loading && (
              <div className="flex justify-center">
                <CircularProgress />
              </div>
            )
          )}
        </div>
        <Validator marker={marker} />
      </main>
      <Footer />
    </div>
  );
}

export default Destination;
