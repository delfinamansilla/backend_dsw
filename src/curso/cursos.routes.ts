import {Router} from 'express';
import {sanitezeCursoInput, getAll, getOne, add, update, remove } from './cursoscontroler.js';
export const cursoRouter = Router();

cursoRouter.get("/",getAll);
cursoRouter.get("/:identificador",getOne);
cursoRouter.post("/",sanitezeCursoInput,add);
cursoRouter.put("/:identificador",sanitezeCursoInput,update);
cursoRouter.patch("/:identificador",sanitezeCursoInput,update);
cursoRouter.delete("/:identificador",remove);