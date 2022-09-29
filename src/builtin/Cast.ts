import { DataType, Type } from "../DataType";
import { Program } from "../Program";

export class Cast {
    static create(program: Program, a: DataType, result: Type): Cast {
        return new Cast(a);
    }

    constructor(public readonly out: DataType) {}
}