import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const url =
    "https://sheet.best/api/sheets/51d49dbd-3154-4da9-803a-ff45411890bd";

  const [people, setPeople] = useState([]);
  const [programa, setPrograma] = useState("");
  const [lideres, setLideres] = useState([]);
  const [lider, setLider] = useState("");
  const [nombres, setNombres] = useState([]);
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    let samePrograma = people.filter((item) => item.Programa === programa);
    setLideres(samePrograma.map((item) => item.Lider));
    let sameLider = people.filter((item) => item.Lider === lider);
    setNombres(sameLider.map((item) => item.Nombre));

    try {
      axios.get(url).then((response) => {
        setPeople(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, [programa, lider]);
  return (
    <ApiContext.Provider
      value={{
        programa,
        setPrograma,
        lideres,
        setLideres,
        lider,
        setLider,
        nombres,
        setNombre,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
