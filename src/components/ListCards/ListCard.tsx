import LastCard from "../Card/LastCard"

function ListCards({data}:any) {
  
  return (
    <>
      {data && data.Page.media.map((media:any) => {
              return <LastCard id={media.id} image={media.coverImage.extraLarge} background={media.coverImage.color} title={media?.title.romaji ? media?.title.romaji : media?.title.english } key={media.id} episode={media.nextAiringEpisode?.episode} />
            })}
    </>
  )

}

export default ListCards