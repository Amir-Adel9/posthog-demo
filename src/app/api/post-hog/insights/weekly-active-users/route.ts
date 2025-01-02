export const dynamic = 'force-dynamic';

export async function GET() {
  const weeklyActiveUsersCount = await fetch(
    `https://us.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/insights/2211333?refresh=force_blocking`,
    {
      headers: {
        Authorization: `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.result[0].count);

  return Response.json({ weeklyActiveUsersCount });
}
