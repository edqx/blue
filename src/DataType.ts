import { Cell, Vector } from "./Cell";

export enum Type {
    Uint8
}

export class DataType {
    constructor(public readonly vector: Vector, public readonly type: Type) {}
}