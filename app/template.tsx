'use client';
import {motion} from 'framer-motion';

export default function Transition({children}: {children: React.ReactNode}) {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{ease: 'easeInOut', duration: 0.75}}
      className='mt-20'
    >
      {children}
    </motion.div>
  );
}
