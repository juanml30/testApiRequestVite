import { useEffect, useState } from "react"
import { getWikipedia } from "../api/wikipedia";
import { CardParams } from "../types";

export const Card = ({holiday}: CardParams) => {
    const [wikipedia, setWikipedia] = useState(null);
    useEffect(() => {
        const fetchWikipedia = async () => {
            const wikipedia = await getWikipedia({ search: holiday.nombre });
            console.log(wikipedia, 'wikicard', holiday.nombre)
            setWikipedia(wikipedia);
        }
        fetchWikipedia();
    }, [holiday.nombre]);

    console.log(wikipedia, 'wikipedia', holiday.nombre)
  return (
    <div className="card">
      <p>{holiday.fecha} - {holiday.nombre}</p>
      {wikipedia && wikipedia[3] && wikipedia[3][0] ? (
        <a 
          href={wikipedia[3][0]} 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          Leer más en Wikipedia
        </a>
      ) : (
        <p>No se encontró información en Wikipedia</p>
      )}
    </div>
  )
}

export default Card;