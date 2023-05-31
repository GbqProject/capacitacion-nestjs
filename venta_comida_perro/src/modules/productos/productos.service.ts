import { Inject, Injectable} from '@nestjs/common';
import { Productos } from 'src/models/productos.entity';
import { ProductosDto } from '../dto/productos.dto';
import { ProductosUpdateDto } from '../dto/productosUpdate.dto';
import { ProductosDeleteDto } from '../dto/productosDelete.dot';

@Injectable()
export class ProductosService {
  constructor(
    @Inject('PRODUCTOS_REPOSITORY')
    private readonly productosRepository: Productos,
  ) {}


  async listProductos(): Promise<Productos[]> {
    try {
        return await this.productosRepository.sequelize.query(
          `
            SELECT * FROM venta_comida_perro.productos;
          `,
          {
            model: Productos,
            mapToModel:true
          }
        )
    } catch (err) {
            throw err;
      }
  }

  async InsertProducto(producto: ProductosDto): Promise<any> {
    try {
        return await this.productosRepository.sequelize.query(
          `
            INSERT INTO venta_comida_perro.productos(
              "nombre_producto", "valor_unitario", 
              "fecha_creacion", "usuario_modificacion", 
              "cantidad")
            VALUES (:nombre::varchar, :valor::money, now(), 
                    :user::integer, :cantidad::integer)
          `,
          {
            model: Productos,
            mapToModel:true,
            replacements: {
              nombre: producto.nombre,
              valor: producto.valor,
              user: producto.user,
              cantidad: producto.cantidad
            }
          }
        )
    } catch (err) {
            throw err;
      }
  }

  async updateProducto(producto: ProductosUpdateDto): Promise<any> {
    try {
        return await this.productosRepository.sequelize.query(
          `
            UPDATE venta_comida_perro.productos SET
                "valor_unitario"=:valor::money,
                "cantidad"=:cantidad::integer,
                "usuario_modificacion"=:user::integer
            WHERE "id_producto"=:id::integer;
          `,
          {
            model: Productos,
            mapToModel:true,
            replacements: {
              valor: producto.valor,
              user: producto.user,
              cantidad: producto.cantidad,
              id: producto.id
            }
          }
        )
    } catch (err) {
            throw err;
      }
  }


  async deleteProducto(producto: ProductosDeleteDto): Promise<any> {
    try {
        return await this.productosRepository.sequelize.query(
          `
            DELETE FROM venta_comida_perro.log_productos WHERE
            "id_producto"=:id::integer;

            DELETE FROM venta_comida_perro.productos WHERE
            "id_producto"=:id::integer;
          `,
          {
            model: Productos,
            mapToModel:true,
            replacements: {
              id: producto.id
            }
          }
        )
    } catch (err) {
            throw err;
      }
  }
}
