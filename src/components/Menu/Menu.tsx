import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

enum TypeMenu {
  'ANIME',
  'MANHWA',
  'MANHUA'
}

const Menu = () => {

  const spanVariant = {
    initial: { scale: 1, rotate: 6 },
    hover: { scale: 1.2, rotate: 14 }
  };

  const [activated, setActive] = useState(TypeMenu.ANIME)


  return (
    <div className="fixed w-full top-0 z-50">
      <nav className="flex justify-center items-center bg-gray-200 py-4 px-10 gap-6">
        <div className="text-xl font-bold text-gray-800"></div>
        <ul className="inline-flex flex-row justify-center items-center">
          <motion.li whileHover={"hover"} className="mr-6 inline-block px-7">
            <Link to="/home" className="text-gray-800 hover:text-gray-600 uppercase">
              <motion.span variants={spanVariant} className={`capitalize text-3xl font-bold text-blue-600 inline-block transform ${activated === TypeMenu.ANIME ? ' rotate-12 ' : ' rotate-6 '} px-[0.5px]`}>A</motion.span>nime
            </Link>
          </motion.li>
          <motion.li whileHover={"hover"} className="mr-6 inline-block px-7">
            <a href="#" className="text-gray-800 hover:text-gray-600 uppercase">
              <motion.span variants={spanVariant} className="capitalize text-3xl font-bold text-red-600 inline-block transform rotate-6 px-[0.5px]">M</motion.span>anhwa
            </a>
          </motion.li>
          <motion.li whileHover={"hover"} className="inline-block px-7">
            <a href="#" className="text-gray-800 uppercase hover:text-gray-600">
              <motion.span variants={spanVariant}
                className="capitalize text-3xl font-bold text-pink-400 inline-block transform rotate-6 px-[0.5px]">M
              </motion.span>
              anhua
            </a>
          </motion.li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;