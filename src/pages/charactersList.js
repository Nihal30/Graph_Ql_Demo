import React from "react";
import "./CharList.css";
import { useCharacters } from "../hooks/useCharactersList";
import { Link } from "react-router-dom";
import { Search } from "./Search";

function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading)
    return (
      <div>
        <h1>Loading.......!!!!</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <h1>Somthing Went Wrong</h1>
      </div>
    );

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Search For Hero Location{" "}
      </h1>
      <div className="Search">
        <Search />
      </div>

      <div className="CharList">
        {data.characters.results.map((character) => {
          return (
            <Link to={`/${character.id}`} className="img">
              <img src={character.image} alt="Image" />
              <h3>{character.name}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CharactersList;
