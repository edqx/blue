import { DataType } from "../dataTypes/DataType";
import { Instruction } from "./Instruction";

export type BrainfuckChar =  "+"|"-"|"["|"]"|">"|"<"|","|".";

export type WithoutWhitespace<T extends string> = T extends `${infer X}\n${infer Z}`
    ? WithoutWhitespace<`${X}${Z}`>
    : T;

type ParsedAlgorithmStringImplGetFullVarName<VarName extends string, Rest extends string> =
    Rest extends `${infer NextChar}${infer Rest}`
        ? NextChar extends BrainfuckChar
            ? VarName
            : ParsedAlgorithmStringImplGetFullVarName<`${VarName}${NextChar}`, Rest>
        : VarName;

type ParsedAlgorithmStringImpl<T extends string, Obj> = T extends `${infer NextChar}${infer Rest}`
    ? NextChar extends BrainfuckChar
        ? ParsedAlgorithmStringImpl<`${Rest}`, Obj>
        : ParsedAlgorithmStringImplGetFullVarName<NextChar, Rest> extends `${infer VarName}`
            ? `${NextChar}${Rest}` extends `${VarName}${infer Rest2}`
                ? Obj extends Record<VarName, string>
                    ? Obj
                    : ParsedAlgorithmStringImpl<Rest2, Obj & Record<VarName, string>>
                : never
            : never
    : T extends `${string}${infer Rest}`
        ? ParsedAlgorithmStringImpl<Rest, Obj>
        : Obj;

export type ParsedAlgorithmString<T extends string> = keyof ParsedAlgorithmStringImpl<WithoutWhitespace<T>, {}> extends string ? keyof ParsedAlgorithmStringImpl<WithoutWhitespace<T>, {}> : never;

export class Algorithm<UsedVars extends string> {
    static parseFromString<UnparsedAlgorithm extends string>(str: UnparsedAlgorithm) {
        return new Algorithm<ParsedAlgorithmString<UnparsedAlgorithm>>;
    }

    use<T extends Record<UsedVars, DataType>>(macro: T): Instruction[] {
        return [];
    }
}
