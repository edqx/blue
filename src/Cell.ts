import { Program } from "./Program";

export class Cell {
    static create(program: Program) {
        const cell = new Cell;
        program.cells.push(cell);
        return cell;
    }

    constructor() {}
}

export class Vector {
    static allocate(program: Program, numCells: number) {
        const cells = [];
        for (let i = 0; i < numCells; i++) {
            cells.push(Cell.create(program));
        }
        return new Vector(cells);
    }

    constructor(public readonly cells: Cell[]) {}

    get size() {
        return this.cells.length;
    }
}