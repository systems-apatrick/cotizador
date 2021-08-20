import React, { useState } from "react";
import styled from "@emotion/styled";
import { obtenerDiferenciaYear } from "../Helper";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Botton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #72aaa5;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;
const Formulario = () => {
  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, guardarError] = useState(false);

  // extraer los valores de state
  const { marca, year, plan } = datos;

  // leer los datos del formulario y colocar en el state
  const obtenerInfo = (e) => {
    guardarDatos({ ...datos, [e.target.name]: e.target.value });
  };

  //cuando el usuario presiona submit

  const cotizarSeguro = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || marca.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    //   tenemos un base de 2000
    let resultado = 2000;

    //   obtener la diferencia de años
    const diferencia = obtenerDiferenciaYear(year);

    //   por cada año hay que restar el 3%
    resultado -= (diferencia * 3 * resultado) / 100;

    //   Americano 15
    //   Asiatico 5 %
    //   Europeo 30%

    //   basico aumenta un 20%
    //   completo aumenta un 50%
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInfo}>
          <option value="">--- Seleecione ---</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
          <option value="otro">Otro</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={obtenerInfo}>
          <option value="">--- Seleecione ---</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Plan de Seguro</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInfo}
        />
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInfo}
        />
        Completo
      </Campo>
      <Botton type="submit">Cotizar Seguro</Botton>
    </form>
  );
};

export default Formulario;
