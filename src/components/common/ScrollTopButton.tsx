import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type='button'
          onClick={handleClickScrollTop}
          aria-label='상단으로 이동'
          className='fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7816] text-xl font-bold text-white shadow-lg md:bottom-8 md:right-8'
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
