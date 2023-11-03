import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator"


export class CreatePokemonDto {

    //TODO Entero, positivo, y el valor min es 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number

    //TODO String, Tamaño minimo 1
    @IsString()
    @MinLength(1)
    name: string
}
