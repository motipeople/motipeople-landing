import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type MobileFloatingCTAProps = {
  label?: string;
  href?: string;
  onClick?: () => void;
};

export default function MobileFloatingCTA({
  label = '사전등록하기 →',
  href = '#pre-register',
  onClick,
}: MobileFloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (href) {
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type='button'
          onClick={handleClick}
          className='fixed bottom-20 right-6 z-50 rounded-full bg-[#2D2D2D] px-5 py-3 text-sm font-bold text-white shadow-lg md:hidden'
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.25 }}
        >
          {label}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
