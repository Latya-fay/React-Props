import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// Import user data
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      {/* Pass name, city, and color as props to Home */}
      <Home name={user.name} city={user.city} color={user.color} />

      {/* Pass bio and links to About */}
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
