const reviews = [
  {
    text: '야근하고 집에 누워있는데, 다음 날 다시 시작할 수 있게 격려해줘서 포기하지 않았어요. 억지로 하는 앱이 아니라 계속 돌아오게 돼요.',
    meta: '29세 마케터 · 3개월째 지속중',
  },
  {
    text: '혼자 하면 작심삼일인데, 소모임과 인증 루틴이 있으니 흐름이 이어져요. 높은 목표보다 오늘 할 수 있는 만큼 하는 게 좋아졌어요.',
    meta: '34세 디자이너 · 주 4회 운동 달성',
  },
  {
    text: '운동 앱은 늘 부담스러웠는데, 실패해도 다시 이어갈 수 있는 구조라서 오래 쓰고 있어요. 진짜 일상에 맞춰진 느낌이에요.',
    meta: '27세 기획자 · 러닝 모임 참여',
  },
];

export default function MeetupSection() {
  return (
    <section className='bg-black px-5 py-24 md:py-32'>
      <div className='mx-auto max-w-5xl'>
        <div className='grid items-center gap-10 md:grid-cols-2'>
          <div>
            <span className='text-xs text-neutral-400'>motipeople meetup</span>

            <h2 className='mt-4 text-3xl font-extrabold leading-tight md:text-5xl'>
              화면 밖에서도
              <br />
              이어지는 건강한 연결
            </h2>

            <p className='mt-6 text-sm leading-7 text-neutral-400'>
              부담 없는 가벼운 인증부터, 실제 모임까지.
              <br />
              혼자 버티는 루틴을 사람들과 함께 이어나가세요.
            </p>

            <button className='mt-8 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-neutral-200'>
              진행중인 모임 살펴보기 →
            </button>
          </div>

          <div className='overflow-hidden rounded-3xl'>
            <img src='/assets/meetup.png' alt='모티피플 모임 사진' className='h-full w-full object-cover' />
          </div>
        </div>

        <div className='mt-28 text-center'>
          <h3 className='text-2xl font-extrabold md:text-4xl'>먼저 시작한 사람들의 이야기</h3>

          <p className='mt-4 text-sm text-neutral-400'>완벽하지 않아도, 나만의 루틴에서 꾸준히 변화.</p>
        </div>

        <div className='mt-12 grid gap-5 md:grid-cols-3'>
          {reviews.map((review) => (
            <div key={review.meta} className='rounded-2xl bg-neutral-900 p-6 text-left'>
              <div className='text-sm text-orange-400'>★★★★★</div>

              <p className='mt-4 text-sm leading-7 text-neutral-100'>“{review.text}”</p>

              <p className='mt-6 text-xs font-semibold text-orange-400'>{review.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
