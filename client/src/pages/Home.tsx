import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { useGetMsgQuery } from "../redux/services/test";

function Home() {
  const Services = React.lazy(() => import("../components/Services"));
  const Footer = React.lazy(() => import("../components/Footer"));

  const { data } = useGetMsgQuery();
  console.log(data);
  return (
    <div>
      <Header />
      <Banner />
      <React.Suspense fallback={<div>Loading...</div>}>
        <main className="max-w-7xl mx-auto">
          <Services />
        </main>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default Home;
