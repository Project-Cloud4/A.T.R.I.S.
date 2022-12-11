import redis from "../../../db/upstash";

export default async (req, res) => {
  const { name: location, shelters } = req.body;

  await redis.lpush(location, ...shelters);

  res.status(200).send("ok");
};
