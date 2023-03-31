import { LAST_REALEASE } from '../../GraphQL/Home/index'
import ListCardTopics from './ListCardTopics'

interface GET_SEASON {
  year: number
  estacion: string
}

function ListLastEpisode() {

  const { year, estacion } = GetSeason()

  function GetSeason(): GET_SEASON {
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth();

    let estacion = 'WINTER'
    let anio: number;

    switch (Math.floor(mesActual / 3)) {
      case 0:
        estacion = 'WINTER';
        break;
      case 1:
        estacion = 'SPRING';
        break;
      case 2:
        estacion = 'SUMMER';
        break;
      case 3:
        estacion = 'FALL';
        break;
    }

    anio = fechaActual.getFullYear();

    return { year: anio, estacion };
  }
  
  return (
    <>
      <ListCardTopics query={LAST_REALEASE} variables={{ page: 1, season: estacion, seasonYear: year }} title='Last Episodes' />
    </>
  )

}

export default ListLastEpisode