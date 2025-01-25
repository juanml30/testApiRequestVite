// vendors
import { useEffect, useState } from "react";

// api
import { getWikipedia } from "../api/wikipedia";

// types
import { CardParams } from "../types";

export const Card = ({ holiday }: CardParams) => {
  const [wikipedia, setWikipedia] = useState(null);
  useEffect(() => {
    const fetchWikipedia = async () => {
      const wikipedia = await getWikipedia({ search: holiday.nombre });
      setWikipedia(wikipedia);
    };
    fetchWikipedia();
  }, [holiday.nombre]);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "16px",
        margin: "16px",
        borderRadius: "8px",
      }}
    >
      <p>
        {holiday.fecha} - {holiday.nombre}
      </p>
      {wikipedia && wikipedia[3] && wikipedia[3][0] ? (
        <a href={wikipedia[3][0]} target="_blank" rel="noopener noreferrer">
          Leer más en Wikipedia
        </a>
      ) : (
        <p>No se encontró información en Wikipedia</p>
      )}
    </div>
  );
};

export default Card;
