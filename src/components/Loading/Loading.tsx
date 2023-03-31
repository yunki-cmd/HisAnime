import { motion } from "framer-motion";

const Loading = () => (
  <motion.div
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-gray-500 animate-spin"></div>
  </motion.div>
);

export default Loading