import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// abstract class Base {
//   abstract getNombre(): string;

//   imprimirNombre() {
//     console.log(`Mi nombre es ${this.getNombre()}`);
//   }
// }

// class Derivada extends Base {
//   getNombre(): string {
//     return 'Laura';
//   }
// }

// const miInstancia = new Derivada();
// miInstancia.imprimirNombre();
