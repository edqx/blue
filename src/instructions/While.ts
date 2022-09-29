import { BuildContext, Program } from "../Program";
import { Instruction, InstructionSet } from "./Instruction";

export class WhileInstruction extends Instruction {
    static create(program: Program, set: InstructionSet) {
        const while_ = new WhileInstruction(set);
        return super.init(program, while_);
    }

    constructor(public readonly set: InstructionSet) {
        super();
    }

    toString(build: BuildContext) {
        return "[" + this.set.toString(build) + "]";
    }
}