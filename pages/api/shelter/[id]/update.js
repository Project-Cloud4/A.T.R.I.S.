import redis from "../../../../db/upstash";

export default async (req, res) => {
  const shelterName = req.url.split("/")[3];
  const data = req.body;

  if (req.body.name) res.status(400).send("pls don't change name:((");

  await redis.hset(shelterName, data);

  res.status(200).send("ok");
};
