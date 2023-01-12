import { Injectable, Res, Inject } from '@nestjs/common';
import { Productos } from 'src/models/productos.entity';
import { ProductosDto } from './dto/productos.dto';
import { ProductosUpdateDto } from './dto/productoUpdate.dto';
import { ProductosActiveDto } from './dto/productoActive.dto';

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
                    SELECT * FROM venta_computadores.productos;
                `,
                {
                    model: Productos,
                    mapToModel: true,
                }
            );
        } catch(err) {
            throw err;
        }
    }

    async insertProducto(producto: ProductosDto): Promise<any> {
        try {
            return await this.productosRepository.sequelize.query(
                `
                    INSERT INTO venta_computadores.productos(
                        "nombre_producto", "valor_unitario", 
                        "fecha_creacion", "usuario_modificacion",
                        "cantidad")
                    VALUES(:nombre::varchar, :valor::decimal, now(), 
                            :user::integer, :cantidad::integer)
                `,
                {
                    model: Productos,
                    mapToModel: true,
                    replacements: {
                        nombre: producto.nombre,
                        valor: producto.valor,
                        user: producto.user,
                        cantidad: producto.cantidad
                    },
                }
            );
        } catch(err) {
            throw err;
        }
    }

    async updateProducto(producto: ProductosUpdateDto): Promise<any> {
        try {
            return await this.productosRepository.sequelize.query(
                `
                    UPDATE venta_computadores.productos SET 
                        "nombre_producto"=:nombre::varchar,
                        "valor_unitario"=:valor::decimal,
                        "cantidad"=:cantidad::integer,
                        "usuario_modificacion"=:user::integer
                    WHERE "id_producto"=:id::integer;
                `,
                {
                    model: Productos,
                    mapToModel: true,
                    replacements: {
                        nombre: producto.nombre,
                        valor: producto.valor,
                        user: producto.user,
                        cantidad: producto.cantidad,
                        id: producto.id
                    },
                }
            );
        } catch(err) {
            throw err;
        }
    }

    async changeActiveProducto(producto: ProductosActiveDto): Promise<any> {
        try {
            return await this.productosRepository.sequelize.query(
                `
                    UPDATE venta_computadores.productos SET 
                        "activo"=:active::boolean
                    WHERE "id_producto"=:id::integer;
                `,
                {
                    model: Productos,
                    mapToModel: true,
                    replacements: {
                        active: producto.active,
                        id: producto.id
                    },
                }
            );
        } catch(err) {
            throw err;
        }
    }
}
