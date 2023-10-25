/* eslint-disable no-irregular-whitespace */

import { useState } from "react";

export const InputDrop = ({
  filtro,
  texto,
  updateQuery,
}: {
  filtro: string;
  texto: string;
  updateQuery: (filtro: string, valor: string) => void; // Altere o tipo de retorno para string
}) => {
  const [filter, setFilter] = useState("");

  const onTyping = (e: any) => {
    setFilter(e.target.value);
  };

  const onBlurHandler = () => {
    const newQueryString = `&${filtro}=${filter}`;
    console.log(newQueryString);
    updateQuery(filtro, filter);
  };

  return (
    <div className="ContainerInputDrop">
      <input
        className="inputDrop"
        placeholder={texto}
        onChange={onTyping}
        onBlur={onBlurHandler}
        value={filter}
      />
      
    </div>
  );
};
