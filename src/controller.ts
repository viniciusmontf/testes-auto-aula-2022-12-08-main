import { Request, Response } from "express";
import { Romanos } from "./romanos";

const romanos = new Romanos();

function romanoController(req: Request, resp: Response) {
    const numero = parseInt(req.params.numero);

    const retorno = romanos.converte(numero);

    return resp.status(200).json({ romanos: retorno  });
}

export { romanoController }
