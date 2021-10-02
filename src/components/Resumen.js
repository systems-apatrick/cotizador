import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { primerMayus } from "../Helper";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  // extraer datos
  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") return null;
  return (
    <ContenedorResumen>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>Marca: {primerMayus(marca)}</li>
        <li>Año del auto: {year}</li>
        <li>Plan: {primerMayus(plan)} </li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.protoTypes = {
  datos: PropTypes.object.isRequired,
};
export default Resumen;
