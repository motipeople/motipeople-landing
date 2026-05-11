import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import FadeIn from '@/components/common/FadeIn';
import MobileFloatingCTA from '@/components/common/MobileFloatingCTA';

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleClickPreRegister = () => {
    const target = document.querySelector('#pre-register');

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className='min-h-screen bg-gradient-to-b from-[#FFFDF9] to-[#FFDCC2] text-[#2D2D2D]'>
        <header className='fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md'>
          <div className='mx-auto flex h-14 max-w-6xl items-center justify-between px-5'>
            <a href='/' className='flex items-center' aria-label='motipeople home'>
              <img src='/assets/logo-orange.png' alt='motipeople' className='h-5 w-auto' />
            </a>

            <nav className='hidden items-center gap-10 text-sm font-medium text-neutral-500 md:flex'>
              <a href='#features' className='hover:text-black'>
                모티피플 소개
              </a>
              <a href='#offline' className='hover:text-black'>
                오프라인 모임
              </a>
              <a href='#reviews' className='hover:text-black'>
                사용자 후기
              </a>
            </nav>

            <button
              type='button'
              onClick={handleClickPreRegister}
              className='hidden rounded-full bg-[#2D2D2D] px-5 py-2 text-xs font-bold text-white transition hover:bg-black md:block'
            >
              사전등록하기
            </button>

            <button
              type='button'
              aria-label='메뉴 열기'
              onClick={() => setIsMobileMenuOpen(true)}
              className='flex h-10 w-10 items-center justify-center md:hidden'
            >
              <span className='relative block h-4 w-5'>
                <span className='absolute left-0 top-0 h-[2px] w-5 rounded-full bg-[#2D2D2D]' />
                <span className='absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 rounded-full bg-[#2D2D2D]' />
                <span className='absolute bottom-0 left-0 h-[2px] w-5 rounded-full bg-[#2D2D2D]' />
              </span>
            </button>
          </div>
        </header>

        <div className='mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-5 pt-24 text-center'>
          <FadeIn y={30}>
            <h1 className='text-[34px] font-extrabold leading-tight tracking-[-0.04em] md:text-[56px]'>
              끊겨도 다시
              <br />
              이어지는 건강 루틴
            </h1>

            <p className='mt-6 text-sm leading-7 text-neutral-600 md:text-base'>
              하루쯤 놓쳐도 괜찮아요. <br /> 다시 돌아올 수 있도록 돕는
              <br className='hidden md:block' />
              건강 루틴 서비스, motipeople.
            </p>

            <div className='mt-8 flex items-center justify-center gap-3'>
              <button
                type='button'
                onClick={handleClickPreRegister}
                className='rounded-full bg-[#2D2D2D] px-6 py-3 text-sm font-bold text-white transition hover:bg-black'
              >
                앱 사전등록하기 →
              </button>

              <a
                href='#offline'
                className='rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-500 transition hover:border-neutral-500 hover:text-black'
              >
                오프라인 모임 보기
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={60} className='mt-10 flex justify-center'>
            <img
              src='/assets/hero-phone-hand.png'
              alt='손에 든 motipeople 앱 화면'
              className='w-[320px] max-w-full object-contain md:w-[460px]'
            />
          </FadeIn>
        </div>
      </section>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className='fixed inset-0 z-[80] bg-white md:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className='flex h-14 items-center justify-between border-b border-black/5 px-5'>
              <a href='/' className='flex items-center' onClick={handleCloseMobileMenu}>
                <img src='/assets/logo-orange.png' alt='motipeople' className='h-5 w-auto' />
              </a>

              <button type='button' onClick={handleCloseMobileMenu} className='text-xs font-medium text-neutral-500'>
                Close
              </button>
            </div>

            <nav className='flex min-h-[calc(100vh-56px)] flex-col items-center justify-center gap-7 text-[15px] font-medium text-neutral-400'>
              <a href='#features' onClick={handleCloseMobileMenu} className='text-[#2D2D2D]'>
                모티피플 소개
              </a>
              <a href='#offline' onClick={handleCloseMobileMenu} className='text-[#2D2D2D]'>
                오프라인 밋업
              </a>
              <a href='#reviews' onClick={handleCloseMobileMenu} className='text-[#2D2D2D]'>
                사용자 후기
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <MobileFloatingCTA onClick={handleClickPreRegister} />
    </>
  );
}
