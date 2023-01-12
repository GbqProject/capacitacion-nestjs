import { IsBoolean, IsNumber } from "class-validator";

export class ProductosActiveDto {
  	@IsNumber()
    id: number;
    @IsBoolean()
    active: boolean;
}