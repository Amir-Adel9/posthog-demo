export const dynamic = 'force-dynamic';

export async function GET() {
  const pageViewCount = await fetch(
    `https://us.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/insights/2211376?refresh=force_blocking`,
    {
      headers: {
        Authorization: `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .then((res) => res.result[0].count);

  console.log(pageViewCount);

  return Response.json({ pageViewCount });
}
