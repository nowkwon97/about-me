// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';

@Controller()
export class AppController {
  @Get()
  serveReactApp(@Res() res): void {
    res.sendFile(join(__dirname, '../../client/dist/index.html'));
  }
}
