import redis from "../../../../db/upstash";

export default async (req, res) => {
  const shelterName = req.url.split("/")[3];
  console.log(shelterName);

  const shelterData = await redis.hgetall(shelterName);

  res.status(200).json(shelterData);
};
