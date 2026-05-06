type TermsModalProps = {
  id: string;
  title: string;
  content: string;
};

export default function TermsModal({ id, title, content }: TermsModalProps) {
  return (
    <div
      id={id}
      className='pointer-events-none invisible fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 opacity-0 transition-opacity target:pointer-events-auto target:visible target:opacity-100'
      role='dialog'
      aria-modal='true'
    >
      <div className='flex max-h-[80vh] w-full max-w-2xl flex-col rounded-2xl bg-white text-black shadow-xl'>
        <div className='flex items-center justify-between border-b border-neutral-200 px-5 py-4'>
          <h2 className='text-lg font-bold text-neutral-900'>{title}</h2>

          <a
            href='#footer'
            className='text-2xl leading-none text-neutral-500 transition hover:text-neutral-900'
            aria-label='모달 닫기'
          >
            ×
          </a>
        </div>

        <div className='overflow-y-auto whitespace-pre-line px-5 py-5 text-sm leading-7 text-neutral-700'>
          {content}
        </div>

        <div className='border-t border-neutral-200 px-5 py-4'>
          <a
            href='#footer'
            className='block w-full rounded-xl bg-black py-3 text-center text-sm font-semibold text-white transition hover:bg-neutral-800'
          >
            확인
          </a>
        </div>
      </div>
    </div>
  );
}
