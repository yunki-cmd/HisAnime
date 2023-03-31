import { motion } from 'framer-motion'
interface Props { title?: string, image?: string, description?: string, background?: string, episode?: string, id:number }
import Tooltip from '../ToolTip/Tooltip';
import { Link } from 'react-router-dom';

function LastCard({ title, image, background, episode, id }: Props) {

  const h3Variant = {
    initial: { scale: 1 },
    hover: { scale: 1.1 }
  };

  const cardHover = {
    initial: { scale: 1 },
    hover: { scale: 1.05 }
  }

  const cutTitle = (title: string) => {

    if (title.length > 50) {
      return title.substring(0, 50) + '...';
    }
    return title

  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      whileHover={'hover'}
      variants={cardHover}
      className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 hover:scale-110 min-h-[120px] min-w-[200px] max-w-[200px]`}
      style={{ background: background ? background : 'white' }}
    >
      <div className='relative h-48 w-full'>
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        {episode && <span className="text-red-600 bg-gray-100 opacity-75 rounded-full h-8 w-8 text-base absolute -translate-y-9 right-1 text-center">
          <span className='relative -bottom-1'>{episode}</span>
        </span>}
      </div>
      <motion.div
        whileHover={'hover'}
        className="p-6 cursor-pointer flex items-center justify-center">
        <Tooltip text={title!} position={'left'}>
          <motion.h3
            variants={h3Variant}
            className="text-gray-800 text-sm text-center font-medium mb-2">
            <Link to={`/anime/${id}`} >
              {cutTitle(title!)}
            </Link>
          </motion.h3>
        </Tooltip>
      </motion.div>
    </motion.div>
  );

}

export default LastCard