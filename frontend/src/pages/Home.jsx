import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AllEvents from "../components/AllEvents";

function Home({ userIsLoggedIn }) {
  return (
    <div>
      <Navbar isLoggedIn={userIsLoggedIn} />
      {/* Other content here */}
      <AllEvents />
      <Footer />
    </div>
  );
}

export default Home;