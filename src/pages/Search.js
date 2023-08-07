import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHAR_LOCATION = gql`
  query GetChrName($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export const Search = () => {
  const [name, setName] = useState();

  //using Lazy Query
  const [getLocation, { loading, error, data, called }] = useLazyQuery(
    GET_CHAR_LOCATION,
    {
      variables: {
        name,
      },
    }
  );

  console.log({
    error,
    called,
    data,
    loading,
  });
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocation()}>Search</button>
      {loading && <div>Loading...!!</div>}
      {error && <div>Somthing Went Wrong...!!!!!</div>}
      {
        data &&(
            <ul>
                {
                    data.characters.results.map((char)=>{
                        return <li>{char.location.name}</li>
                    })
                }
            </ul>
        )
      }
    </div>
  );
};
