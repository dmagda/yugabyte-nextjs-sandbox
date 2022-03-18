// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client, ClientConfig } from 'pg'

const config: ClientConfig = {
    host: '127.0.0.1',
    port: 5433,
    database: 'yugabyte',
    user: 'yugabyte',
    password: 'yugabyte',
};

type Result = {
    name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  const client: Client = new Client(config);

  await client.connect();

  res.status(200).json({ name: 'Connected to YugabyteDB!' })
}
