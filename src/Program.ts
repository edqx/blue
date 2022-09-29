import { Cell } from "./Cell";
import { Instruction } from "./instructions";

export interface BuildContext {
    program: Program;
    caret: number;
}

export class Program {
    cells: Cell[];
    instructions: Instruction[];

    constructor() {
        this.cells = [];
        this.instructions = [];
    }

    toString() {
        const ctx: BuildContext = {
            program: this,
            caret: 0
        };
        return this.instructions.map(x => x.toString(ctx)).join("");
    }
}