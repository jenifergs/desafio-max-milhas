import { Request, Response } from 'express'
import { CpfExceptions } from '../exceptions/Exceptions'
import type CustomerCpf from '../interfaces/CustomerCpf'
import RegisterCpfService from '../service/RegisterCpfService'


export default class CustomerCpfController {
  service: RegisterCpfService
  constructor( service?: RegisterCpfService) {
    this.service = service || new RegisterCpfService()
  }

    newRegisterCpf = async (request: Request<CustomerCpf>, response: Response) => {
    const { cpf } = request.body

    try {
      const customerCpf = await this.service.registerNew(cpf)
      return response.status(201).json(customerCpf)
      
    } catch (error) {
      this.handleError(error, response)
    }

  }

  getCpf = async (request: Request<CustomerCpf>, response: Response) => {
    const { cpf } = request.params
    try {
      const customerCpf = await this.service.getCpf(cpf)
      return response.status(200).json(customerCpf)
      
    } catch (error) {
      this.handleError(error, response)
    }
  }

  deleteCpf = async (request: Request<CustomerCpf>, response: Response) => {
    const { cpf } = request.params
    try {
      const customerCpf = await this.service.deleteCpf(cpf)
      return response.status(204).json(customerCpf)
      
    } catch (error) {
      this.handleError(error, response)
    }
  }

  getAllCpfs = async (request: Request<CustomerCpf>, response: Response) => {
    try {
      const customerCpf = await this.service.getAllCpfs()
      return response.status(200).json(customerCpf)

    } catch (error) {
      this.handleError(error, response)
    }
  }

  private handleError = (error: unknown, response: Response) => {
    if (error instanceof CpfExceptions) {
      return response.status(error.statusCode).json(error.payload)
    }
    return response.status(500).json({ message: 'Internal server error' })
  }
}