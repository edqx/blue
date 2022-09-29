import { BuildContext, Program } from "../Program";

export abstract class Instruction {
    protected static init(program: Program, instruction: Instruction) {
        program.instructions.push(instruction);
        return instruction;
    }

    abstract toString(build: BuildContext): string;
}

export class InstructionSet {
    constructor(public readonly instructions: Instruction[]) {}

    toString(build: BuildContext) {
        return this.instructions.map(x => x.toString(build)).join("");
    }
}