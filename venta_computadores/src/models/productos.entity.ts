import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Productos extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
    })
    id_producto: number;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nombre_producto: string;
    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    valor_unitario: number;
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    activo: boolean;
    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    fecha_creacion: Date;
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    usuario_modificacion: number;
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    cantidad: number;
}