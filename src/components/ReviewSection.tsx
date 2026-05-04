const reviews = [
  {
    text: '야근하고 하루 빼먹었는데, 다음 날 다시 시작할 수 있게 격려해줘서 포기하지 않았어요. 예전 같았으면 이미 앱 지웠을 텐데요.',
    meta: '29세 마케터 · 3개월째 지속중',
  },
  {
    text: '야근하고 하루 빼먹었는데, 다음 날 다시 시작할 수 있게 격려해줘서 포기하지 않았어요. 예전 같았으면 이미 앱 지웠을 텐데요.',
    meta: '34세 디자이너 · 주 4회 운동 달성',
  },
  {
    text: '혼자 뛸 때는 툭하면 쉬었는데, 밋업에서 만난 분들과 앱으로 계속 이어가니 한 달째 꾸준히 하고 있어요. 갓생 강요가 없어서 좋아요.',
    meta: '27세 기획자 · 러닝 모임 참여',
  },
];

export default function ReviewSection() {
  return (
    <section id='reviews' className='bg-black px-5 pb-24 md:pb-32'>
      <div className='mx-auto max-w-5xl'>
        <div className='text-center'>
          <h3 className='text-2xl font-extrabold md:text-4xl'>먼저 시작한 사람들의 이야기</h3>

          <p className='mt-4 text-sm text-neutral-400'>완벽하지 않았던 사람들이 만들어낸 꾸준한 변화</p>
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
