import { IsNumber, IsString } from "class-validator";

export class ProductosDto {
  	@IsString()
    nombre: string;
    @IsNumber()
    valor: number;
    @IsNumber()
    user: number;
    @IsNumber()
    cantidad: number;
}