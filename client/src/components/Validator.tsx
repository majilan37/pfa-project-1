import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup, ViewState } from "react-map-gl";
import { getCenter } from "geolib";

interface Center {
  longitude: number;
  latitude: number;
}

type ViewPort = Pick<ViewState, "latitude" | "longitude" | "zoom"> & {
  width: string;
  height: string;
};

const AGADIR_CORDINATES = [{ longitude: -9.598107, latitude: 30.427755 }];

function Validator({
  marker,
}: {
  marker: { name: string; longitude: number; latitude: number } | null;
}) {
  console.log(marker);
  const center = getCenter(AGADIR_CORDINATES);
  const [viewPort, setViewPort] = useState<ViewPort>({
    width: "100%",
    height: "100%",
    latitude: (center as Center).latitude,
    longitude: (center as Center).longitude,
    zoom: 11,
  });

  useEffect(() => {
    if (marker) {
      const center = getCenter([
        { latitude: marker?.latitude, longitude: marker?.longitude },
      ]);
      setViewPort((p) => ({
        ...p,
        latitude: (center as Center).latitude,
        longitude: (center as Center).longitude,
        zoom: 13,
      }));
    }
  }, [marker, setViewPort]);

  return (
    <div className="hidden h-[100vh] w-full lg:block ">
      <ReactMapGL
        mapStyle="mapbox://styles/majilan/cktvncrqa2ffu17ok597z8plj"
        {...viewPort}
        // @ts-ignore
        onMove={(e) => setViewPort(e)}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN as string}>
        {marker && (
          <Marker longitude={marker.longitude} latitude={marker.latitude}>
            <p className="cursor-pointer text-3xl animate-bounce">📌</p>
            {/* <Popup
              closeOnClick={true}
              longitude={marker.longitude}
              latitude={marker.latitude}>
              Voi la lempacment
            </Popup> */}
          </Marker>
        )}
      </ReactMapGL>
    </div>
  );
}

export default React.memo(Validator);
