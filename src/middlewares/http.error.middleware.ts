import { Request, Response } from 'express';
import HttpEexception from '../utils/http.exception';

const httpErrorMiddleware = (err: Error, req: Request, res: Response) => {
  console.log('err', err);

  const { status, message } = err as HttpEexception;
  res.status(status || 500).json({ message });
};

export default httpErrorMiddleware;
