import { Add } from "./builtin";
import { Vector } from "./Cell";
import { DataType, Type } from "./DataType";
import { InitializeMacro } from "./macros";
import { Program } from "./Program";

const program = new Program;

const avec = Vector.allocate(program, 1);
InitializeMacro.create(program, avec.cells[0], 6);
const a = new DataType(avec, Type.Uint8);

const bvec = Vector.allocate(program, 1);
InitializeMacro.create(program, bvec.cells[0], 4);
const b = new DataType(bvec, Type.Uint8);

const cvec = Vector.allocate(program, 1);
InitializeMacro.create(program, cvec.cells[0], 10);
const c = new DataType(cvec, Type.Uint8);

const addedab = Add.create(program, a, b);
const addedoc = Add.create(program, addedab.out, c);

console.log(program.toString());

