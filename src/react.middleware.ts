import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { join } from 'path';

@Injectable()
export class ReactMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    res.sendFile(join(__dirname, '../../client/dist/index.html'));
  }
}
