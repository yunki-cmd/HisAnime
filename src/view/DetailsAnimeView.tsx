
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import { useGetAnimeById } from '../hooks/Views/DetailAnimeHooks';
import { useEffect, useState } from 'react';
import './styles.css'

function DetailsAnimeView() {

  const { id } = useParams()
  const { data, error, loading } = useGetAnimeById(id!)

  const colores = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];

  const [limit, setLimit] = useState(10); // Estado para almacenar el límite de elementos a mostrar

  function handleVerMasClick() {
    setLimit(limit + 10); // Incrementar el límite en 10 cada vez que se hace clic en el botón
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  if (loading) {
    return (
      <Loading />
    )
  }

  if (error) {
    return (
      <>
        <h3>{error.message}</h3>
      </>
    )
  }


  return (
    <div className={`w-full h-full`}>
      <motion.div
        className='relative w-full -top-6'
      >
        {data.Media?.bannerImage ? <img className='w-full max-h-60 object-cover' src={data.Media.bannerImage} alt={`${data.Media.title.native}-alt`} /> : <div className='min-h-[180px] bg-black flex justify-center items-end'>
          <h2 className='text-white font-bold tracking-wider absolute text-3xl p-6 left-10'>{data.Media.title.native}</h2>
        </div>}
      </motion.div>
      <div className='w-[90%] mx-auto h-full flex flex-row gap-3'>
        <div className='w-[25%]'>
          <motion.div>
            <div className={`w-72 h-96 bg-white shadow-md rounded`}>
              <img className='p-2 py-4 object-contain mx-auto rounded' src={data.Media.coverImage.large} alt={`${data.Media.title.native}-alt`} />
            </div>
          </motion.div>
        </div>
        <div className='w-[75%]'>
          <section className='px-5 py-4 bg-white h-60 shadow-xl rounded w-full'>
            <h4 className='font-bold text-2xl pr-3 mb-1'>Sipnosis</h4>
            <ul className='flex flex-row mb-2 gap-1'>
              {data.Media?.genres && data.Media.genres.map((genero: any, index: number) => {
                const color = colores[index % colores.length];
                return <li className={`px-2 py-1 rounded-md ${color} text-white font-bold`} key={`${genero}-${data.Media.title.native}`}>{genero}</li>
              })
              }
            </ul>
            {
              data.Media?.description ?
                <p className='overflow-y-scroll h-36 pr-5' dangerouslySetInnerHTML={{ __html: data.Media.description }}>
                </p> : <div>no sipnosis</div>
            }
          </section>
          <section className='px-5 py-4 bg-white min-h-[120px] max-h-96 mt-5 shadow-xl rounded w-full overflow-y-scroll'>
            <ul>
              {data.Media.streamingEpisodes.length > 0 ? data.Media.streamingEpisodes.slice(0,limit).map((episodes: any, index: number) => {
                return <CardEpisodes key={index + '-episode-' + episodes.title} episodes={episodes} />
              }) : <div>no hay episodios todavia</div>}
              {limit < data.Media.streamingEpisodes.length && <li className='w-full'>
                <div className='flex flex-row my-2 justify-center items-center'>
                  <button onClick={handleVerMasClick}>
                    <span className='text-gray-400 font-semibold hover:text-red-600'>
                      ver mas
                    </span>
                  </button>
                </div>
              </li>}
            </ul>
          </section>
        </div>
      </div>
      <motion.div className='flex flex-wrap w-[890px] overflow-scroll'>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </motion.div>
    </div>

  )
}

function CardEpisodes({ episodes }: any) {

  function extraerNumeroEpisodio(cadena: string) {
    const regex = /Episode (\d+) - (.+)/;
    const match = regex.exec(cadena);
    return match ? { episode: match[1], title: match[2] } : null;
  }

  return (<>
    <li className='w-full'>
      <div className='flex flex-row my-2'>
        <img src={episodes.thumbnail} className="w-[110px] h-[60px] m-5 rounded " alt="" />
        <a href={episodes.url} target={'_blank'} className='flex justify-start items-center gap-3'>
          <span className='text-gray-600 font-bold'>{extraerNumeroEpisodio(episodes.title)?.episode ? extraerNumeroEpisodio(episodes.title)?.episode : ''}</span>
          <span className='text-gray-400 font-semibold hover:text-blue-500'>
            {extraerNumeroEpisodio(episodes.title)?.title ? extraerNumeroEpisodio(episodes.title)?.title : episodes.title}
          </span>
        </a>
      </div>
    </li>
  </>)
}


export default DetailsAnimeView