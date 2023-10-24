import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const url =
    "https://sheet.best/api/sheets/51d49dbd-3154-4da9-803a-ff45411890bd";

  const [open, setOpen] = useState(false);
  const [people, setPeople] = useState([]);
  const [programa, setPrograma] = useState("");
  const [lideres, setLideres] = useState([]);
  const [lider, setLider] = useState("");
  const [nombres, setNombres] = useState([]);
  const [nombre, setNombre] = useState("");
  const [zona, setZona] = useState("");
  const [puesto, setPuesto] = useState("");
  const [mesa, setMesa] = useState("");

  const updateData = async (url, data) => {
    try {
      const response = await axios.put(url, data, {
        headers: { "Content-Type": "application/json" },
      });
      setPeople(response.json);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVotarClick = (e) => {
    e.preventDefault();
    const person = people.filter((item) => item.Nombre === nombre);
    if (person[0].Nombre) {
      // Buscar la posición del objeto en el arreglo `data` basándote en el nombre
      const indice = people.findIndex((item) => item.Nombre === nombre);
      console.log(indice);
      if (indice !== -1) {
        // Objeto encontrado, puedes acceder a él utilizando data[indice]
        const objetoAActualizar = people[indice];
        // Actualizar los valores del objeto encontrado con los nuevos valores
        const objetoActualizado = {
          ...objetoAActualizar,
          Voto: "Si",
        };
        // Actualizar tus datos con el objeto actualizado
        const datosActualizados = [...people];
        datosActualizados[indice] = objetoActualizado;

        updateData(`${url}/${indice}`, objetoActualizado).then(() => {
          window.location.reload();
        });
      } else {
        console.error(`No se encontró el objeto con el nombre: ${nombre}`);
      }
    }
  };

  useEffect(() => {
    let samePrograma = people.filter((item) => item.Programa === programa);
    setLideres(samePrograma.map((item) => item.Lider));
    let sameLider = people.filter((item) => item.Lider === lider);
    setNombres(sameLider.map((item) => item.Nombre));

    if (!!nombre) {
      let sameNombre = people.filter((item) => item.Nombre === nombre);
      setZona(sameNombre.map((item) => item.Zona));
      setPuesto(sameNombre.map((item) => item.Puesto));
      setMesa(sameNombre.map((item) => item.Mesa));
    }
    try {
      axios.get(url).then((response) => {
        setPeople(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, [programa, lider, nombre]);
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
        zona,
        puesto,
        mesa,
        handleVotarClick,
        open,
        setOpen
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
