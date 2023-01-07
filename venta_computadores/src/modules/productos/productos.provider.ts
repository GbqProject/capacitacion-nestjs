import { Productos } from "src/models/productos.entity";

export const ProductosProvider = [
    {
        provide: 'PRODUCTOS_REPOSITORY',
        useValue: Productos
    },
]