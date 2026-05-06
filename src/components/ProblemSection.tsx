import FadeIn from '@/components/common/FadeIn';

const problemCards = [
  {
    title: '퇴근 후 운동하기엔\n이미 너무 지쳐 있어요',
    image: '/assets/problem-01.png',
  },
  {
    title: '한번 흐름이 끊기면\n다시 시작하기가 너무 힘들어요',
    image: '/assets/problem-02.png',
  },
  {
    title: '일정이 많을수록\n운동은 늘 우선순위에서 밀리게 돼요',
    image: '/assets/problem-03.png',
  },
];

export default function ProblemSection() {
  return (
    <section className='bg-black px-5 py-24 md:py-32'>
      <div className='mx-auto max-w-5xl text-center'>
        <FadeIn y={30}>
          <h1 className='text-3xl font-extrabold tracking-tight md:text-5xl'>왜 매번 루틴은 끊길까요?</h1>

          <p className='mx-auto mt-8 max-w-xl text-sm leading-7 text-neutral-300 md:text-base'>
            야근, 회식, 피로... 우리의 일상은 변수가 너무 많습니다.
            <br />
            의지가 약해서가 아니라, 끊겼을 때 다시 돌아올 구조가 없었을 뿐이에요.
          </p>
        </FadeIn>

        <div className='mt-12 grid gap-5 md:grid-cols-3'>
          {problemCards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.12} y={40}>
              <div className='relative h-[360px] overflow-hidden rounded-3xl md:h-[380px]'>
                <img
                  src={card.image}
                  alt={card.title}
                  className='h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]'
                />

                <div className='absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-black/20' />

                <p className='absolute left-4 right-4 top-7 whitespace-pre-line text-center text-sm font-bold leading-6 text-white md:text-base'>
                  {card.title}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
