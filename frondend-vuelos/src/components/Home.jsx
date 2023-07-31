import React from 'react'
import { ListVuelosContext } from "../context/ListVuelosContext";
import { useContext, useEffect } from "react";
function Home() {
  const {isAuth ,init} =useContext(ListVuelosContext);
  useEffect(() => {
    init()
  }, [])
  return (
    <div>
        <h1 className="text-3xl font-bold underline">
      Bienvenido 
    </h1>
    </div>
  )
}

export default Home
