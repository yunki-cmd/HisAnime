
import { useParams } from 'react-router-dom';
import { useGetAnimeById } from '../hooks/Views/DetailAnimeHooks';



function DetailsAnimeView() {

  const { id } = useParams()
  const {data} = useGetAnimeById(id!)


  return (
    <>
      <h3>details anime</h3>
      <h2>{id}</h2>
      {JSON.stringify(data)}
    </>
  )
}

export default DetailsAnimeView