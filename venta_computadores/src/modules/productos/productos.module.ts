import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { ProductosProvider } from './productos.provider';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService, ...ProductosProvider]
})
export class ProductosModule {}
