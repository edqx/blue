import { BuildContext, Program } from "../Program";
import { Instruction } from "./Instruction";

export class ChangeInstruction extends Instruction {
    static create(program: Program, value: number) {
        const change = new ChangeInstruction(value);
        return super.init(program, change);
    }

    constructor(public readonly value: number) {
        super();
    }

    toString(build: BuildContext) {
        if (this.value > 0) {
            return "+".repeat(this.value);
        }
        return "-".repeat(Math.abs(this.value));
    }
}