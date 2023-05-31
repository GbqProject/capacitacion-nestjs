import { IsNumber } from "class-validator";

export class ProductosDeleteDto {
    @IsNumber()
    id: number;
}