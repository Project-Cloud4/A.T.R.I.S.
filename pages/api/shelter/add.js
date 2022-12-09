//import redis from "../../../../db/upstash";
import redis from "../../../db/upstash";

export default async (req, res) => {
  let data = req.body;
  data._id = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substring(0, 7);

  await redis.hset(req.body.name, data);

  res.status(200).send("ok");
};
