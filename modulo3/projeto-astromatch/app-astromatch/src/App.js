import React, { useState } from "react";
import axios from "axios";
import Home from "./Pages/TelaHome/Home"
import Match from "./Pages/TelaMatch/Match";



export default function App() {
  const [page, setPage] = useState("Home")

  const goToHome=() => {
    setPage("Home")
  }

  const goToMatch=() => {
    setPage("Match")
  }

  const changePage=() => {
    switch (page) {
      case "Home":
        return <Home goToMatch={goToMatch} />
      case "Match":
        return <Match goToHome={goToHome}/>
      default:
        return <Home goToMatch={goToMatch}/>
    }

  }

  return (
    <div>
      {changePage()}
    </div>
  );
}


