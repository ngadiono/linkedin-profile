import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const signinHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (email === 'admin@gmail.com' && password === 'admin') {
    res.status(200).json({ messages: 'Successful Signin!' });
  } else {
    res.status(404).json({ messages: 'User not found.' });
  }
};

export default signinHandler;
