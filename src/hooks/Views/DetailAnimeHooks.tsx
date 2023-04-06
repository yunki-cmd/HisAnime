import { useQuery } from "@apollo/client"
import { GET_ANIME_BY_ID } from "../../GraphQL/Home"


export function useGetAnimeById(id: string) {

  if (id) {
    const { data, loading, error } = useQuery(GET_ANIME_BY_ID, { variables: { id: id } })

    return { data, loading, error }
    
  }

  return {data: 'Error no Id'}

}

