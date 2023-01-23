import { DataType } from "./DataType";

export class Uint8Type extends DataType {
    constructor(public readonly initialValue: number) {
        super();
    };
    
    getId(): string {
        return "uint8";
    }
}
