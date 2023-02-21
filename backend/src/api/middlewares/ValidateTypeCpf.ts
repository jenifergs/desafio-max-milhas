import { type Request, type Response, type NextFunction } from 'express'
import type CustomerCpf from '../interfaces/CustomerCpf'
import { InvalidCpfException } from '../exceptions/Exceptions'
const exception = new InvalidCpfException();

function ValidateTypeCpf(req: Request<CustomerCpf>, res: Response, next: NextFunction) {
const { cpf } = req.body;
if(typeof cpf !== 'string') {
  return res.status(exception.statusCode).json(exception.payload);
}
return next();
}
export default ValidateTypeCpf;