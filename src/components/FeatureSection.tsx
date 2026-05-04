import FadeIn from '@/components/common/FadeIn';

const featureSections = [
  {
    title: '복잡한 기록 없이\n사진 한 장으로 가볍게 인증',
    image: '/assets/feature-certification.png',
    alt: '사진 한 장으로 루틴 인증하는 화면',
    imageClassName: 'max-w-[720px]',
  },
  {
    title: '못한 날도 포기로 이어지지 않도록\n대체 일정과 복귀 흐름까지',
    image: '/assets/feature-recovery.png',
    alt: '대체 일정과 복귀 흐름 화면',
    imageClassName: 'max-w-[760px]',
  },
  {
    title: '비슷한 목표를 가진 사람들과\n함께 이어가는 루틴',
    image: '/assets/feature-community.png',
    alt: '커뮤니티와 루틴 공유 화면',
    imageClassName: 'max-w-[620px]',
  },
  {
    title: '인증 기록이 쌓일수록\n정교해지는 패턴 확인 및 행동 제안',
    image: '/assets/feature-insight.png',
    alt: '인증 기록 기반 패턴 분석 화면',
    imageClassName: 'max-w-[760px]',
  },
];

export default function FeatureSection() {
  return (
    <section id='features' className='bg-white px-5 py-24 text-[#2D2D2D] md:py-32'>
      <div className='mx-auto max-w-6xl text-center'>
        <FadeIn>
          <h2 className='mt-5 text-[32px] font-extrabold leading-tight tracking-[-0.04em] md:text-[52px]'>
            완벽함보다 꾸준함을 위한 설계
          </h2>

          <p className='mt-6 text-base font-normal leading-7 text-neutral-500 md:text-xl'>
            motipeople은 단순한 기록 앱이 아닙니다.
            <br />
            하루 이틀 못해도, 언제든 다시 루틴으로 돌아올 수 있도록 돕습니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} y={30} className='mt-20 flex justify-center md:mt-28'>
          <img
            src='/assets/feature-intro.png'
            alt='motipeople 캐릭터'
            className='w-[180px] object-contain md:w-[240px]'
          />
        </FadeIn>

        <div className='mt-28 space-y-28 md:mt-36 md:space-y-40'>
          {featureSections.map((feature) => (
            <FadeIn key={feature.title} delay={0.1} y={50}>
              <section className='flex flex-col items-center'>
                <h3 className='whitespace-pre-line text-[28px] font-extrabold leading-tight tracking-[-0.04em] text-[#222222] md:text-[42px]'>
                  {feature.title}
                </h3>

                <div className='mt-12 flex w-full justify-center md:mt-16'>
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className={`w-full ${feature.imageClassName} object-contain transition-transform duration-500 hover:scale-[1.02]`}
                  />
                </div>
              </section>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
