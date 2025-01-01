export const dynamic = 'force-dynamic';

import Image from 'next/image';

export default async function Home() {
  const pageViews = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/post-hog/insights/page-views`
  )
    .then((res) => res.json())
    .then((res) => res.pageViewCount);

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
      <main className='flex flex-wrap gap-8 row-start-2 items-center sm:items-start p-20'>
        <div className='flex flex-col gap-4'>
          <h6 className='text-lg font-bold'>Page Views</h6>
          <div className='border border-gray-200 rounded-md px-20 py-10'>
            <p className='text-4xl font-bold text-center'>{pageViews}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
