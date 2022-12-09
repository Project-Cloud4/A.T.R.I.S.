import redis from "../../../../db/upstash";

export default async (req, res) => {
  const shelterID = req.url.split("/")[3];

  await redis.del(shelterID);

  res.status(200).send("ok");
};
