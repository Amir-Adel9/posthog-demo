export const dynamic = 'force-dynamic';

import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const pageViews = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/post-hog/insights/page-views`
  )
    .then((res) => res.json())
    .then((res) => res.pageViewCount);

  const weeklyActiveUsers = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/post-hog/insights/weekly-active-users`
  )
    .then((res) => res.json())
    .then((res) => res.weeklyActiveUsersCount);

  return (
    <div className='min-h-screen font-[family-name:var(--font-geist-sans)] flex flex-col'>
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
      <main className='flex flex-wrap flex-grow gap-8 row-start-2 items-center sm:items-start p-20'>
        <div className='flex flex-col gap-4'>
          <h6 className='text-lg font-bold'>Page Views</h6>
          <div className='border border-gray-200 rounded-md px-20 py-10'>
            <p className='text-4xl font-bold text-center'>{pageViews}</p>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h6 className='text-lg font-bold'>Weekly active users (WAUs)</h6>
          <div className='border border-gray-200 rounded-md px-20 py-10'>
            <p className='text-4xl font-bold text-center'>
              {weeklyActiveUsers}
            </p>
          </div>
        </div>
      </main>
      <footer className='border-t border-gray-200 p-4 mt-8 flex items-center justify-between'>
        <p className='text-sm'>
          This a demo demonstrating how to use the PostHog API in a Next.js
          application
        </p>
        <Link
          href='https://github.com/Amir-Adel9/posthog-demo'
          target='_blank'
          className='text-sm hover:underline'
        >
          Source Code on GitHub
        </Link>
      </footer>
    </div>
  );
}
