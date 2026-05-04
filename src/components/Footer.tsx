export default function Footer() {
  return (
    <footer className='bg-black px-5 py-12 text-white'>
      <div className='mx-auto max-w-5xl'>
        <div className='flex items-center gap-2'>
          <img src='/assets/logo-white.png' alt='motipeople logo' className='h-5 w-auto' />
          <span className='text-lg font-extrabold text-white'>motipeople</span>
        </div>

        <p className='mt-4 text-xs leading-6 text-white'>
          이메일 문의 : motipeople@example.com
          <br />
          E-mail: example@gmail.com
          <br />© 2026 motipeople. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
