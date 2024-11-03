import { easeIn, motion } from 'framer-motion';

const TestMotion = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay : 1, type : "tween", easeIn }}>
      <p>Testing Framer Motion</p>
    </motion.div>
  );
};

export default TestMotion;
