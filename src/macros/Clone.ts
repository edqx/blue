import { Cell } from "../Cell";
import { ChangeInstruction, InstructionSet, MoveInstruction, WhileInstruction } from "../instructions";
import { Program } from "../Program";
import { Macro } from "./Macro";

export class CloneMacro extends Macro {
    static create(program: Program, cell: Cell, out: Cell[]) {
        const tmp = Cell.create(program);

        const clone = new CloneMacro(cell, tmp, out);
        return super.init(program, clone);
    }

    constructor(public readonly source: Cell, public readonly tmp: Cell, public readonly dest: Cell[]) {
        super();
    }

    build() {
        return new InstructionSet([
            new MoveInstruction(this.source),
            new WhileInstruction(
                new InstructionSet([
                    new MoveInstruction(this.tmp),
                    new ChangeInstruction(1),
                    ...this.dest.map(c => new InstructionSet([ // clone to each destination
                        new MoveInstruction(c),
                        new ChangeInstruction(1)
                    ])),
                    new MoveInstruction(this.source),
                    new ChangeInstruction(-1)
                ])
            ),
            new MoveInstruction(this.tmp),
            new WhileInstruction(
                new InstructionSet([
                    new MoveInstruction(this.source),
                    new ChangeInstruction(1),
                    new MoveInstruction(this.tmp),
                    new ChangeInstruction(-1),
                ])
            )
        ]);
    }
}