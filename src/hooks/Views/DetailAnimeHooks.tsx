import { useQuery } from "@apollo/client"
import { useState,useEffect } from "react"
import { GET_ANIME_BY_ID } from "../../GraphQL/Home"


export function useGetAnimeById(id: string) {

  console.log(id)

  const [data, setData] = useState<null | string>(null)

  if (id) {
    const { data, error } = useQuery(GET_ANIME_BY_ID, { variables: { id: id } })

    console.log(data)

    useEffect(() => {

      if (data) {
        setData(data)
      }

      if (error) {
        setData(`error: ${error.message}`)
      }

    },[data,error])

  }

  return {data: data}
}

