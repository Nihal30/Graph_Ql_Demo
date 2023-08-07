import { useQuery, gql } from "@apollo/client";
//Query 
const GET_CHAR = gql`
  query {
    characters {
      results {
        id
        image
        name
      }
    }
  }
`;
export const useCharacters = () => {
     //Hookes to call query
  const { error, loading, data } = useQuery(GET_CHAR);
   // obj.error;
    // obj.loading;
    // obj.data;
    console.log({error,loading,data})

  return {
    error,
    data,
    loading,
  };
};
