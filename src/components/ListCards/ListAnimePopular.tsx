import { ANIME_POPULARY } from '../../GraphQL/Home/index'
import ListCardTopics from './ListCardTopics'

function ListAnimePopular() {
  
  return (
      <>
      <ListCardTopics query={ANIME_POPULARY} title='Animes Populares' variables={{ page: 1 }} color='#2E7D32' />
    </>

  )
}

export default ListAnimePopular