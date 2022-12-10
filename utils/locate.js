export default async function getLocation(context) {
  const _res = await fetch("https://artis.bytecrowds.workers.dev/", {
    headers: {
      "X-Forwarded-For": context.req.headers["x-forwarded-for"],
    },
  });

  const data = await _res.json();
  return data.region_name;
}
