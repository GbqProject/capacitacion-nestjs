import { IsNumber } from "class-validator";

export class ProductosUpdateDto {
  	@IsNumber()
    id: number;
    @IsNumber()
    valor?: number;
    @IsNumber()
    user: number;
    @IsNumber()
    cantidad?: number;
}