import redis from "../../../db/upstash";

export default async (req, res) => {
  const location = req.url.split("/")[3];

  switch (req.body.action) {
    case "list": {
      const shelters = await redis.lrange(location, 0, -1);

      res.status(200).json(shelters);
      break;
    }

    case "add": {
      const location = req.url.split("/")[3];
      const sherlters = req.body.shelters;

      await redis.lpush(location, sherlters);

      res.status(200).send("ok");
      break;
    }

    case "remove": {
      const shelterName = req.body.shelter;

      await redis.lrem(location, 0, shelterName);
      res.status(200).send("ok");
      break;
    }

    case "delete": {
      await redis.del(location);

      res.status(200).send("ok");
      break;
    }
  }
};
