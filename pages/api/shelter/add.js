import redis from "../../../db/upstash";

export default async (req, res) => {
  let data = req.body;
  const shelter = req.body.name;
  data._id = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substring(0, 7);

  await redis.hset(shelter, data);

  res.status(200).send("ok");
};
