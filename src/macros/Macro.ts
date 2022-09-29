import { Instruction, InstructionSet } from "../instructions";
import { BuildContext } from "../Program";

export abstract class Macro extends Instruction {
    abstract build(): InstructionSet;

    toString(build: BuildContext) {
        return this.build().toString(build);
    }
}