import { Program } from "../Program";
import { DataType, Type } from "../DataType";
import { Cast } from "./Cast";
import { CloneMacro } from "../macros";
import { Vector } from "../Cell";

export class Subtract {
    static create(program: Program, a: DataType, b: DataType): Subtract {
        if (b.type !== a.type) {
            const castB = Cast.create(program, b, a.type);
            return this.create(program, a, castB.out);
        }
        
        const outVector = Vector.allocate(program, a.vector.size);
        const out = new DataType(outVector, a.type);

        if (a.type === Type.Uint8) {
            CloneMacro.create(program, a.vector.cells[0], [ outVector.cells[0] ]);
            CloneMacro.create(program, b.vector.cells[0], [ outVector.cells[0] ]);
        }

        return new Subtract(a, b, out);
    }

    constructor(public readonly a: DataType, public readonly b: DataType, public readonly out: DataType) {}
}