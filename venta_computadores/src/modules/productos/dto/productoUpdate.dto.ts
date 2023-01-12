import { IsNumber, IsString } from "class-validator";

export class ProductosUpdateDto {
  	@IsNumber()
    id: number;
    @IsString()
    nombre?: string;
    @IsNumber()
    valor?: number;
    @IsNumber()
    user: number;
    @IsNumber()
    cantidad?: number;
}