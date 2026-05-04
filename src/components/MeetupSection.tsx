export default function MeetupSection() {
  return (
    <section id='offline' className='bg-black px-5 py-24 md:py-32'>
      <div className='mx-auto max-w-5xl'>
        <div className='grid items-center gap-10 md:grid-cols-2'>
          <div>
            <span className='text-xs text-neutral-400'>motipeople meetup!</span>

            <h2 className='mt-4 text-3xl font-extrabold leading-tight md:text-5xl'>
              화면 밖에서도
              <br />
              이어지는 건강한 연결
            </h2>

            <p className='mt-6 text-sm leading-7 text-neutral-400'>
              부담없는 자극이 필요할 때, 같은 목표를 가진 갓생러들과
              <br />
              화면 밖에서도 루틴을 자연스럽게 이어나가보세요.
            </p>

            <button className='mt-8 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-neutral-200'>
              진행중인 밋업 살펴보기 →
            </button>
          </div>

          <div className='overflow-hidden rounded-3xl'>
            <img src='/assets/meetup.png' alt='모티피플 모임 사진' className='h-full w-full object-cover' />
          </div>
        </div>
      </div>
    </section>
  );
}
