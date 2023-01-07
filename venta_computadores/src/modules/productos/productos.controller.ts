import { Controller, Get, Res, HttpStatus, Post, Body, Patch} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Productos } from 'src/models/productos.entity';
import { ProductosDto } from './dto/productos.dto';
import { ProductosUpdateDto } from './dto/productoUpdate.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get('/listProductos')
  async listProductos(@Res() res) {
    const productos = await this.productosService.listProductos();

    return res.status(HttpStatus.OK).send({
			status: HttpStatus.OK,
      data: productos,
      message: 'Exitoso'
		})
  }

  @Post('/insertProducto')
  async insertProducto(@Res() res, @Body() producto: ProductosDto) {

    const insert = await this.productosService.insertProducto(producto);

    return res.status(HttpStatus.OK).send({
			status: HttpStatus.OK,
      data: insert,
      message: 'Se creó el producto exitosamente'
		})
  }

  @Patch('/updateProducto')
  async updateProducto(@Res() res, @Body() producto: ProductosUpdateDto) {

    const update = await this.productosService.updateProducto(producto);

    return res.status(HttpStatus.OK).send({
			status: HttpStatus.OK,
      data: update,
      message: 'Se actualizó el producto exitosamente'
		})
  }
}
