import { NextApiRequest, NextApiResponse } from "next";
import nextConnect, { NextHandler } from "next-connect";
import { MongoClient, ServerApiVersion, ConnectOptions, Db } from "mongodb";

export interface ExtendedRequest extends NextApiRequest {
  db: Db;
}

const uri =
  "mongodb+srv://admin1:admin1password@passionate-heart-cluste.vrrm2uv.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
} as ConnectOptions);

async function databaseMiddleware(
  req: ExtendedRequest,
  res: NextApiResponse,
  next: NextHandler
) {
  req.db = client.db("passionate-heart");
  next();
}

const handler = nextConnect<NextApiRequest, NextApiResponse>();
handler.use(databaseMiddleware);

export default handler;
