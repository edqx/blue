import { Cell } from "../Cell";
import { BuildContext, Program } from "../Program";
import { Instruction } from "./Instruction";

export class MoveInstruction extends Instruction {
    static create(program: Program, cell: Cell) {
        const move = new MoveInstruction(cell);
        return super.init(program, move);
    }

    constructor(public readonly cell: Cell) {
        super();
    }

    toString(build: BuildContext) {
        const memPos = build.program.cells.indexOf(this.cell);
        const caret = build.caret;
        build.caret = memPos;

        if (memPos > caret) {
            return ">".repeat(memPos - caret);
        }

        return "<".repeat(caret - memPos);
    }
}