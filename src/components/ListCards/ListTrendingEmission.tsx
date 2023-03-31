
import { ANIME_TRENDINGS_EMISSION } from '../../GraphQL/Home/index'
import {ListCardTopics} from './index'

function ListTrendingEmission() {

  return (
    <>
      <ListCardTopics query={ANIME_TRENDINGS_EMISSION} variables={{ page: 1 }} title="Treding Animes en emision" color='#C62828'  />
    </>
  )
}

export default ListTrendingEmission