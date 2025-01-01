import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen font-[family-name:var(--font-geist-sans)]'>
      <header className='flex items-center border-b border-gray-200 p-4 mb-8'>
        <Image
          aria-hidden
          src='/posthog-logo.svg'
          alt='PostHog Logo'
          width={64}
          height={64}
        />
        <h3 className='text-2xl font-bold text-center sm:text-left'>
          PostHog Demo
        </h3>
      </header>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'></main>
    </div>
  );
}
