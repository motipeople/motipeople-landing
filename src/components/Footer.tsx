export default function Footer() {
  return (
    <footer className='bg-black px-6 py-12 text-white md:px-10'>
      <div>
        <div className='flex items-center gap-2'>
          <img src='/assets/logo-white.png' alt='motipeople logo' className='h-7 w-auto' />
          <span className='text-2xl font-semibold tracking-[-0.03em] text-white'>motipeople</span>
        </div>

        <div className='mt-6 flex items-center gap-2 text-base font-medium text-white'>
          <a href='/terms' className='transition hover:text-neutral-300'>
            이용약관
          </a>
          <span className='text-neutral-500'>|</span>
          <a href='/privacy' className='transition hover:text-neutral-300'>
            개인정보처리방침
          </a>
        </div>

        <p className='mt-5 text-sm leading-6 text-white'>
          E-mail: motipeople.official@gmail.com
          <br />© 2026 motipeople. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
