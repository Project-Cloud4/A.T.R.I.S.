import redis from "../../../db/upstash";

export default async (req, res) => {
  const shelter = req.url.split("/")[3];

  switch (req.body.action) {
    case "get": {
      const shelterData = await redis.hgetall(shelter);

      res.status(200).json(shelterData);
      break;
    }

    case "update": {
      const data = req.body;
      delete req.body.action;

      if (req.body.name) res.status(400).send("pls don't change name:((");

      await redis.hset(shelter, data);
      res.status(200).send("ok");
      break;
    }

    case "delete": {
      await redis.del(shelter);

      res.status(200).send("ok");
      break;
    }
  }
};
