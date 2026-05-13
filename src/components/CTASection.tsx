export default function CTASection() {
  return (
    <section className='bg-moti-orange px-5 py-20 text-center text-white md:py-24'>
      <h2 className='text-3xl font-extrabold leading-tight md:text-5xl'>
        완벽하지 않아도 괜찮아요.
        <br />
        오늘부터 다시 이어가볼까요?
      </h2>

      <p className='mt-6 text-sm leading-6 text-orange-100'>
        하루 놓쳐도 끝이 아닌, 다시 이어가는 건강 루틴.
        <br />
        motipeople과 가장 쉽게 시작해보세요.
      </p>

      <a
        href='https://forms.gle/ZoqUbpnSYLJVn6qM9'
        target='_blank'
        rel='noopener noreferrer'
        className='mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-bold text-moti-orange transition hover:bg-orange-50'
      >
        앱 사전등록하기 →
      </a>
    </section>
  );
}
