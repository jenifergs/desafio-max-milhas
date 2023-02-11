import { type Request, type Response, type NextFunction } from 'express'
import type CustomerCpf from '../interfaces/CustomerCpf'
import { cpf } from 'cpf-cnpj-validator'
import { InvalidCpfException } from '../exceptions/Exceptions'

const exception = new InvalidCpfException();

const ValidationCpf = (request: Request<CustomerCpf>, response: Response, next: NextFunction) => {
  const { cpf: CustomerCpf } = request.body;
  const { cpf: CustomerCpfParams } = request.params;

  if (!(cpf.isValid(CustomerCpf) || cpf.isValid(CustomerCpfParams))) {
    return response.status(exception.statusCode).json(exception.payload);
  }
  return next();
}



export default ValidationCpf;
