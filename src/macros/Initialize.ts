import { Cell } from "../Cell";
import { ChangeInstruction, InstructionSet, MoveInstruction } from "../instructions";
import { Program } from "../Program";
import { Macro } from "./Macro";

export class InitializeMacro extends Macro {
    static create(program: Program, cell: Cell, value: number) {
        const init = new InitializeMacro(cell, value);
        return super.init(program, init);
    }

    constructor(public readonly dest: Cell, public readonly value: number) {
        super();
    }

    build() {
        return new InstructionSet([
            new MoveInstruction(this.dest),
            new ChangeInstruction(this.value)
        ]);
    }
}