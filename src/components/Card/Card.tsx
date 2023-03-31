
import { motion } from 'framer-motion';

interface Props { title?:string, image?:string, description?:string,background?:string }

const Card = ({ title, image, description, background }: Props) => {

  const h3Variant = {
    initial: { scale: 1},
    hover: { scale: 1.1 }
  };

  const cardHover = {
    initial: { scale: 1 },
    hover: { scale: 1.05 }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      whileHover={'hover'}
      variants={cardHover}
      className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 hover:scale-110 min-h-[260px] min-w-[325px] max-w-[325px]`}
      style={{background: background ? background : 'white'}}
    >
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <motion.div
        whileHover={'hover'}
        className="p-6 cursor-pointer flex items-center justify-center">
        <motion.h3
          variants={h3Variant}
          className="text-gray-800 text-xl text-center font-medium mb-2">{title}</motion.h3>
        <p className="text-gray-600 text-base">{description}</p>
      </motion.div>
    </motion.div>
  );
}

export default Card;