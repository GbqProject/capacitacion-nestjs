import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
    getHello(): string {
        return 'Estoy en controlador Productos';
    }
}
