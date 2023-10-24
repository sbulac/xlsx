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
  const [zona, setZona] = useState("");
  const [puesto, setPuesto] = useState("");
  const [mesa, setMesa] = useState("");


  const handleVotarClick = (e) => {
    const person = people.filter(item => item.Nombre === nombre)
    if (person.Nombre) {
      // Buscar la posición del objeto en el arreglo `data` basándote en el nombre
      const indice = people.findIndex((item) => item.Nombre === nombre);

      if (indice !== -1) {
        // Objeto encontrado, puedes acceder a él utilizando data[indice]
        const objetoAActualizar = people[indice];

        // Actualizar los valores del objeto encontrado con los nuevos valores
        const objetoActualizado = {
          ...objetoAActualizar,
          ID: person.ID,
          Nombre: person.Nombre,
          Cedula: person.Cedula,
          Programa: person.Programa,
          Zona: person.Zona,
          Puesto: person.Puesto,
          Mesa: person.Mesa,
          Voto: "Si",
        };

        // Actualizar tus datos con el objeto actualizado
        const datosActualizados = [...people];
        datosActualizados[indice] = objetoActualizado;

        // Llamar a la función para actualizar la hoja de cálculo
        updateData(`${url}/${indice}`, objetoActualizado)
          .then(() => {
            // Recargar la página después de que la actualización esté completa
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error al actualizar datos:", error);
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
      let sameNombre = people.filter(item => item.Nombre === nombre)
      setZona(sameNombre.map(item => item.Zona))
      setPuesto(sameNombre.map(item => item.Puesto))
      setMesa(sameNombre.map(item => item.Mesa))
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
        handleVotarClick
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
