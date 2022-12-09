//import redis from "../../../../db/upstash"

export default async (req, res) => {
  console.log(req.url.split("/")[3]);

  res.status(200).send();
};
