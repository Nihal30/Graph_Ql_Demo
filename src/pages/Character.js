import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import "./Char.css";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);
  console.log({
    error,
    loading,
    data,
  });

  if (error) {
    return (
      <div>
        <h1>Somthing Went Wrong</h1>
      </div>
    );
  }
  if (loading)
    return (
      <div>
        <h1>Loading.....!!!!</h1>
      </div>
    );

  return (
    <div className="Char">
      <img src={data.character.image} width={750} height={750} alt="img" />
      <div className="Char-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Char-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
